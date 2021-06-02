import { DbCreationRequest } from "@base/dtos";
import { SubmitResult } from "codeshell/results";
import { ConfigHttpService } from "./confighttp.service";

export class ConfigPagesService extends ConfigHttpService {

    get BaseUrl() {
        return this.CurrentAppUrl + "/apiAction/Pages";
    }

    PageMoved(req: any): Promise<SubmitResult> {
        return this.Post("PageMoved", req);
    }

    TenantCreated(req: DbCreationRequest): Promise<SubmitResult> {
        return this.Post("TenantCreated", req);
    }
}