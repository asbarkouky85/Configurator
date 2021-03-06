import { Injector, ViewChild, EventEmitter } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ServerConfigBase, Shell } from "codeshell/core";
import { IAppComponent } from "codeshell/baseComponents";
import { TestLoader } from "codeshell/core";
import { ServerConfig, AppInfo } from "./ServerConfig";
import { UserDTO } from "codeshell/security";
import { Stored } from "codeshell/helpers";
import { UseState, Tenant } from "./Models";
import { GenerationInofBase } from "./Generations/GenerationInofBase";
import { TenantsService } from "./Http";



export class AppComponentBase extends IAppComponent {

    AppList: AppInfo[] = [];
    TenantList: Tenant[] = [];

    ready: boolean = false;

    OnAppChanged: EventEmitter<AppInfo> = new EventEmitter<AppInfo>();
    OnTenantChanged: EventEmitter<Tenant | undefined> = new EventEmitter<Tenant | undefined>();

    UseState: UseState = new UseState;

    private tenantService = new TenantsService();
    private _tracer?: GenerationInofBase;
    async GetTracer(): Promise<GenerationInofBase> {

        if (!this._tracer) {
            var m = await this.GetDialogAs<GenerationInofBase>("Shared/ServerTracerModal");
            if (m)
                this._tracer = m.instance;
        }
        return this._tracer as GenerationInofBase;
    }

    @ViewChild(TestLoader)
    ModalLoader?: TestLoader | undefined;

    constructor(inj: Injector, trans: Title, conf: ServerConfigBase) {
        super(inj, trans, conf);
        this.AppList = (Shell.Injector.get(ServerConfigBase) as ServerConfig).Apps;

        var state = Stored.Get("use_state", UseState);

        if (state && state.appName) {
            this.UseState = state;
            var info = this.AppList.find(d => d.Name == this.UseState.appName);
            if (info)
                ServerConfig.CurrentApp = info;
        } else if (this.AppList.length > 0) {
            ServerConfig.CurrentApp = this.AppList[0];
            this.UseState.appName = ServerConfig.CurrentApp.Name;
            this.SaveState();
        }


        this.OnAppChanged.subscribe((d: AppInfo) => {
            this.UseState.appName = d.Name;
            this.UseState.tenantCode = undefined;
            this.SaveState();
            location.reload();
        });

    }

    ngOnInit() {
        super.ngOnInit();

    }

    async AppDataReady(): Promise<Tenant[]> {
        if (this.ready)
            return this.TenantList;
        else {


            await Shell.Session.GetUserAsync();
            this.TenantList = await this.loadTenants()
            this.ready = true;
            return this.TenantList;
        }
    }

    async loadTenants(): Promise<Tenant[]> {
        if (ServerConfig.CurrentApp != null) {
            var res = await this.tenantService.GetPaged("Get", { Showing: 0, Skip: 0 });
            return res.list;
        } else {
            return [];
        }
    }

    GetTenantId(): number | undefined {
        var t = this.TenantList.find(d => d.code == this.UseState.tenantCode);
        if (t)
            return t.id;
        return undefined;
    }

    OnStartupNoSession(res: any) {
        this.Router.navigateByUrl("/Login");
    }

    OnLogStatusChanged(st: boolean) {
        if (st)
            this.AppDataReady();
    }

    OnStartupSessionFound(user: UserDTO) {
        if (this.topBar) {
            this.topBar.user = user;
            this.topBar.isLoggedIn = true;
        }
        this.AppDataReady();
    }

    SaveState() {
        Stored.Set("use_state", this.UseState);
    }
}