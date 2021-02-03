import { BaseComponent } from "codeshell/baseComponents";
import { Injectable, ViewChild, ElementRef, ComponentFactoryResolver, Injector } from "@angular/core";
import { OutPutListener } from "Example/Http/OutPutListener";
import { ActivatedRoute } from "@angular/router";
import { LogMessage } from "Example/Models";
import { ServerGenerationService } from "Example/Http/ServerGenerationService";
import { SubmitResult } from "codeshell/helpers";

@Injectable()
export abstract class GenerationInofBase extends BaseComponent {

    @ViewChild("container") _containerRef?: ElementRef;

    Container?: HTMLElement;

    list: any[] = [];
    renderModel: any = {};

    OutListener = new OutPutListener();
    Generation = new ServerGenerationService();

    constructor(rt: ActivatedRoute, res: Injector) {
        super(rt, res);
        this.OutListener.SendMessage.subscribe(e => {
            this.AddMessage(e);
        });
    }

    ngOnInit() {
        if (this._containerRef)
            this.Container = this._containerRef.nativeElement;
    }

    Clear() {
        this.list = [];
    }

    AddMessage(d: LogMessage) {
        this.list.push(d);
        if (d.isNew)
            this.list.push({ newLine: true });
        if (this.Container) {
            this.Container.scroll(0, this.Container.scrollHeight);
        }
    }

    async RenderAll(code: string): Promise<SubmitResult> {
        this.Clear();
        this.Show = true;
        var conn = await this.OutListener.Start();
        this.Generation.connectionId = conn;
        return await this.Generation.RenderTenant({ mod: code });
    }

    async Definition(code: string): Promise<SubmitResult> {
        this.Clear();
        this.Show = true;
        var conn = await this.OutListener.Start();
        this.Generation.connectionId = conn;
        return await this.Generation.ModuleDefinition({ mod: code });
    }


}