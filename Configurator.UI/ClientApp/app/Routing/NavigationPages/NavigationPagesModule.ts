import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { RoutingModule } from "../RoutingModule";
import { NavGroupPages } from "./NavGroupPages";


@NgModule({
    declarations: [NavGroupPages,],
    exports: [NavGroupPages,],
    imports: [
		SharedModule,
		RoutingModule,
        RouterModule.forChild([
			﻿{ path : "NavGroupPages", component : NavGroupPages, canActivate: [AuthFilter], data: { name : "NavigationPages__NavGroupPages", navigate: false, resource:"NavigationGroups", action: "anonymous", apps:null }},

		])
    ],
	entryComponents:[]
})
export class NavigationPagesModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Routing/NavigationPages/NavGroupPages", NavGroupPages);
