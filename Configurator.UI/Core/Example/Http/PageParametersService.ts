import { EntityHttpService } from "codeshell/http";
import { Injectable } from "@angular/core";
import { LoadOptions, LoadResult } from "codeshell/helpers";
import { ParameterRequestDTO } from "Example/Dtos";
import { ConfigHttpService } from "./ConfigHttpService";

@Injectable()
export class PageParametersService extends ConfigHttpService {

    protected get BaseUrl(): string {
        return this.CurrentAppUrl+ "/apiAction/PageParameters";
    }


    GetReferences(req:ParameterRequestDTO,op:LoadOptions):Promise<LoadResult>{
        return this.Post("GetReferences",req,op);
    }
}
