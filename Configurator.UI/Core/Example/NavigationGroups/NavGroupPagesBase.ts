import { ListComponentBase } from "codeshell/baseComponents";
import { Injectable, ViewChild, Injector } from "@angular/core";
import { NavigationGroupsService } from "Example/Http";
import { Shell } from "codeshell/core";
import { NoteType, ComponentRequest, ListItem } from "../../codeshell/helpers";
import { NavigationPageListBase } from "./NavigationPageListBase";
import { NaveListBase } from "./NaveListBase";
import { TenantComponentBase } from "Example/TenantComponentBase";
import { ActivatedRoute } from "@angular/router";
import { Tenant } from "Example/Models";

@Injectable()
export abstract class NavGroupPagesBase extends TenantComponentBase {
    get Service(): NavigationGroupsService { return Shell.Injector.get(NavigationGroupsService); }

    @ViewChild("NaveList") NaveList?: NaveListBase;
    @ViewChild("NavigationPageList") NavigationPageList?: NavigationPageListBase;

    constructor(rt: ActivatedRoute, inj: Injector) {
        super(rt, inj);
    }

    OnReady() {
        Shell.Main.SideBarStatus.emit(false);
        if (this.App.UseState.tenantCode) {
            this.loadNaveGroupPages();
        }
    }

    getPages(item: any) {
        if (this.NavigationPageList) {
            this.Service.naveId = item;
            this.NavigationPageList.tenantId = this.getTenantId();
            this.NavigationPageList.navigationGroupId = item;
            this.NavigationPageList.LoadData();
        }
    }

    AddPage() {
        if (this.NavigationPageList) {
            this.NavigationPageList.AddPages();
        }

    }

    tenantChanged(ten: Tenant | undefined) {
        if (this.NavigationPageList) {
            var id = this.getTenantId();
            if (id)
                this.NavigationPageList.TenantChanged(id);
        }
        this.loadNaveGroupPages();
    }

    loadNaveGroupPages() {
        if (this.NaveList) {
            this.NaveList.LoadData();
        }
    }

    save() {

        if (this.NavigationPageList) {
            var changed = ListItem.GetChangedItems(this.NavigationPageList.list);
            this.Service.Post("Create", changed).then(res => {

                this.Notify("Changed Successfully", NoteType.Success);
                if (this.NavigationPageList) {
                    this.NavigationPageList.LoadData();
                }
            })

        }

    }
}