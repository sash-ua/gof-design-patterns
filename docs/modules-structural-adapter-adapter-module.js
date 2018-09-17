(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-structural-adapter-adapter-module"],{

/***/ "./src/app/modules/structural/adapter/adapter-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/structural/adapter/adapter-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AdapterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterRoutingModule", function() { return AdapterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_adapter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/adapter.component */ "./src/app/modules/structural/adapter/components/adapter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_adapter_component__WEBPACK_IMPORTED_MODULE_2__["AdapterComponent"] }
];
var AdapterRoutingModule = /** @class */ (function () {
    function AdapterRoutingModule() {
    }
    AdapterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdapterRoutingModule);
    return AdapterRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/adapter/adapter.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/structural/adapter/adapter.module.ts ***!
  \**************************************************************/
/*! exports provided: AdapterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterModule", function() { return AdapterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_adapter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/adapter.component */ "./src/app/modules/structural/adapter/components/adapter.component.ts");
/* harmony import */ var _adapter_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adapter-routing.module */ "./src/app/modules/structural/adapter/adapter-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdapterModule = /** @class */ (function () {
    function AdapterModule() {
    }
    AdapterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _adapter_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdapterRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_adapter_component__WEBPACK_IMPORTED_MODULE_2__["AdapterComponent"]]
        })
    ], AdapterModule);
    return AdapterModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/adapter/components/adapter.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/structural/adapter/components/adapter.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/structural/adapter/components/adapter.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/structural/adapter/components/adapter.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/structural/adapter/components/adapter.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/structural/adapter/components/adapter.component.ts ***!
  \****************************************************************************/
/*! exports provided: AdapterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterComponent", function() { return AdapterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_adapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/adapter.service */ "./src/app/modules/structural/adapter/services/adapter.service.ts");
/* harmony import */ var _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/http/get-git-content.service */ "./src/app/core/services/http/get-git-content.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../behavioral/interpreter/services/interpreter.service */ "./src/app/modules/behavioral/interpreter/services/interpreter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdapterComponent = /** @class */ (function () {
    function AdapterComponent(adapter, http, interpreter) {
        var _this = this;
        this.adapter = adapter;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.adapter.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.adapter.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.adapter.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.adapter.adapter();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    AdapterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adapter',
            template: __webpack_require__(/*! ./adapter.component.html */ "./src/app/modules/structural/adapter/components/adapter.component.html"),
            styles: [__webpack_require__(/*! ./adapter.component.css */ "./src/app/modules/structural/adapter/components/adapter.component.css")]
        }),
        __metadata("design:paramtypes", [_services_adapter_service__WEBPACK_IMPORTED_MODULE_3__["AdapterService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], AdapterComponent);
    return AdapterComponent;
}());



/***/ }),

/***/ "./src/app/modules/structural/adapter/services/adapter.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/structural/adapter/services/adapter.service.ts ***!
  \************************************************************************/
/*! exports provided: AdapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterService", function() { return AdapterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _adapter_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapter/adapter */ "./src/app/modules/structural/adapter/services/adapter/adapter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdapterService = /** @class */ (function () {
    function AdapterService() {
    }
    AdapterService.prototype.adapter = function () {
        _adapter_adapter__WEBPACK_IMPORTED_MODULE_1__["AdapterObjectLvl"].adpterObjLvl();
        _adapter_adapter__WEBPACK_IMPORTED_MODULE_1__["AdapterClassLvl"].adapterClassLvl();
    };
    AdapterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AdapterService);
    return AdapterService;
}());



/***/ }),

/***/ "./src/app/modules/structural/adapter/services/adapter/adapter.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/structural/adapter/services/adapter/adapter.ts ***!
  \************************************************************************/
/*! exports provided: AdapterObjectLvl, AdapterClassLvl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterObjectLvl", function() { return AdapterObjectLvl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdapterClassLvl", function() { return AdapterClassLvl; });
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
var AdapterObjectLvl;
(function (AdapterObjectLvl) {
    function adpterObjLvl() {
        // console.log(new Adapter().request({body: 'go'}));
    }
    AdapterObjectLvl.adpterObjLvl = adpterObjLvl;
    var TargetInterface = /** @class */ (function () {
        function TargetInterface() {
        }
        return TargetInterface;
    }());
    var Adapter = /** @class */ (function (_super) {
        __extends(Adapter, _super);
        function Adapter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.adaptee = new RequestAPI();
            return _this;
        }
        Adapter.prototype.request = function (obj) {
            return JSON.parse(this.adaptee.xRequest(obj));
        };
        return Adapter;
    }(TargetInterface));
    var RequestAPI = /** @class */ (function () {
        function RequestAPI() {
        }
        RequestAPI.prototype.xRequest = function (obj) {
            return JSON.stringify(obj);
        };
        return RequestAPI;
    }());
})(AdapterObjectLvl || (AdapterObjectLvl = {}));
var AdapterClassLvl;
(function (AdapterClassLvl) {
    function adapterClassLvl() {
        // console.log(new Adapter().request({body: 'go'}));
    }
    AdapterClassLvl.adapterClassLvl = adapterClassLvl;
    var Adaptee = /** @class */ (function () {
        function Adaptee() {
        }
        Adaptee.prototype.xRequest = function (obj) {
            return JSON.stringify(obj);
        };
        return Adaptee;
    }());
    var Adapter = /** @class */ (function (_super) {
        __extends(Adapter, _super);
        function Adapter() {
            return _super.call(this) || this;
        }
        Adapter.prototype.request = function (obj) {
            return JSON.parse(this.xRequest(obj));
        };
        return Adapter;
    }(Adaptee));
})(AdapterClassLvl || (AdapterClassLvl = {}));


/***/ })

}]);
//# sourceMappingURL=modules-structural-adapter-adapter-module.js.map