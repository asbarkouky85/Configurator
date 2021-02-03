import { NgModule } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ExampleBaseModule } from 'Example/ExampleBaseModule';
import { ServerConfigBase, Registry } from "codeshell/core";
import { DomainTree } from "./DomainTree";
import { DomainTreeSelect } from "./DomainTreeSelect";
import { ServerTracerModal } from "./ServerTracerModal";


@NgModule({
    declarations: [DomainTree,DomainTreeSelect,ServerTracerModal,],
    exports: [
		DomainTree,DomainTreeSelect,ServerTracerModal,
		ExampleBaseModule
	],
    imports: [
        ExampleBaseModule
    ],
	entryComponents:[DomainTree, DomainTreeSelect, ServerTracerModal, ]
})
export class SharedModule {

	constructor(trans: TranslateService, conf: ServerConfigBase) {
        trans.setDefaultLang(conf.Locale);
        trans.use(conf.Locale);
    }
}

Registry.Register("Shared/DomainTree", DomainTree);
Registry.Register("Shared/DomainTreeSelect", DomainTreeSelect);
Registry.Register("Shared/ServerTracerModal", ServerTracerModal);
