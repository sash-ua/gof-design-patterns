(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-structural-flyweight-flyweight-module"],{

/***/ "./src/app/modules/structural/flyweight/components/flyweight.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/structural/flyweight/components/flyweight.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/structural/flyweight/components/flyweight.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/structural/flyweight/components/flyweight.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/structural/flyweight/components/flyweight.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/structural/flyweight/components/flyweight.component.ts ***!
  \********************************************************************************/
/*! exports provided: FlyweightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyweightComponent", function() { return FlyweightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_flyweight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/flyweight.service */ "./src/app/modules/structural/flyweight/services/flyweight.service.ts");
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







var FlyweightComponent = /** @class */ (function () {
    function FlyweightComponent(fl, http, interpreter) {
        var _this = this;
        this.fl = fl;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.flyweight.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.flyweight.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.flyweight.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        fl.flyweight();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    FlyweightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flyweight',
            template: __webpack_require__(/*! ./flyweight.component.html */ "./src/app/modules/structural/flyweight/components/flyweight.component.html"),
            styles: [__webpack_require__(/*! ./flyweight.component.css */ "./src/app/modules/structural/flyweight/components/flyweight.component.css")]
        }),
        __metadata("design:paramtypes", [_services_flyweight_service__WEBPACK_IMPORTED_MODULE_3__["FlyweightService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], FlyweightComponent);
    return FlyweightComponent;
}());



/***/ }),

/***/ "./src/app/modules/structural/flyweight/flyweight-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/structural/flyweight/flyweight-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: FlyweightRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyweightRoutingModule", function() { return FlyweightRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_flyweight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/flyweight.component */ "./src/app/modules/structural/flyweight/components/flyweight.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_flyweight_component__WEBPACK_IMPORTED_MODULE_2__["FlyweightComponent"] }
];
var FlyweightRoutingModule = /** @class */ (function () {
    function FlyweightRoutingModule() {
    }
    FlyweightRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FlyweightRoutingModule);
    return FlyweightRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/flyweight/flyweight.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/structural/flyweight/flyweight.module.ts ***!
  \******************************************************************/
/*! exports provided: FlyweightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyweightModule", function() { return FlyweightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_flyweight_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/flyweight.component */ "./src/app/modules/structural/flyweight/components/flyweight.component.ts");
/* harmony import */ var _flyweight_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flyweight-routing.module */ "./src/app/modules/structural/flyweight/flyweight-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FlyweightModule = /** @class */ (function () {
    function FlyweightModule() {
    }
    FlyweightModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _flyweight_routing_module__WEBPACK_IMPORTED_MODULE_3__["FlyweightRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_flyweight_component__WEBPACK_IMPORTED_MODULE_2__["FlyweightComponent"]]
        })
    ], FlyweightModule);
    return FlyweightModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/flyweight/services/flyweight.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/structural/flyweight/services/flyweight.service.ts ***!
  \****************************************************************************/
/*! exports provided: FlyweightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyweightService", function() { return FlyweightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _flyweight_flyweight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flyweight/flyweight */ "./src/app/modules/structural/flyweight/services/flyweight/flyweight.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlyweightService = /** @class */ (function () {
    function FlyweightService() {
    }
    FlyweightService.prototype.flyweight = function () {
        Object(_flyweight_flyweight__WEBPACK_IMPORTED_MODULE_1__["flyweight"])();
    };
    FlyweightService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FlyweightService);
    return FlyweightService;
}());



/***/ }),

/***/ "./src/app/modules/structural/flyweight/services/flyweight/flyweight.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/structural/flyweight/services/flyweight/flyweight.ts ***!
  \******************************************************************************/
/*! exports provided: flyweight, Printer, Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyweight", function() { return flyweight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Printer", function() { return Printer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
function flyweight() {
    var printer = new Printer();
    var printA = printer.get('a');
    printA.config({ value: 'a' });
    // console.log(printA.draw());
    var printB = printer.get('b');
    printB.config({ value: 'b' });
    // console.log(printB.draw());
    // console.log(printB);
    printer.remove('a');
}
var Printer = /** @class */ (function () {
    function Printer() {
        this.pool = new Map();
    }
    Printer.prototype.set = function (key) {
        this.pool.set(key, new Character());
    };
    Printer.prototype.get = function (key) {
        if (!this.pool.has(key)) {
            this.set(key);
        }
        return this.pool.get(key);
    };
    Printer.prototype.remove = function (key) {
        this.pool.delete(key);
    };
    return Printer;
}());

var Character = /** @class */ (function () {
    function Character() {
        this.state = { value: '', font: 'Times New Roman', color: 'black' };
    }
    Character.prototype.config = function (config) {
        this.state = Object.assign(this.state, config);
    };
    Character.prototype.draw = function () {
        return this.state.value;
    };
    return Character;
}());



/***/ })

}]);
//# sourceMappingURL=modules-structural-flyweight-flyweight-module.js.map