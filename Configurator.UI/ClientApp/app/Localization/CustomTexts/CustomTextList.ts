import { Component } from "@angular/core";
import { CustomTextListBase } from "Example/Localization/CustomTextListBase";

@Component({ templateUrl : "./CustomTextList.html", selector : "customTextList" })
export class CustomTextList extends CustomTextListBase {
	public GetPageId() : number { return 2026652109001; }
	public get CollectionId(): string | null { return null; }
}