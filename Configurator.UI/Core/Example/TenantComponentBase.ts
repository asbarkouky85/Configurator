import { BaseComponent } from "codeshell/baseComponents";
import { AppComponentBase } from "./AppComponentBase";
import { Shell } from "codeshell/core";
import { TenantsService } from "./Http";
import { ActivatedRoute } from "@angular/router";
import { TopBar } from "./Main/topBar";
import { Tenant } from "./Models";
import { ComponentFactoryResolver, Injector } from "@angular/core";

export abstract class TenantComponentBase extends BaseComponent {
    //model: any = {};


    get App(): AppComponentBase { return Shell.Main as AppComponentBase; }

    constructor(rt: ActivatedRoute, res: Injector) {
        super(rt, res);
        this.App.OnTenantChanged.asObservable().subscribe(e => {
            this.tenantChanged(e);
        });


    }

    Refresh() {
        this.OnReady();
    }

    tenantChanged(ten: Tenant | undefined) { }

    ngOnInit() {
        this.App.AppDataReady().then(r => {
            this.OnReady()
        })
    }

    OnReady() {

    }

    getTenantId(): number | undefined {
        return this.App.GetTenantId();
    }
}