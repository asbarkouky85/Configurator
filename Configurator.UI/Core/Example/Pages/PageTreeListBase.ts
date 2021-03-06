﻿import { ListComponentBase, BaseComponent } from "codeshell/baseComponents";
import { Injectable, ViewChild, Injector } from "@angular/core";
import { Shell } from "codeshell/core";

import { DomainTreeBase, DomainCountMode } from "../Domains/DomainTreeBase";
import { PagesService } from "../Http/PagesService";
import { PageListBase } from "./PageListBase";
import { RecursionModel, Stored, ComponentRequest } from "../../codeshell/helpers";
import { TenantsService } from "../Http";
import { parseIntAutoRadix } from "@angular/common/src/i18n/format_number";
import { TenantComponentBase } from "Example/TenantComponentBase";
import { ModulesConfigBase } from "../PageCategories/ModulesConfigBase";
import { ActivatedRoute } from "@angular/router";
import { AppComponentBase } from "Example/AppComponentBase";
import { Tenant } from "Example/Models";
import { DomainsService } from "Example/Http/DomainsService";

export class PTLUseState {
    domainId?: number;
    tenantCode?: string;
}

@Injectable()
export abstract class PageTreeListBase extends TenantComponentBase {
    Service = new PagesService();
    TenantsService = new TenantsService();
    DomainSrv = new DomainsService();

    @ViewChild("DomainTree") DomainTree?: DomainTreeBase;
    @ViewChild("PageList") PageList?: PageListBase;

    UseState: PTLUseState = new PTLUseState();
    currentDomain?: RecursionModel | null = null;

    get model() { return this.App.UseState; }

    constructor(rt: ActivatedRoute, inj: Injector) {
        super(rt, inj);
    }

    OnReady() {
        Shell.Main.SideBarStatus.emit(false);

        var stor = Stored.Get("PTLUseState", PTLUseState);
        if (stor) {
            this.UseState = stor;
        }

        if (this.PageList) {
            this.PageList.HideHeader = true;
        }

        if (this.DomainTree) {

            this.DomainTree.tenantId = this.getTenantId();
            this.DomainTree.UseTenantTree = true;
            this.DomainTree.AllowEdit = true;
            this.DomainTree.HideHeader = true;
            this.DomainTree.OnSelectedEvent = domain => this.OnDomainSelected(domain);
            this.DomainTree.CountMode = DomainCountMode.Pages;

            this.DomainTree.OnTreeLoaded = () => {
                if (this.UseState && this.UseState.tenantCode == this.App.UseState.tenantCode && this.UseState.domainId) {
                    this.DomainTree!.SetSelected(this.UseState.domainId);
                }
            };
            this.DomainTree.LoadData();
        }
    }

    tenantChanged(ten: Tenant | undefined) {

        if (this.DomainTree) {

            this.DomainTree.tenantId = this.getTenantId();
            this.DomainTree.LoadCounts();
            this.LoadPages();
        }
        this.SaveState();
    }

    LoadPages() {
        if (this.PageList) {
            this.PageList.Domain = this.currentDomain;
            this.PageList.tenantId = this.getTenantId();
            console.log(this.PageList.Domain, this.PageList.tenantId);
            this.PageList.LoadData();
        }

    }

    OnDomainSelected(item: RecursionModel | null) {
        this.currentDomain = item;
        if (this.PageList && this.currentDomain) {
            this.LoadPages();

        }
        this.SaveState();

    }

    SaveState() {

        this.UseState.domainId = this.currentDomain ? this.currentDomain.id : undefined;
        this.UseState.tenantCode = this.App.UseState.tenantCode;
        Stored.Set("PTLUseState", this.UseState);
    }

    loadPageTreeList() {

    }


}