import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { GenerationsModule } from "../GenerationsModule";
import { DevelopmentPanel } from "./DevelopmentPanel";


@NgModule({
    declarations: [DevelopmentPanel,],
    exports: [DevelopmentPanel,],
    imports: [
		SharedModule,
		GenerationsModule,
        RouterModule.forChild([
			﻿{ path : "DevelopmentPanel", component : DevelopmentPanel, canActivate: [AuthFilter], data: { name : "Development__DevelopmentPanel", navigate: false, resource:"Generations", action: "anonymous", apps:null }},

		])
    ],
	entryComponents:[]
})
export class DevelopmentModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Generations/Development/DevelopmentPanel", DevelopmentPanel);
