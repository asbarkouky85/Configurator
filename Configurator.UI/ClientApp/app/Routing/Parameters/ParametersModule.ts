import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { RoutingModule } from "../RoutingModule";
import { PageReferenceList } from "./PageReferenceList";


@NgModule({
    declarations: [PageReferenceList,],
    exports: [PageReferenceList,],
    imports: [
		SharedModule,
		RoutingModule,
        RouterModule.forChild([
			﻿{ path : "PageReferenceList", component : PageReferenceList, canActivate: [AuthFilter], data: { name : "Parameters__PageReferenceList", navigate: false, resource:"", action: "anonymous", apps:null }},

		])
    ],
	entryComponents:[]
})
export class ParametersModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Routing/Parameters/PageReferenceList", PageReferenceList);
