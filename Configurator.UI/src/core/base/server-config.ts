import { ServerConfigBase } from "codeshell";

export class AppInfo {
    Name: string = "";
    ConfigUrl: string = "";
}

export class ServerConfig extends ServerConfigBase {
    DefaultLocale: string = "";
    Version?: string | null | undefined;
    GoogleKey: string = "";
    BaseURL: string = "";
    Domain: string = "";
    Locale: string = "";
    Urls: any = {};
    Apps: AppInfo[] = [];
    static CurrentApp: AppInfo | null = null;
}