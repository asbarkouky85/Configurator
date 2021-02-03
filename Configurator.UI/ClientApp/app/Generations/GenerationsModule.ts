import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CodeShellModule } from "codeshell/codeShellModule";
import { SharedModule } from "../Shared/SharedModule";
import { Registry } from "codeshell/core";
import { AuthFilter, ResourceActions } from "codeshell/security";

import { ServerConfigBase } from "codeshell/core";
import { TranslateService } from "@ngx-translate/core";
import { GenerationInofList } from "./GenerationInofList";
import { PageCategorySelect } from "./PageCategorySelect";


@NgModule({
    declarations: [GenerationInofList,PageCategorySelect,],
    exports: [GenerationInofList,PageCategorySelect,],
    imports: [
		SharedModule,
		
        RouterModule.forChild([
{ path:"Development", loadChildren:"./Development/DevelopmentModule#DevelopmentModule" },
	{ path:"Tenants", loadChildren:"./Tenants/TenantsModule#TenantsModule" },
	
		])
    ],
	entryComponents:[GenerationInofList, PageCategorySelect, ]
})
export class GenerationsModule {

    constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Generations/GenerationInofList", GenerationInofList);
Registry.Register("Generations/PageCategorySelect", PageCategorySelect);
