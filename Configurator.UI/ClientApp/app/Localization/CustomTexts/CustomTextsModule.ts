import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { LocalizationModule } from "../LocalizationModule";
import { CustomTextList } from "./CustomTextList";


@NgModule({
    declarations: [CustomTextList,],
    exports: [CustomTextList,],
    imports: [
		SharedModule,
		LocalizationModule,
        RouterModule.forChild([
			﻿{ path : "CustomTextList", component : CustomTextList, canActivate: [AuthFilter], data: { name : "CustomTexts__CustomTextList", navigate: false, resource:"", action: "allowAll", apps:null }},

		])
    ],
	entryComponents:[]
})
export class CustomTextsModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Localization/CustomTexts/CustomTextList", CustomTextList);
