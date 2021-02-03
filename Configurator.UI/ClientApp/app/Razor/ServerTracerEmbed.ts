import { Component } from "@angular/core";
import { GenerationInofBase } from "Example/Generations/GenerationInofBase";

@Component({ templateUrl : "./ServerTracerEmbed.html", selector : "serverTracerEmbed" })
export class ServerTracerEmbed extends GenerationInofBase {
	public GetPageId() : number { return 2018408398000; }
	public get CollectionId(): string | null { return null; }
}