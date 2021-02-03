import { Component } from "@angular/core";
import { PageParameterListBase } from "Example/PageParameters/PageParameterListBase";

@Component({ templateUrl : "./PageReferenceList.html", selector : "pageReferenceList" })
export class PageReferenceList extends PageParameterListBase {
	public GetPageId() : number { return 2018663759001; }
	public get CollectionId(): string | null { return null; }
}