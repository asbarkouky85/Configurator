﻿import { Injectable } from "@angular/core";
import { SubmitResult } from "codeshell/results";
import { ConfigHttpService } from "./confighttp.service";

@Injectable()
export class TenantsService extends ConfigHttpService {

    protected get BaseUrl(): string {
        return this.CurrentAppUrl + "/apiAction/Tenants";
    }

    CreateTenant(dto: any): Promise<SubmitResult> {
        return this.PostAs<SubmitResult>("Create", dto);
    }

    Render(connectionId: string): Promise<SubmitResult> {
        debugger;
        return this.PostAs<SubmitResult>("Render", connectionId);
    }
}