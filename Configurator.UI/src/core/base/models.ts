
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

export class AppInfo {
    Name: string = "";
    ConfigUrl: string = "";
}

export class Tenant {
    id: number = 0;
    code: string = "";

}