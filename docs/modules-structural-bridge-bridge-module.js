(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-structural-bridge-bridge-module"],{

/***/ "./src/app/modules/structural/bridge/bridge-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/structural/bridge/bridge-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: BridgeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeRoutingModule", function() { return BridgeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_bridge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bridge.component */ "./src/app/modules/structural/bridge/components/bridge.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_bridge_component__WEBPACK_IMPORTED_MODULE_2__["BridgeComponent"] }
];
var BridgeRoutingModule = /** @class */ (function () {
    function BridgeRoutingModule() {
    }
    BridgeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BridgeRoutingModule);
    return BridgeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/bridge/bridge.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/structural/bridge/bridge.module.ts ***!
  \************************************************************/
/*! exports provided: BridgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeModule", function() { return BridgeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_bridge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bridge.component */ "./src/app/modules/structural/bridge/components/bridge.component.ts");
/* harmony import */ var _bridge_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bridge-routing.module */ "./src/app/modules/structural/bridge/bridge-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BridgeModule = /** @class */ (function () {
    function BridgeModule() {
    }
    BridgeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _bridge_routing_module__WEBPACK_IMPORTED_MODULE_3__["BridgeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_bridge_component__WEBPACK_IMPORTED_MODULE_2__["BridgeComponent"]]
        })
    ], BridgeModule);
    return BridgeModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/bridge/components/bridge.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/structural/bridge/components/bridge.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/structural/bridge/components/bridge.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/structural/bridge/components/bridge.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/structural/bridge/components/bridge.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/structural/bridge/components/bridge.component.ts ***!
  \**************************************************************************/
/*! exports provided: BridgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeComponent", function() { return BridgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_bridge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bridge.service */ "./src/app/modules/structural/bridge/services/bridge.service.ts");
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







var BridgeComponent = /** @class */ (function () {
    function BridgeComponent(bridge, http, interpreter) {
        var _this = this;
        this.bridge = bridge;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.bridge.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.bridge.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.bridge.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        bridge.bridge();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    BridgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bridge',
            template: __webpack_require__(/*! ./bridge.component.html */ "./src/app/modules/structural/bridge/components/bridge.component.html"),
            styles: [__webpack_require__(/*! ./bridge.component.css */ "./src/app/modules/structural/bridge/components/bridge.component.css")]
        }),
        __metadata("design:paramtypes", [_services_bridge_service__WEBPACK_IMPORTED_MODULE_3__["BridgeService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], BridgeComponent);
    return BridgeComponent;
}());



/***/ }),

/***/ "./src/app/modules/structural/bridge/services/bridge.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/structural/bridge/services/bridge.service.ts ***!
  \**********************************************************************/
/*! exports provided: BridgeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeService", function() { return BridgeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bridge_bridge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bridge/bridge */ "./src/app/modules/structural/bridge/services/bridge/bridge.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BridgeService = /** @class */ (function () {
    function BridgeService() {
    }
    BridgeService.prototype.bridge = function () {
        Object(_bridge_bridge__WEBPACK_IMPORTED_MODULE_1__["bridge"])();
    };
    BridgeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BridgeService);
    return BridgeService;
}());



/***/ }),

/***/ "./src/app/modules/structural/bridge/services/bridge/bridge.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/structural/bridge/services/bridge/bridge.ts ***!
  \*********************************************************************/
/*! exports provided: bridge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bridge", function() { return bridge; });
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
function bridge() {
    // const fiesta = new OneOfFordCar(new FordFiesta());
    // console.log(fiesta.name());
    // console.log(fiesta.currSpeed());
    // fiesta.start();
    // console.log(fiesta.currSpeed());
    // fiesta.speedUp(200);
    // console.log(fiesta.currSpeed());
    // fiesta.speedUp(250);
    // console.log(fiesta.currSpeed());
    // const mustang = new OneOfFordCar(new FordMustang());
    // console.log(mustang.name());
    // console.log(mustang.currSpeed());
    // mustang.start();
    // console.log(mustang.currSpeed());
    // mustang.speedUp(200);
    // console.log(mustang.currSpeed());
    // mustang.speedUp(270);
    // console.log(mustang.currSpeed());
}
var Car = /** @class */ (function () {
    function Car(car) {
        this.car = car;
    }
    return Car;
}());
var OneOfFordCar = /** @class */ (function (_super) {
    __extends(OneOfFordCar, _super);
    function OneOfFordCar(car) {
        var _this = _super.call(this, car) || this;
        _this.car = car;
        return _this;
    }
    OneOfFordCar.prototype.name = function () {
        return this.car.name;
    };
    OneOfFordCar.prototype.start = function () {
        this.car.start();
    };
    OneOfFordCar.prototype.speedUp = function (sp) {
        this.car.speedUp(sp);
    };
    OneOfFordCar.prototype.currSpeed = function () {
        return this.car.currSpeed();
    };
    return OneOfFordCar;
}(Car));
var FordCar = /** @class */ (function () {
    function FordCar() {
    }
    FordCar.prototype.start = function () {
        if (this.speed === 0) {
            this.speed = 1;
        }
    };
    FordCar.prototype.speedUp = function (speed) {
        this.speed = speed <= this.speedLimit ? speed : this.speedLimit;
    };
    FordCar.prototype.currSpeed = function () {
        return this.speed;
    };
    return FordCar;
}());
var FordFiesta = /** @class */ (function (_super) {
    __extends(FordFiesta, _super);
    function FordFiesta() {
        var _this = _super.call(this) || this;
        _this.name = 'Fiesta';
        _this.speed = 0;
        _this.speedLimit = 220;
        return _this;
    }
    return FordFiesta;
}(FordCar));
var FordMustang = /** @class */ (function (_super) {
    __extends(FordMustang, _super);
    function FordMustang() {
        var _this = _super.call(this) || this;
        _this.name = 'Mustang';
        _this.speed = 0;
        _this.speedLimit = 280;
        return _this;
    }
    return FordMustang;
}(FordCar));


/***/ })

}]);
//# sourceMappingURL=modules-structural-bridge-bridge-module.js.map