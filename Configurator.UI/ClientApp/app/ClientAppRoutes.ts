import { Route } from "@angular/router";

import { AuthFilter } from "codeshell/security";
import { DomainData, ResourceActions } from "codeshell/security";
import { Translator } from "codeshell/localization";

import { Login } from "Example/Main/Login";


import { ar_Loader } from "./Localization/ar/Loader";
import { en_Loader } from "./Localization/en/Loader";


var routes: Route[] = [
    { path: 'Login', component: Login, data: { action: 'anonymous', name:"Login" } }
	,
{ path:"Shared", loadChildren:"./Shared/SharedModule#SharedModule" },
	{ path:"Generations", loadChildren:"./Generations/GenerationsModule#GenerationsModule" },
	{ path:"Routing", loadChildren:"./Routing/RoutingModule#RoutingModule" },
	{ path:"Razor", loadChildren:"./Razor/RazorModule#RazorModule" },
	{ path:"Integration", loadChildren:"./Integration/IntegrationModule#IntegrationModule" },
	{ path:"Localization", loadChildren:"./Localization/LocalizationModule#LocalizationModule" },
	
    { path: '**', redirectTo: '/' }

];

Translator.SetLoaders({
    ["ar"]:new ar_Loader, ["en"]:new en_Loader, 
});


let data: DomainData[] | null = null;

export function GetDomainsData(): DomainData[] {
    if (!data) {
        data = [
			{
				name: "Main" ,
				children: [
					{ name: "Tenants__TenantList", navigate: true, resource:"", action: "anonymous", apps: null , url: "Generations/Tenants/TenantList"},
					{ name: "Pages__PageTreeList", navigate: true, resource:"Pages", action: "anonymous", apps: null , url: "Routing/Pages/PageTreeList"},
					{ name: "CustomTexts__CustomTextList", navigate: true, resource:"", action: "allowAll", apps: null , url: "Localization/CustomTexts/CustomTextList"},
					{ name: "NavigationPages__NavGroupPages", navigate: true, resource:"NavigationGroups", action: "anonymous", apps: null , url: "Routing/NavigationPages/NavGroupPages"},
					{ name: "Templates__PageCategoriesTreeList", navigate: true, resource:"PageCategoriesTreeList", action: "anonymous", apps: null , url: "Razor/Templates/PageCategoriesTreeList"},
					{ name: "Resources__ResourceList", navigate: true, resource:"", action: "allowAll", apps: null , url: "Integration/Resources/ResourceList"},
					{ name: "Development__DevelopmentPanel", navigate: true, resource:"Generations", action: "anonymous", apps: null , url: "Generations/Development/DevelopmentPanel"},
					{ name: "Parameters__PageReferenceList", navigate: true, resource:"", action: "anonymous", apps: null , url: "Routing/Parameters/PageReferenceList"},]
			}
		];
    }
    return data;
}

export function Routes(): Route[] { return routes; }