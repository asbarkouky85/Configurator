﻿import { Component } from "@angular/core";
import { PageCategoriesService } from "@base/Http";
import { ServerGenerationService } from "@base/http/servergeneration.service";
import { BaseComponentList } from "@base/Models";
import { Shell } from "codeshell";
import { EditComponentBase } from "codeshell/base-components";

@Component({ template: '' })
export abstract class PageCategoryEditBase extends EditComponentBase {
    Service = new PageCategoriesService();

    Gen = new ServerGenerationService();
    ActiveTab = "Controls";
    baseComponentList: BaseComponentList[] = [
        { name: "List" },
        { name: "Edit" },
        { name: "Tree" },
        { name: "Select" },
    ];

    async LoadLookupsAsync(opts: any): Promise<any> {
        var res = await super.LoadLookupsAsync(opts);
        res.BaseComponent = this.baseComponentList;
        return res;
    }

    Process() {
        this.Gen.CollectTemplateData(this.model.id).then(d => {
            this.Fill(this.model.id);
        });
    }
}