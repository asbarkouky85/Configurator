import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { PageList } from "./PageList";
import { NaveList } from "./NaveList";
import { NavigationPageList } from "./NavigationPageList";
import { NavigationPageCreate } from "./NavigationPageCreate";


@NgModule({
    declarations: [PageList,NaveList,NavigationPageList,NavigationPageCreate,],
    exports: [PageList,NaveList,NavigationPageList,NavigationPageCreate,],
    imports: [
		SharedModule,
		
        RouterModule.forChild([
{ path:"Pages", loadChildren:"./Pages/PagesModule#PagesModule" },
	{ path:"NavigationPages", loadChildren:"./NavigationPages/NavigationPagesModule#NavigationPagesModule" },
	{ path:"PageControls", loadChildren:"./PageControls/PageControlsModule#PageControlsModule" },
	{ path:"Parameters", loadChildren:"./Parameters/ParametersModule#ParametersModule" },
	
		])
    ],
	entryComponents:[PageList, NaveList, NavigationPageList, NavigationPageCreate, ]
})
export class RoutingModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Routing/PageList", PageList);
Registry.Register("Routing/NaveList", NaveList);
Registry.Register("Routing/NavigationPageList", NavigationPageList);
Registry.Register("Routing/NavigationPageCreate", NavigationPageCreate);
