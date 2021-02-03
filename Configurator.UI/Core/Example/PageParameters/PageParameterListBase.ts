import { ListComponentBase } from "codeshell/baseComponents";
import { Injectable, Injector } from "@angular/core";
import { PageParametersService } from "Example/Http";
import { ParameterRequestDTO } from "Example/Dtos";
import { PageParameterTypes, ParameterRequestTypes } from "Example/Enumerations";
import { LoadResult, LoadOptions } from "codeshell/helpers";
import { ActivatedRoute } from "@angular/router";
import { AppComponentBase } from "Example/AppComponentBase";
import { Shell } from "codeshell/core";

@Injectable()
export abstract class PageParameterListBase extends ListComponentBase {
	Service = new PageParametersService();
	model: any = {};
	get App(): AppComponentBase { return Shell.Main as AppComponentBase; }

	Type?: ParameterRequestTypes;
	filterModel: ParameterRequestDTO = new ParameterRequestDTO;

	options: LoadOptions = { Showing: 15, Skip: 0, OrderProperty: "PageViewPath" };

	constructor(rt: ActivatedRoute, res: Injector) {
		super(rt, res);
		this.App.OnTenantChanged.asObservable().subscribe(e => {
			this.tenantChanged(e);
		});
	}

	ClearFilter() {
		this.filterModel = new ParameterRequestDTO();
		this.options.SearchTerm = "";
		this.LoadData();
	}

	tenantChanged(e: any) {
		this.LoadData();
	}

	async LoadDataPromise(): Promise<LoadResult> {
		await this.App.AppDataReady();
		if (!this.App.UseState.tenantCode)
			Promise.resolve(new LoadResult());
		this.filterModel.tenantCode = this.App.UseState.tenantCode;
		if (this.Type)
			this.filterModel.type = this.Type;
		return this.Service.GetReferences(this.filterModel, this.options);
	}
}