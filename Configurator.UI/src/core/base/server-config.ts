import { ServerConfigBase } from "codeshell";

export class AppInfo {
    Name: string = "";
    ConfigUrl: string = "";
}

export class ServerConfig extends ServerConfigBase {
    DefaultLocale = "en";
    ApiUrl = "http://localhost:8050/";
    Apps: AppInfo[] = [];
    static CurrentApp: AppInfo | null = null;
}