import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { ResourceModal } from "./ResourceModal";
import { ResourceEditModal } from "./ResourceEditModal";


@NgModule({
    declarations: [ResourceModal,ResourceEditModal,],
    exports: [ResourceModal,ResourceEditModal,],
    imports: [
		SharedModule,
		
        RouterModule.forChild([
{ path:"Resources", loadChildren:"./Resources/ResourcesModule#ResourcesModule" },
	
		])
    ],
	entryComponents:[ResourceModal, ResourceEditModal, ]
})
export class IntegrationModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Integration/ResourceModal", ResourceModal);
Registry.Register("Integration/ResourceEditModal", ResourceEditModal);
