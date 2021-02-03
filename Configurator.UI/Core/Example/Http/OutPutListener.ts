import { ServerEventListner } from "codeshell/http/serverEventListener";
import { Observable } from "rxjs";
import { EventEmitter } from "@angular/core";
import { ServerConfig } from "Example/ServerConfig";
import { LogMessage } from "Example/Models";

export class OutPutListener extends ServerEventListner {

    constructor(useServer: boolean = true) {
        var url = (useServer ? (ServerConfig.CurrentApp ? ServerConfig.CurrentApp.ConfigUrl : "") : "") + "/generationHub";
        super(url);
    }

    get SendMessage(): Observable<LogMessage> {
        return this.ObserveAs<LogMessage>("SendMessage",LogMessage);
    }
}