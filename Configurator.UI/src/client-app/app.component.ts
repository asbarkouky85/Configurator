import { Component, Injector } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppComponentBase } from '@base/app-base.component';

import { Shell } from 'codeshell/main';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent extends AppComponentBase {

    constructor(inj: Injector, trans: Title) {
        super(inj, trans);
        Shell.Main = this;
    }
}
