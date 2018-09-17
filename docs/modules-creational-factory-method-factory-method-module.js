(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-creational-factory-method-factory-method-module"],{

/***/ "./src/app/modules/creational/factory-method/components/factory-method.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/creational/factory-method/components/factory-method.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/creational/factory-method/components/factory-method.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/creational/factory-method/components/factory-method.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/creational/factory-method/components/factory-method.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/creational/factory-method/components/factory-method.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FactoryMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryMethodComponent", function() { return FactoryMethodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_factory_method_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/factory-method.service */ "./src/app/modules/creational/factory-method/services/factory-method.service.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
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







var FactoryMethodComponent = /** @class */ (function () {
    function FactoryMethodComponent(factoryMethod, http, interpreter) {
        var _this = this;
        this.factoryMethod = factoryMethod;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.factoryMethod.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.factoryMethod.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.factoryMethod.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_3__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_3__["ELEMENTS"].sampleTitle
        };
        this.factoryMethod.factoryMethod();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    FactoryMethodComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factory-method',
            template: __webpack_require__(/*! ./factory-method.component.html */ "./src/app/modules/creational/factory-method/components/factory-method.component.html"),
            styles: [__webpack_require__(/*! ./factory-method.component.css */ "./src/app/modules/creational/factory-method/components/factory-method.component.css")]
        }),
        __metadata("design:paramtypes", [_services_factory_method_service__WEBPACK_IMPORTED_MODULE_1__["FactoryMethodService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], FactoryMethodComponent);
    return FactoryMethodComponent;
}());



/***/ }),

/***/ "./src/app/modules/creational/factory-method/factory-method-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/creational/factory-method/factory-method-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: FactoryMethodRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryMethodRoutingModule", function() { return FactoryMethodRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_factory_method_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/factory-method.component */ "./src/app/modules/creational/factory-method/components/factory-method.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_factory_method_component__WEBPACK_IMPORTED_MODULE_2__["FactoryMethodComponent"] }
];
var FactoryMethodRoutingModule = /** @class */ (function () {
    function FactoryMethodRoutingModule() {
    }
    FactoryMethodRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FactoryMethodRoutingModule);
    return FactoryMethodRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/creational/factory-method/factory-method.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/creational/factory-method/factory-method.module.ts ***!
  \****************************************************************************/
/*! exports provided: FactoryMethodModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryMethodModule", function() { return FactoryMethodModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _factory_method_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory-method-routing.module */ "./src/app/modules/creational/factory-method/factory-method-routing.module.ts");
/* harmony import */ var _components_factory_method_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/factory-method.component */ "./src/app/modules/creational/factory-method/components/factory-method.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FactoryMethodModule = /** @class */ (function () {
    function FactoryMethodModule() {
    }
    FactoryMethodModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _factory_method_routing_module__WEBPACK_IMPORTED_MODULE_2__["FactoryMethodRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _components_factory_method_component__WEBPACK_IMPORTED_MODULE_3__["FactoryMethodComponent"],
            ]
        })
    ], FactoryMethodModule);
    return FactoryMethodModule;
}());



/***/ }),

/***/ "./src/app/modules/creational/factory-method/services/factory-method.service.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/creational/factory-method/services/factory-method.service.ts ***!
  \**************************************************************************************/
/*! exports provided: FactoryMethodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryMethodService", function() { return FactoryMethodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _factory_method_factory_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory-method/factory-method */ "./src/app/modules/creational/factory-method/services/factory-method/factory-method.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FactoryMethodService = /** @class */ (function () {
    function FactoryMethodService() {
    }
    FactoryMethodService.prototype.factoryMethod = function () {
        Object(_factory_method_factory_method__WEBPACK_IMPORTED_MODULE_1__["factoryMethod"])();
    };
    FactoryMethodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FactoryMethodService);
    return FactoryMethodService;
}());



/***/ }),

/***/ "./src/app/modules/creational/factory-method/services/factory-method/factory-method.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/creational/factory-method/services/factory-method/factory-method.ts ***!
  \*********************************************************************************************/
/*! exports provided: createProduct, factoryMethod, FocusFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProduct", function() { return createProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factoryMethod", function() { return factoryMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusFactory", function() { return FocusFactory; });
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
function createProduct(name) {
    switch (name) {
        case 'Mustang ':
            return new MustangFactory().createProduct();
        case 'Mustang turbo':
            return new MustangFactory().createProduct(true);
        case 'Focus':
            return new FocusFactory().createProduct();
        default:
            return 'You should create a relevant Factory';
    }
}
function factoryMethod() {
    var mustang = createProduct('Mustang');
    var mustangTurbo = createProduct('Mustang turbo');
    var focus = createProduct('Focus');
    // console.log(mustang);
    // console.log(mustangTurbo);
    // console.log(focus);
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        return true;
    };
    return Car;
}());
var FocusCar = /** @class */ (function (_super) {
    __extends(FocusCar, _super);
    function FocusCar() {
        var _this = _super.call(this) || this;
        _this.name = 'Fiesta';
        _this.speedLimit = 200;
        return _this;
    }
    FocusCar.prototype.speedUp = function (speed) {
        return speed <= this.speedLimit;
    };
    return FocusCar;
}(Car));
var MustangCar = /** @class */ (function (_super) {
    __extends(MustangCar, _super);
    function MustangCar(turboVersion) {
        var _this = _super.call(this) || this;
        _this.turboVersion = turboVersion;
        _this.name = 'Mustang';
        _this.speedLimit = turboVersion ? 280 : 250;
        return _this;
    }
    MustangCar.prototype.speedUp = function (speed) {
        return speed <= this.speedLimit;
    };
    return MustangCar;
}(Car));
var CarFactory = /** @class */ (function () {
    function CarFactory() {
    }
    return CarFactory;
}());
var FocusFactory = /** @class */ (function (_super) {
    __extends(FocusFactory, _super);
    function FocusFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FocusFactory.prototype.createProduct = function () {
        return new FocusCar();
    };
    return FocusFactory;
}(CarFactory));

var MustangFactory = /** @class */ (function (_super) {
    __extends(MustangFactory, _super);
    function MustangFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MustangFactory.prototype.createProduct = function (turbo) {
        return new MustangCar(turbo);
    };
    return MustangFactory;
}(CarFactory));


/***/ })

}]);
//# sourceMappingURL=modules-creational-factory-method-factory-method-module.js.map