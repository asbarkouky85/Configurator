import { LogMessage } from "@base/models";
import { ServerConfig } from "@base/server-config";
import { ServerEventListner } from "codeshell/http";
import { Observable } from "rxjs";


export class OutPutListener extends ServerEventListner {

    constructor(useServer: boolean = true) {
        var url = (useServer ? (ServerConfig.CurrentApp ? ServerConfig.CurrentApp.ConfigUrl : "") : "") + "/generationHub";
        super(url);
    }

    get SendMessage(): Observable<LogMessage> {
        return this.ObserveAs<LogMessage>("SendMessage",LogMessage);
    }
}