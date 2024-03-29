﻿import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { IntegrationModule } from "../IntegrationModule";
import { ResourceList } from "./ResourceList";


@NgModule({
    declarations: [ResourceList,],
    exports: [ResourceList,],
    imports: [
		SharedModule,
		IntegrationModule,
        RouterModule.forChild([
			﻿{ path : "ResourceList", component : ResourceList, canActivate: [AuthFilter], data: { name : "Resources__ResourceList", navigate: false, resource:"", action: "allowAll", apps:null }},

		])
    ],
	entryComponents:[]
})
export class ResourcesModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Integration/Resources/ResourceList", ResourceList);
