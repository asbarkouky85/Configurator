import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { RazorModule } from "../RazorModule";
import { PageCategoriesTreeList } from "./PageCategoriesTreeList";
import { PageCategoryEdit } from "./PageCategoryEdit";


@NgModule({
    declarations: [PageCategoriesTreeList,PageCategoryEdit,],
    exports: [PageCategoriesTreeList,PageCategoryEdit,],
    imports: [
		SharedModule,
		RazorModule,
        RouterModule.forChild([
			﻿{ path : "PageCategoriesTreeList", component : PageCategoriesTreeList, canActivate: [AuthFilter], data: { name : "Templates__PageCategoriesTreeList", navigate: false, resource:"PageCategoriesTreeList", action: "anonymous", apps:null }},
			﻿{ path : "PageCategoryEdit/:id", component : PageCategoryEdit, canActivate: [AuthFilter], data: { name : "Templates__PageCategoryEdit", navigate: false, resource:"", action: "allowAll", apps:null }},

		])
    ],
	entryComponents:[]
})
export class TemplatesModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Razor/Templates/PageCategoriesTreeList", PageCategoriesTreeList);
Registry.Register("Razor/Templates/PageCategoryEdit", PageCategoryEdit);
