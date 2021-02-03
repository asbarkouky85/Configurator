import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { RoutingModule } from "../RoutingModule";
import { PageCustomization } from "./PageCustomization";


@NgModule({
    declarations: [PageCustomization,],
    exports: [PageCustomization,],
    imports: [
		SharedModule,
		RoutingModule,
        RouterModule.forChild([
			﻿{ path : "PageCustomization/:id", component : PageCustomization, canActivate: [AuthFilter], data: { name : "PageControls__PageCustomization", navigate: false, resource:"PageControls", action: "anonymous", apps:null }},

		])
    ],
	entryComponents:[]
})
export class PageControlsModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Routing/PageControls/PageCustomization", PageCustomization);
