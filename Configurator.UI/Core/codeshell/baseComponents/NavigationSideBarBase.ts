﻿import { UserDTO, AuthorizationServiceBase, DomainDataProvider, RouteData } from "codeshell/security";
import { FunctionItem } from "codeshell/security/navs";
import { Shell } from "codeshell/core";

export class NavigationSideBarBase {
    user?: UserDTO;
    isLoggedIn: boolean = false;
    navs: FunctionItem[] = [];

    ngOnInit() {

        Shell.Session.LogStatus.subscribe((v: boolean) => {
            this.isLoggedIn = v
        });
        Shell.Session.GetUserAsync()
            .then(user => {

                this.user = user;
                this.isLoggedIn = true;
                this.LoadNavigation();
            })
            .catch(d => {
                this.LoadNavigation();
            });
        this.OnReady();
    }

    OnReady() { }

    GetMainUrl(): string {
        return "/";
    }

    LoadNavigation() {
        var auth: AuthorizationServiceBase = Shell.Injector.get(AuthorizationServiceBase);
        var doms: DomainDataProvider = Shell.Injector.get(DomainDataProvider);
        for (var dom of doms.Domains) {

            if (dom.name == "Main") {
                for (var c of dom.children) {
                    var r: RouteData = Object.assign(new RouteData, c);
                    if (auth.IsAuthorized(this.user, r) && r.url) {
                        var item: FunctionItem = {
                            name: r.name,
                            url: r.url
                        }
                        this.navs.push(item);
                    }
                }
            }
        }
    }

    Logout() {
        Shell.Session.EndSession();
        location.pathname = "/";
    }
}