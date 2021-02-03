import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { PageCategoryList } from "./PageCategoryList";
import { PageCategoryCreate } from "./PageCategoryCreate";
import { ModuleConfigModal } from "./ModuleConfigModal";
import { ServerTracerEmbed } from "./ServerTracerEmbed";


@NgModule({
    declarations: [PageCategoryList,PageCategoryCreate,ModuleConfigModal,ServerTracerEmbed,],
    exports: [PageCategoryList,PageCategoryCreate,ModuleConfigModal,ServerTracerEmbed,],
    imports: [
		SharedModule,
		
        RouterModule.forChild([
{ path:"Templates", loadChildren:"./Templates/TemplatesModule#TemplatesModule" },
	
		])
    ],
	entryComponents:[PageCategoryList, PageCategoryCreate, ModuleConfigModal, ServerTracerEmbed, ]
})
export class RazorModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Razor/PageCategoryList", PageCategoryList);
Registry.Register("Razor/PageCategoryCreate", PageCategoryCreate);
Registry.Register("Razor/ModuleConfigModal", ModuleConfigModal);
Registry.Register("Razor/ServerTracerEmbed", ServerTracerEmbed);
