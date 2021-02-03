import { Component } from "@angular/core";
import { Shell, ServerConfigBase } from "codeshell/core";

import { ServerConfig, AppInfo } from "Example/ServerConfig";
import { TopBarBase } from "codeshell/baseComponents/topBarBase";
import { TasksListener } from "Example/Http/TasksListener";
import { TenantsService } from "Example/Http/TenantsService";
import { AppComponentBase } from "Example/AppComponentBase";
import { OutPutListener } from "Example/Http/OutPutListener";
import { GenerationInofBase } from "Example/Generations/GenerationInofBase";
import { Tenant } from "Example/Models";

@Component({ templateUrl: "./topBar.html", selector: "top-bar", exportAs: "top-bar" })
export class TopBar extends TopBarBase {

    apps: AppInfo[] = [];
    currentApp: AppInfo | null = null;
    tenants: Tenant[] = [];
    Tasks = new TasksListener(true);
    sub: any = null;

    get App(): AppComponentBase { return Shell.MainAs<AppComponentBase>(); }

    constructor() {
        super();

        this.Tasks.KeepAlive = true;
        this.Tasks.TaskChanged.subscribe(d => {
            var n: { [key: string]: string } = {};
            n.tenantCode = d.tenantCode as string;
            n.version = d.version as string;
            var mess = Shell.Message(d.message as string, n);
            Shell.Main.ShowPrompt(mess);
        });
    }

    ngOnInit() {
        super.ngOnInit();
        this.apps = (Shell.Injector.get(ServerConfigBase) as ServerConfig).Apps;
        this.currentApp = ServerConfig.CurrentApp;
        this.Tasks.Start();
    }

    appChanged() {
        if (this.currentApp) {
            ServerConfig.CurrentApp = this.currentApp;
            this.App.OnAppChanged.emit(this.currentApp);
        }
    }

    tenantChanged() {
        this.App.SaveState();
        var t = this.tenants.find(d => d.code == this.App.UseState.tenantCode);
        if (t)
            this.App.OnTenantChanged.emit(t);
        else
            this.App.OnTenantChanged.emit(undefined);
    }

    Definition() {
        var ten = this.App.UseState.tenantCode;
        this.App.GetTracer().then(tr => {
            if (ten) {
                tr.Definition(ten);
            }
        })
    }

    

    RenderAll() {
        var ten = this.App.UseState.tenantCode;

        this.App.GetTracer().then(tr => {
            if (ten) {
                tr.RenderAll(ten);
            }
        })

    }
}