(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-structural-facade-facade-module"],{

/***/ "./src/app/modules/structural/facade/components/facade.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/structural/facade/components/facade.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/structural/facade/components/facade.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/structural/facade/components/facade.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/structural/facade/components/facade.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/structural/facade/components/facade.component.ts ***!
  \**************************************************************************/
/*! exports provided: FacadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeComponent", function() { return FacadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_facade_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/facade.service */ "./src/app/modules/structural/facade/services/facade.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/http/get-git-content.service */ "./src/app/core/services/http/get-git-content.service.ts");
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







var FacadeComponent = /** @class */ (function () {
    function FacadeComponent(f, http, interpreter) {
        var _this = this;
        this.f = f;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.facade.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.facade.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.facade.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        f.facade();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    FacadeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facade',
            template: __webpack_require__(/*! ./facade.component.html */ "./src/app/modules/structural/facade/components/facade.component.html"),
            styles: [__webpack_require__(/*! ./facade.component.css */ "./src/app/modules/structural/facade/components/facade.component.css")]
        }),
        __metadata("design:paramtypes", [_services_facade_service__WEBPACK_IMPORTED_MODULE_3__["FacadeService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], FacadeComponent);
    return FacadeComponent;
}());



/***/ }),

/***/ "./src/app/modules/structural/facade/facade-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/structural/facade/facade-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: FacadeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeRoutingModule", function() { return FacadeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_facade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/facade.component */ "./src/app/modules/structural/facade/components/facade.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_facade_component__WEBPACK_IMPORTED_MODULE_2__["FacadeComponent"] }
];
var FacadeRoutingModule = /** @class */ (function () {
    function FacadeRoutingModule() {
    }
    FacadeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FacadeRoutingModule);
    return FacadeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/facade/facade.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/structural/facade/facade.module.ts ***!
  \************************************************************/
/*! exports provided: FacadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeModule", function() { return FacadeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_facade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/facade.component */ "./src/app/modules/structural/facade/components/facade.component.ts");
/* harmony import */ var _facade_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facade-routing.module */ "./src/app/modules/structural/facade/facade-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FacadeModule = /** @class */ (function () {
    function FacadeModule() {
    }
    FacadeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _facade_routing_module__WEBPACK_IMPORTED_MODULE_3__["FacadeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_facade_component__WEBPACK_IMPORTED_MODULE_2__["FacadeComponent"]]
        })
    ], FacadeModule);
    return FacadeModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/facade/services/facade.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/structural/facade/services/facade.service.ts ***!
  \**********************************************************************/
/*! exports provided: FacadeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacadeService", function() { return FacadeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _facade_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facade/facade */ "./src/app/modules/structural/facade/services/facade/facade.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacadeService = /** @class */ (function () {
    function FacadeService() {
    }
    FacadeService.prototype.facade = function () {
        Object(_facade_facade__WEBPACK_IMPORTED_MODULE_1__["facade"])();
    };
    FacadeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FacadeService);
    return FacadeService;
}());



/***/ }),

/***/ "./src/app/modules/structural/facade/services/facade/facade.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/structural/facade/services/facade/facade.ts ***!
  \*********************************************************************/
/*! exports provided: facade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facade", function() { return facade; });
function facade() {
    var f = new Facade();
    // f.operationAB();
    // f.operationAD();
    // f.operationCD();
}
var Facade = /** @class */ (function () {
    function Facade() {
        this.subSysA = new SubSystemA();
        this.subSysB = new SubSystemB();
        this.subSysC = new SubSystemC();
        this.subSysD = new SubSystemD();
    }
    Facade.prototype.operationAB = function () {
        console.log("Do " + this.subSysA.operationA() + " and " + this.subSysB.operationB());
    };
    Facade.prototype.operationCD = function () {
        console.log("Do " + this.subSysC.operationC() + " and " + this.subSysD.operationD());
    };
    Facade.prototype.operationAD = function () {
        console.log("Do " + this.subSysA.operationA() + " and " + this.subSysD.operationD());
    };
    return Facade;
}());
var SubSystemA = /** @class */ (function () {
    function SubSystemA() {
    }
    SubSystemA.prototype.operationA = function () {
        return 'operation A';
    };
    return SubSystemA;
}());
var SubSystemB = /** @class */ (function () {
    function SubSystemB() {
    }
    SubSystemB.prototype.operationB = function () {
        return 'operation B';
    };
    return SubSystemB;
}());
var SubSystemC = /** @class */ (function () {
    function SubSystemC() {
    }
    SubSystemC.prototype.operationC = function () {
        return 'operation C';
    };
    return SubSystemC;
}());
var SubSystemD = /** @class */ (function () {
    function SubSystemD() {
    }
    SubSystemD.prototype.operationD = function () {
        return 'operation D';
    };
    return SubSystemD;
}());


/***/ })

}]);
//# sourceMappingURL=modules-structural-facade-facade-module.js.map