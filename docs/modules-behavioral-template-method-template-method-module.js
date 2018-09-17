(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-template-method-template-method-module"],{

/***/ "./src/app/modules/behavioral/template-method/components/template-method.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/behavioral/template-method/components/template-method.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/template-method/components/template-method.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/behavioral/template-method/components/template-method.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/template-method/components/template-method.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/behavioral/template-method/components/template-method.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TemplateMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateMethodComponent", function() { return TemplateMethodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_template_method_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/template-method.service */ "./src/app/modules/behavioral/template-method/services/template-method.service.ts");
/* harmony import */ var _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/http/get-git-content.service */ "./src/app/core/services/http/get-git-content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interpreter/services/interpreter.service */ "./src/app/modules/behavioral/interpreter/services/interpreter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TemplateMethodComponent = /** @class */ (function () {
    function TemplateMethodComponent(tm, http, interpreter) {
        var _this = this;
        this.tm = tm;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.templateMethod.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.templateMethod.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.templateMethod.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.tm.templateMethod();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    TemplateMethodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template-method',
            template: __webpack_require__(/*! ./template-method.component.html */ "./src/app/modules/behavioral/template-method/components/template-method.component.html"),
            styles: [__webpack_require__(/*! ./template-method.component.css */ "./src/app/modules/behavioral/template-method/components/template-method.component.css")]
        }),
        __metadata("design:paramtypes", [_services_template_method_service__WEBPACK_IMPORTED_MODULE_3__["TemplateMethodService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], TemplateMethodComponent);
    return TemplateMethodComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/template-method/services/template-method.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/behavioral/template-method/services/template-method.service.ts ***!
  \****************************************************************************************/
/*! exports provided: TemplateMethodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateMethodService", function() { return TemplateMethodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _template_method_template_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-method/template-method */ "./src/app/modules/behavioral/template-method/services/template-method/template-method.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TemplateMethodService = /** @class */ (function () {
    function TemplateMethodService() {
    }
    TemplateMethodService.prototype.templateMethod = function () {
        Object(_template_method_template_method__WEBPACK_IMPORTED_MODULE_1__["templateMethod"])();
    };
    TemplateMethodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TemplateMethodService);
    return TemplateMethodService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/template-method/services/template-method/template-method.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/behavioral/template-method/services/template-method/template-method.ts ***!
  \************************************************************************************************/
/*! exports provided: templateMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateMethod", function() { return templateMethod; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function templateMethod() {
    var a = new GasAnalyzer();
    // a.analyzer();
    var b = new WaterAnalyzer();
    // b.analyzer();
}
var Analizator = /** @class */ (function () {
    function Analizator() {
    }
    Analizator.prototype.analyzer = function () {
        this.step1();
        this.step2();
    };
    return Analizator;
}());
var GasAnalyzer = /** @class */ (function (_super) {
    __extends(GasAnalyzer, _super);
    function GasAnalyzer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GasAnalyzer.prototype.step1 = function () {
        console.log('Gas first analyzing stage');
    };
    GasAnalyzer.prototype.step2 = function () {
        console.log('Gas second analyzing stage');
    };
    return GasAnalyzer;
}(Analizator));
var WaterAnalyzer = /** @class */ (function (_super) {
    __extends(WaterAnalyzer, _super);
    function WaterAnalyzer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WaterAnalyzer.prototype.step1 = function () {
        console.log('Water first analyzing stage');
    };
    WaterAnalyzer.prototype.step2 = function () {
        console.log('Water second analyzing stage');
    };
    return WaterAnalyzer;
}(Analizator));


/***/ }),

/***/ "./src/app/modules/behavioral/template-method/template-method-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/behavioral/template-method/template-method-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TemplateMethodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateMethodRoutingModule", function() { return TemplateMethodRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_template_method_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/template-method.component */ "./src/app/modules/behavioral/template-method/components/template-method.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_template_method_component__WEBPACK_IMPORTED_MODULE_2__["TemplateMethodComponent"] }
];
var TemplateMethodRoutingModule = /** @class */ (function () {
    function TemplateMethodRoutingModule() {
    }
    TemplateMethodRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TemplateMethodRoutingModule);
    return TemplateMethodRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/template-method/template-method.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/behavioral/template-method/template-method.module.ts ***!
  \******************************************************************************/
/*! exports provided: TemplateMethodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateMethodModule", function() { return TemplateMethodModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_template_method_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/template-method.component */ "./src/app/modules/behavioral/template-method/components/template-method.component.ts");
/* harmony import */ var _template_method_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-method-routing.module */ "./src/app/modules/behavioral/template-method/template-method-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TemplateMethodModule = /** @class */ (function () {
    function TemplateMethodModule() {
    }
    TemplateMethodModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _template_method_routing_module__WEBPACK_IMPORTED_MODULE_3__["TemplateMethodRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_template_method_component__WEBPACK_IMPORTED_MODULE_2__["TemplateMethodComponent"]]
        })
    ], TemplateMethodModule);
    return TemplateMethodModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-behavioral-template-method-template-method-module.js.map