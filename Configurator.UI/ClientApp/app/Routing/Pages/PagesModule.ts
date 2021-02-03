import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { RoutingModule } from "../RoutingModule";
import { PageTreeList } from "./PageTreeList";
import { PageCreate } from "./PageCreate";
import { PageEdit } from "./PageEdit";


@NgModule({
    declarations: [PageTreeList,PageCreate,PageEdit,],
    exports: [PageTreeList,PageCreate,PageEdit,],
    imports: [
		SharedModule,
		RoutingModule,
        RouterModule.forChild([
			﻿{ path : "PageTreeList", component : PageTreeList, canActivate: [AuthFilter], data: { name : "Pages__PageTreeList", navigate: false, resource:"Pages", action: "anonymous", apps:null }},
			﻿{ path : "PageCreate", component : PageCreate, canActivate: [AuthFilter], data: { name : "Pages__PageCreate", navigate: false, resource:"", action: "anonymous", apps:null }},
			﻿{ path : "PageEdit/:id", component : PageEdit, canActivate: [AuthFilter], data: { name : "Pages__PageEdit", navigate: false, resource:"", action: "anonymous", apps:null }},

		])
    ],
	entryComponents:[]
})
export class PagesModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Routing/Pages/PageTreeList", PageTreeList);
Registry.Register("Routing/Pages/PageCreate", PageCreate);
Registry.Register("Routing/Pages/PageEdit", PageEdit);
