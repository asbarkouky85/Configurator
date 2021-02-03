(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./ClientApp/app/Integration/IntegrationModule.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/Integration/IntegrationModule.ts ***!
  \********************************************************/
/*! exports provided: IntegrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IntegrationModule\", function() { return IntegrationModule; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\n/* harmony import */ var _Shared_SharedModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/SharedModule */ \"./ClientApp/app/Shared/SharedModule.ts\");\n/* harmony import */ var codeshell_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codeshell/core */ \"./Core/codeshell/core.ts\");\n/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ \"./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js\");\n/* harmony import */ var _ResourceModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResourceModal */ \"./ClientApp/app/Integration/ResourceModal.ts\");\n/* harmony import */ var _ResourceEditModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ResourceEditModal */ \"./ClientApp/app/Integration/ResourceEditModal.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar IntegrationModule = /** @class */ (function () {\r\n    function IntegrationModule(trans, conf) {\r\n        trans.setDefaultLang(conf.Locale);\r\n        trans.use(conf.Locale);\r\n    }\r\n    IntegrationModule = __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"NgModule\"])({\r\n            declarations: [_ResourceModal__WEBPACK_IMPORTED_MODULE_5__[\"ResourceModal\"], _ResourceEditModal__WEBPACK_IMPORTED_MODULE_6__[\"ResourceEditModal\"],],\r\n            exports: [_ResourceModal__WEBPACK_IMPORTED_MODULE_5__[\"ResourceModal\"], _ResourceEditModal__WEBPACK_IMPORTED_MODULE_6__[\"ResourceEditModal\"],],\r\n            imports: [\r\n                _Shared_SharedModule__WEBPACK_IMPORTED_MODULE_2__[\"SharedModule\"],\r\n                _angular_router__WEBPACK_IMPORTED_MODULE_1__[\"RouterModule\"].forChild([\r\n                    { path: \"Resources\", loadChildren: function () { return new Promise(function (resolve, reject) { __webpack_require__.e(/*! require.ensure */ 11).then((function (require) { resolve(__webpack_require__(/*! ./Resources/ResourcesModule */ \"./ClientApp/app/Integration/Resources/ResourcesModule.ts\")['ResourcesModule']); }).bind(null, __webpack_require__)).catch(function (e) { reject({ loadChunkError: true, details: e }); }); }); } },\r\n                ])\r\n            ],\r\n            entryComponents: [_ResourceModal__WEBPACK_IMPORTED_MODULE_5__[\"ResourceModal\"], _ResourceEditModal__WEBPACK_IMPORTED_MODULE_6__[\"ResourceEditModal\"],]\r\n        }),\r\n        __metadata(\"design:paramtypes\", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__[\"TranslateService\"], codeshell_core__WEBPACK_IMPORTED_MODULE_3__[\"ServerConfigBase\"]])\r\n    ], IntegrationModule);\r\n    return IntegrationModule;\r\n}());\r\n\r\ncodeshell_core__WEBPACK_IMPORTED_MODULE_3__[\"Registry\"].Register(\"Integration/ResourceModal\", _ResourceModal__WEBPACK_IMPORTED_MODULE_5__[\"ResourceModal\"]);\r\ncodeshell_core__WEBPACK_IMPORTED_MODULE_3__[\"Registry\"].Register(\"Integration/ResourceEditModal\", _ResourceEditModal__WEBPACK_IMPORTED_MODULE_6__[\"ResourceEditModal\"]);\r\n\n\n//# sourceURL=webpack:///./ClientApp/app/Integration/IntegrationModule.ts?");

/***/ }),

/***/ "./ClientApp/app/Integration/ResourceEditModal.html":
/*!**********************************************************!*\
  !*** ./ClientApp/app/Integration/ResourceEditModal.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p-dialog [(visible)]=\\\"Show\\\" (onHide)=\\\"OnModalHide()\\\" [modal]=\\\"true\\\" >\\r\\n    <p-header>\\r\\n{{'Pages.Integration__ResourceEditModal' | translate }}    </p-header>\\r\\n\\r\\n    <div class=\\\"col-md-12\\\">\\r\\n        <div class=\\\"row\\\" *ngIf=\\\"UseLocalization\\\">\\r\\n            <div class=\\\"col-xs-12 col-md-6 col-xs-offset-0 col-md-offset-6\\\">\\r\\n                <div class=\\\"btn-group btn-group-sm pull-last padBottom\\\">\\r\\n                        <button class=\\\"btn btn-sm\\\" [ngClass]=\\\"CurrentLang=='ar'?'btn-primary':'btn-default'\\\" (click)=\\\"CurrentLang='ar'\\\">\\r\\n                            {{'Words.ar' | translate }}\\r\\n                        </button>\\r\\n                        <button class=\\\"btn btn-sm\\\" [ngClass]=\\\"CurrentLang=='en'?'btn-primary':'btn-default'\\\" (click)=\\\"CurrentLang='en'\\\">\\r\\n                            {{'Words.en' | translate }}\\r\\n                        </button>\\r\\n                </div>\\r\\n            </div>\\r\\n\\r\\n        </div>\\r\\n\\r\\n        <form #Form=\\\"ngForm\\\" >\\n<div class=\\\"row form-group \\\" >\\r\\n    <label class=\\\"col-sm-3 control-label\\\">{{'Columns.Resource__Name' | translate }}</label>\\r\\n    <div class=\\\"col-sm-9\\\">\\r\\n            <p class=\\\"\\\"  >\\r\\n        {{model.name}}\\r\\n    </p>\\r\\n\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n<div class=\\\"row form-group \\\"\\r\\n     id=\\\"FG_domainId\\\"\\r\\n     #FG_domainId=\\\"bsFormGroup\\\" bs-group\\r\\n     >\\r\\n    <label class=\\\"col-sm-3 control-label\\\">\\r\\n        {{'Columns.Resource__DomainId' | translate }}\\r\\n    </label>\\r\\n    <div class=\\\"col-sm-9\\\">\\r\\n        \\r\\n<select class=\\\"form-control\\\"\\r\\n        name=\\\"Form__domainId\\\" \\r\\n        [li-watch]=\\\"model\\\"\\r\\n        [(ngModel)]=\\\"model.domainId\\\"\\r\\n         >\\r\\n        <option [ngValue]=\\\"null\\\">--({{'Words.Empty' | translate }})--</option>\\r\\n    <option *ngFor=\\\"let item of Lookups.domains\\\" [ngValue]=\\\"item.id\\\">{{item.name}}</option>\\r\\n</select>\\r\\n    <p *ngIf=\\\"!FG_domainId.Write\\\">{{FG_domainId.Value}}</p>\\r\\n\\r\\n        \\r\\n    </div>\\r\\n</div>\\r\\n</form>\\r\\n    </div>\\r\\n\\r\\n\\r\\n    \\r\\n\\r\\n        <p-footer>\\r\\n            <div class=\\\"text-center modal-buttons\\\">\\r\\n                \\r\\n        <button class=\\\"btn btn-primary\\\"\\r\\n            [disabled]=\\\"!CanSubmit\\\"\\r\\n            (click)=\\\"Submit()\\\">\\r\\n        {{'Words.Save' | translate }}\\r\\n    </button>\\r\\n\\r\\n\\r\\n            </div>\\r\\n        </p-footer>\\r\\n</p-dialog>\\n<div style='display:none' #lookupOptionsContainer values='{\\\"domains\\\":\\\"C0\\\"}'></div>\\n<div style='display:none' #viewParamsContainer values='{\\\"ModelType\\\":null,\\\"AddUrl\\\":null,\\\"EditUrl\\\":null,\\\"DetailsUrl\\\":null,\\\"ListUrl\\\":null,\\\"Fields\\\":[],\\\"Other\\\":{}}'></div>\";\n\n//# sourceURL=webpack:///./ClientApp/app/Integration/ResourceEditModal.html?");

/***/ }),

/***/ "./ClientApp/app/Integration/ResourceEditModal.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/Integration/ResourceEditModal.ts ***!
  \********************************************************/
/*! exports provided: ResourceEditModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourceEditModal\", function() { return ResourceEditModal; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var Example_Resources_ResourceEditBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Example/Resources/ResourceEditBase */ \"./Core/Example/Resources/ResourceEditBase.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\nvar ResourceEditModal = /** @class */ (function (_super) {\r\n    __extends(ResourceEditModal, _super);\r\n    function ResourceEditModal() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ResourceEditModal.prototype.GetPageId = function () { return 2016168499000; };\r\n    Object.defineProperty(ResourceEditModal.prototype, \"CollectionId\", {\r\n        get: function () { return null; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    ResourceEditModal = __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])({ template: __webpack_require__(/*! ./ResourceEditModal.html */ \"./ClientApp/app/Integration/ResourceEditModal.html\"), selector: \"resourceEditModal\" })\r\n    ], ResourceEditModal);\r\n    return ResourceEditModal;\r\n}(Example_Resources_ResourceEditBase__WEBPACK_IMPORTED_MODULE_1__[\"ResourceEditBase\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/app/Integration/ResourceEditModal.ts?");

/***/ }),

/***/ "./ClientApp/app/Integration/ResourceModal.html":
/*!******************************************************!*\
  !*** ./ClientApp/app/Integration/ResourceModal.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<p-dialog [(visible)]=\\\"Show\\\" (onHide)=\\\"OnModalHide()\\\" [modal]=\\\"true\\\" >\\r\\n    <p-header>\\r\\n{{'Pages.Integration__ResourceModal' | translate }}    </p-header>\\r\\n\\r\\n    <div class=\\\"col-md-12\\\">\\r\\n        <div class=\\\"row\\\" *ngIf=\\\"UseLocalization\\\">\\r\\n            <div class=\\\"col-xs-12 col-md-6 col-xs-offset-0 col-md-offset-6\\\">\\r\\n                <div class=\\\"btn-group btn-group-sm pull-last padBottom\\\">\\r\\n                        <button class=\\\"btn btn-sm\\\" [ngClass]=\\\"CurrentLang=='ar'?'btn-primary':'btn-default'\\\" (click)=\\\"CurrentLang='ar'\\\">\\r\\n                            {{'Words.ar' | translate }}\\r\\n                        </button>\\r\\n                        <button class=\\\"btn btn-sm\\\" [ngClass]=\\\"CurrentLang=='en'?'btn-primary':'btn-default'\\\" (click)=\\\"CurrentLang='en'\\\">\\r\\n                            {{'Words.en' | translate }}\\r\\n                        </button>\\r\\n                </div>\\r\\n            </div>\\r\\n\\r\\n        </div>\\r\\n\\r\\n        <form #Form=\\\"ngForm\\\" >\\n\\r\\n<div class=\\\"row form-group \\\"\\r\\n     id=\\\"FG_name\\\"\\r\\n     #FG_name=\\\"bsFormGroup\\\" bs-group\\r\\n     >\\r\\n    <label class=\\\"col-sm-3 control-label\\\">\\r\\n        {{'Columns.Resource__Name' | translate }}\\r\\n<span style=\\\"color:red\\\" > * </span>    </label>\\r\\n    <div class=\\\"col-sm-9\\\">\\r\\n        <input type=\\\"text\\\"\\r\\n       class=\\\"form-control \\\"\\r\\n       placeholder=\\\"{{'Columns.Resource__Name' | translate }}\\\"\\r\\n       name=\\\"Form__name\\\"\\r\\n       [(ngModel)]=\\\"model.name\\\"\\r\\n       title=\\\"{{'Columns.Resource__Name' | translate }}\\\"\\r\\n       [li-watch]=\\\"model\\\"\\r\\n\\r\\n       \\r\\n       required [pattern]=\\\"'[_a-zA-Z][_a-zA-Z0-9]{2,30}'\\\"  >\\r\\n    <p *ngIf=\\\"!FG_name.Write\\\">{{FG_name.Value}}</p>\\r\\n\\r\\n\\r\\n        <span *ngIf=\\\"Form.controls['Form__name'] && Form.controls['Form__name'].invalid\\\">\\r\\n        <small *ngIf=\\\"Form.controls['Form__name'].errors!.required\\\" class=\\\"form-text text-danger\\\">{{'Messages.field_required' | translate : {p0:'Columns.Resource__Name' | translate } }}</small>\\r\\n        <small *ngIf=\\\"Form.controls['Form__name'].errors!.pattern\\\" class=\\\"form-text text-danger\\\">{{'Messages.invalid_field' | translate : {p0:'Columns.Resource__Name' | translate } }}</small>\\r\\n</span>\\r\\n    </div>\\r\\n</div>\\r\\n\\r\\n<div class=\\\"row form-group \\\"\\r\\n     id=\\\"FG_domainId\\\"\\r\\n     #FG_domainId=\\\"bsFormGroup\\\" bs-group\\r\\n     >\\r\\n    <label class=\\\"col-sm-3 control-label\\\">\\r\\n        {{'Columns.Resource__DomainId' | translate }}\\r\\n    </label>\\r\\n    <div class=\\\"col-sm-9\\\">\\r\\n        \\r\\n<select class=\\\"form-control\\\"\\r\\n        name=\\\"Form__domainId\\\" \\r\\n        [li-watch]=\\\"model\\\"\\r\\n        [(ngModel)]=\\\"model.domainId\\\"\\r\\n         >\\r\\n        <option [ngValue]=\\\"null\\\">--({{'Words.Empty' | translate }})--</option>\\r\\n    <option *ngFor=\\\"let item of Lookups.domains\\\" [ngValue]=\\\"item.id\\\">{{item.name}}</option>\\r\\n</select>\\r\\n    <p *ngIf=\\\"!FG_domainId.Write\\\">{{FG_domainId.Value}}</p>\\r\\n\\r\\n        \\r\\n    </div>\\r\\n</div>\\r\\n</form>\\r\\n    </div>\\r\\n\\r\\n\\r\\n    \\r\\n\\r\\n        <p-footer>\\r\\n            <div class=\\\"text-center modal-buttons\\\">\\r\\n                \\r\\n        <button class=\\\"btn btn-primary\\\"\\r\\n            [disabled]=\\\"!CanSubmit\\\"\\r\\n            (click)=\\\"Submit()\\\">\\r\\n        {{'Words.Save' | translate }}\\r\\n    </button>\\r\\n\\r\\n\\r\\n            </div>\\r\\n        </p-footer>\\r\\n</p-dialog>\\n<div style='display:none' #lookupOptionsContainer values='{\\\"domains\\\":\\\"C0\\\"}'></div>\\n<div style='display:none' #viewParamsContainer values='{\\\"ModelType\\\":null,\\\"AddUrl\\\":null,\\\"EditUrl\\\":null,\\\"DetailsUrl\\\":null,\\\"ListUrl\\\":null,\\\"Fields\\\":[],\\\"Other\\\":{}}'></div>\";\n\n//# sourceURL=webpack:///./ClientApp/app/Integration/ResourceModal.html?");

/***/ }),

/***/ "./ClientApp/app/Integration/ResourceModal.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/Integration/ResourceModal.ts ***!
  \****************************************************/
/*! exports provided: ResourceModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourceModal\", function() { return ResourceModal; });\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var Example_Resources_ResourceEditBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Example/Resources/ResourceEditBase */ \"./Core/Example/Resources/ResourceEditBase.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\nvar ResourceModal = /** @class */ (function (_super) {\r\n    __extends(ResourceModal, _super);\r\n    function ResourceModal() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    ResourceModal.prototype.GetPageId = function () { return 2005670894000; };\r\n    Object.defineProperty(ResourceModal.prototype, \"CollectionId\", {\r\n        get: function () { return null; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    ResourceModal = __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])({ template: __webpack_require__(/*! ./ResourceModal.html */ \"./ClientApp/app/Integration/ResourceModal.html\"), selector: \"resourceModal\" })\r\n    ], ResourceModal);\r\n    return ResourceModal;\r\n}(Example_Resources_ResourceEditBase__WEBPACK_IMPORTED_MODULE_1__[\"ResourceEditBase\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./ClientApp/app/Integration/ResourceModal.ts?");

/***/ }),

/***/ "./Core/Example/Resources/ResourceEditBase.ts":
/*!****************************************************!*\
  !*** ./Core/Example/Resources/ResourceEditBase.ts ***!
  \****************************************************/
/*! exports provided: ResourceEditBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ResourceEditBase\", function() { return ResourceEditBase; });\n/* harmony import */ var codeshell_baseComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codeshell/baseComponents */ \"./Core/codeshell/baseComponents.ts\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var Example_Http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Example/Http */ \"./Core/Example/Http.ts\");\n/* harmony import */ var codeshell_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codeshell/core */ \"./Core/codeshell/core.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\n\r\n\r\nvar ResourceEditBase = /** @class */ (function (_super) {\r\n    __extends(ResourceEditBase, _super);\r\n    function ResourceEditBase() {\r\n        return _super !== null && _super.apply(this, arguments) || this;\r\n    }\r\n    Object.defineProperty(ResourceEditBase.prototype, \"Service\", {\r\n        get: function () { return codeshell_core__WEBPACK_IMPORTED_MODULE_3__[\"Shell\"].Injector.get(Example_Http__WEBPACK_IMPORTED_MODULE_2__[\"ResourcesService\"]); },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    ResourceEditBase = __decorate([\r\n        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"Injectable\"])()\r\n    ], ResourceEditBase);\r\n    return ResourceEditBase;\r\n}(codeshell_baseComponents__WEBPACK_IMPORTED_MODULE_0__[\"EditComponentBase\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./Core/Example/Resources/ResourceEditBase.ts?");

/***/ })

}]);
//# sourceMappingURL=dev__7.js.map