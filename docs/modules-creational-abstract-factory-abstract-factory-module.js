(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-creational-abstract-factory-abstract-factory-module"],{

/***/ "./src/app/modules/creational/abstract-factory/abstract-factory-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/creational/abstract-factory/abstract-factory-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AbstractFactoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFactoryRoutingModule", function() { return AbstractFactoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_abstract_factory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/abstract-factory.component */ "./src/app/modules/creational/abstract-factory/components/abstract-factory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_abstract_factory_component__WEBPACK_IMPORTED_MODULE_2__["AbstractFactoryComponent"] }
];
var AbstractFactoryRoutingModule = /** @class */ (function () {
    function AbstractFactoryRoutingModule() {
    }
    AbstractFactoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AbstractFactoryRoutingModule);
    return AbstractFactoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/creational/abstract-factory/abstract-factory.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/creational/abstract-factory/abstract-factory.module.ts ***!
  \********************************************************************************/
/*! exports provided: AbstractFactoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFactoryModule", function() { return AbstractFactoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _abstract_factory_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-factory-routing.module */ "./src/app/modules/creational/abstract-factory/abstract-factory-routing.module.ts");
/* harmony import */ var _components_abstract_factory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/abstract-factory.component */ "./src/app/modules/creational/abstract-factory/components/abstract-factory.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AbstractFactoryModule = /** @class */ (function () {
    function AbstractFactoryModule() {
    }
    AbstractFactoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _abstract_factory_routing_module__WEBPACK_IMPORTED_MODULE_2__["AbstractFactoryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _components_abstract_factory_component__WEBPACK_IMPORTED_MODULE_3__["AbstractFactoryComponent"],
            ]
        })
    ], AbstractFactoryModule);
    return AbstractFactoryModule;
}());



/***/ }),

/***/ "./src/app/modules/creational/abstract-factory/components/abstract-factory.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/creational/abstract-factory/components/abstract-factory.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/creational/abstract-factory/components/abstract-factory.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/creational/abstract-factory/components/abstract-factory.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/creational/abstract-factory/components/abstract-factory.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/creational/abstract-factory/components/abstract-factory.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AbstractFactoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFactoryComponent", function() { return AbstractFactoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_abstract_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/abstract-factory.service */ "./src/app/modules/creational/abstract-factory/services/abstract-factory.service.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
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







var AbstractFactoryComponent = /** @class */ (function () {
    function AbstractFactoryComponent(car, http, interpreter) {
        var _this = this;
        this.car = car;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.abstractFactory.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.abstractFactory.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.abstractFactory.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_3__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_3__["ELEMENTS"].sampleTitle
        };
        this.car.abstractFactory();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    AbstractFactoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-abstract-factory',
            template: __webpack_require__(/*! ./abstract-factory.component.html */ "./src/app/modules/creational/abstract-factory/components/abstract-factory.component.html"),
            styles: [__webpack_require__(/*! ./abstract-factory.component.css */ "./src/app/modules/creational/abstract-factory/components/abstract-factory.component.css")]
        }),
        __metadata("design:paramtypes", [_services_abstract_factory_service__WEBPACK_IMPORTED_MODULE_1__["AbstractFactoryService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], AbstractFactoryComponent);
    return AbstractFactoryComponent;
}());



/***/ }),

/***/ "./src/app/modules/creational/abstract-factory/services/abstract-factory.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/creational/abstract-factory/services/abstract-factory.service.ts ***!
  \******************************************************************************************/
/*! exports provided: AbstractFactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFactoryService", function() { return AbstractFactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_factory_abstract_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-factory/abstract-factory */ "./src/app/modules/creational/abstract-factory/services/abstract-factory/abstract-factory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbstractFactoryService = /** @class */ (function () {
    function AbstractFactoryService() {
    }
    AbstractFactoryService.prototype.abstractFactory = function () {
        Object(_abstract_factory_abstract_factory__WEBPACK_IMPORTED_MODULE_1__["abstractFactory"])();
    };
    AbstractFactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AbstractFactoryService);
    return AbstractFactoryService;
}());



/***/ }),

/***/ "./src/app/modules/creational/abstract-factory/services/abstract-factory/abstract-factory.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/creational/abstract-factory/services/abstract-factory/abstract-factory.ts ***!
  \***************************************************************************************************/
/*! exports provided: abstractFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abstractFactory", function() { return abstractFactory; });
function abstractFactory() {
    var fiesta = makeCar({ name: 'Fiesta', power: 70 });
    var focus = makeCar({ name: 'Focus', power: 80 });
    var mustang = makeCar({ name: 'mustang', power: 120 });
    // console.log('AbstractFactory:', fiesta);
    // console.log('AbstractFactory:', focus);
    // console.log('AbstractFactory:', mustang);
}
function makeCar(obj) {
    var factory = new FiestaFocusCarFactory();
    return factory.createCar(obj);
}
var FiestaFocusCarFactory = /** @class */ (function () {
    function FiestaFocusCarFactory() {
    }
    FiestaFocusCarFactory.prototype.createCar = function (obj) {
        var name = obj.name, power = obj.power;
        var eng = new EngineFactory(power).enginePower();
        var bw = new BodyworkFactory(name).bodyworkType();
        return bw ? "New car " + name + ". " + eng + ". " + bw + "." : 'This type of a car can\'t be produced on the factory!';
    };
    return FiestaFocusCarFactory;
}());
var EngineFactory = /** @class */ (function () {
    function EngineFactory(power) {
        this.power = power;
    }
    EngineFactory.prototype.enginePower = function () {
        return "Power: " + this.power + " kVt";
    };
    return EngineFactory;
}());
var BodyworkFactory = /** @class */ (function () {
    function BodyworkFactory(name) {
        this.name = name;
        this.typeFiesta = 'Fiesta';
        this.typeFocus = 'Focus';
    }
    BodyworkFactory.prototype.bodyworkType = function () {
        var car;
        switch (this.name) {
            case 'Fiesta':
                car = "Bodywork type: " + this.typeFiesta;
                break;
            case 'Focus':
                car = "Bodywork type: " + this.typeFocus;
                break;
            default:
                car = false;
                break;
        }
        return car;
    };
    return BodyworkFactory;
}());


/***/ })

}]);
//# sourceMappingURL=modules-creational-abstract-factory-abstract-factory-module.js.map