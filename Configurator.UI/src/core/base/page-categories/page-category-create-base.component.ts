import { Component } from "@angular/core";
import { PageCategoriesService, ResourcesService } from "@base/Http";
import { BaseComponentList } from "@base/Models";
import { Shell } from "codeshell";
import { BaseComponent } from "codeshell/base-components";
import { ListItem } from "codeshell/data";

@Component({template:''})
export abstract class PageCategoryCreateBase extends BaseComponent {

    get Service(): PageCategoriesService { return Shell.Injector.get(PageCategoriesService); }
    res: ResourcesService = new ResourcesService();
    
    SelectedItems: any[] = [];
    list: any[] = [];
    baseComponentList: BaseComponentList[] = [
        { name: "List" },
        { name: "Edit" },
        { name: "Tree" },
        { name: "Select" },
    ];

    ngOnInit() {

        this.Permission.delete = true;
        if (!this.IsEmbedded)
            this.StartAsync();
    }

    async StartAsync(): Promise<void> {
        await this.getResources();
        var res:any[] = await this.Service.GetTemplate();
        this.list = [];
        
        for (var i in res)
            this.list[i] = ListItem.Detached(res[i]);
        
    }

    DeleteTemplate(item: any) {
        var index = this.list.indexOf(item);
        if (index > -1)
            this.list.splice(index, 1);
    }

    async getResources(): Promise<any> {
        var res = await this.res.Get("Get");
        this.Lookups.Resources = res.list;
        this.Lookups.BaseComponent = this.baseComponentList;
        return res;
    }

}