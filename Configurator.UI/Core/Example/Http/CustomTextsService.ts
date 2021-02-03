import { EntityHttpService } from "codeshell/http";
import { Injectable } from "@angular/core";
import { CustomTextRequest } from "Example/Dtos";
import { LoadOptions, LoadResult, ListItem } from "codeshell/helpers";
import { ConfigHttpService } from "./ConfigHttpService";

@Injectable()
export class CustomTextsService extends ConfigHttpService {

    protected get BaseUrl(): string {
        return this.CurrentAppUrl + "/apiAction/CustomTexts";
    }

    async GetData(req: CustomTextRequest, opts: LoadOptions): Promise<LoadResult> {
        var data = await this.PostAs<LoadResult>("Get", req, opts);
        for (var i in data.list) {
            data.list[i] = Object.assign(new ListItem, data.list[i]);
        }
        return data;
    }

    SaveChanges(items: any[]) {
        return this.Post("SaveChanges", items);
    }
}
