﻿import { IModel, DTO, ListItem } from "codeshell/helpers";
import { EditablePairsDTO } from "codeshell/helpers";

export class BaseComponentList {
    name: any = null;
}

export class UseState {
    appName?: string;
    tenantCode?: string;
}

export class LogMessage {
    payload: string = "";
    newLine: boolean = false;
    color?: string;
    isNew?: boolean;
}

export class Tenant {
    id:number=0;
    code: string = "";
    
}