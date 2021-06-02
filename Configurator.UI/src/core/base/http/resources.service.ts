import { Injectable } from "@angular/core";
import { ConfigHttpService } from "./confighttp.service";

@Injectable()
export class ResourcesService extends ConfigHttpService {

    protected get BaseUrl(): string {
        return this.CurrentAppUrl + "/apiAction/Resources";
    }

   

}
