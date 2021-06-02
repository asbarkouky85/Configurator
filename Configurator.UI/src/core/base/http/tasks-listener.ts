import { BundlingTask } from "@base/dtos";
import { ServerConfig } from "@base/server-config";
import { ServerEventListner } from "codeshell/http";
import { Observable } from "rxjs";

export class TasksListener extends ServerEventListner {

    constructor(useServer: boolean) {
        var url = (useServer ? (ServerConfig.CurrentApp ? ServerConfig.CurrentApp.ConfigUrl : "") : "") + "/tasksHub";
        console.log("Connecting to " + url)
        super(url);
    }

    get TaskChanged(): Observable<BundlingTask> {
        return this.ObserveAs<BundlingTask>("TaskChanged", BundlingTask);
    }
}