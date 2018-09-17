(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-memento-memento-module"],{

/***/ "./src/app/modules/behavioral/memento/components/memento.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/behavioral/memento/components/memento.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/memento/components/memento.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/behavioral/memento/components/memento.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/memento/components/memento.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/behavioral/memento/components/memento.component.ts ***!
  \****************************************************************************/
/*! exports provided: MementoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MementoComponent", function() { return MementoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_memento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/memento.service */ "./src/app/modules/behavioral/memento/services/memento.service.ts");
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







var MementoComponent = /** @class */ (function () {
    function MementoComponent(memento, http, interpreter) {
        var _this = this;
        this.memento = memento;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.memento.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.memento.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.memento.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.memento.memento();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    MementoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-memento',
            template: __webpack_require__(/*! ./memento.component.html */ "./src/app/modules/behavioral/memento/components/memento.component.html"),
            styles: [__webpack_require__(/*! ./memento.component.css */ "./src/app/modules/behavioral/memento/components/memento.component.css")]
        }),
        __metadata("design:paramtypes", [_services_memento_service__WEBPACK_IMPORTED_MODULE_3__["MementoService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], MementoComponent);
    return MementoComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/memento/memento-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/behavioral/memento/memento-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MementoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MementoRoutingModule", function() { return MementoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_memento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/memento.component */ "./src/app/modules/behavioral/memento/components/memento.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_memento_component__WEBPACK_IMPORTED_MODULE_2__["MementoComponent"] }
];
var MementoRoutingModule = /** @class */ (function () {
    function MementoRoutingModule() {
    }
    MementoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MementoRoutingModule);
    return MementoRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/memento/memento.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/behavioral/memento/memento.module.ts ***!
  \**************************************************************/
/*! exports provided: MementoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MementoModule", function() { return MementoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_memento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/memento.component */ "./src/app/modules/behavioral/memento/components/memento.component.ts");
/* harmony import */ var _memento_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./memento-routing.module */ "./src/app/modules/behavioral/memento/memento-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MementoModule = /** @class */ (function () {
    function MementoModule() {
    }
    MementoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _memento_routing_module__WEBPACK_IMPORTED_MODULE_3__["MementoRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_memento_component__WEBPACK_IMPORTED_MODULE_2__["MementoComponent"]]
        })
    ], MementoModule);
    return MementoModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/memento/services/memento.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/memento/services/memento.service.ts ***!
  \************************************************************************/
/*! exports provided: MementoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MementoService", function() { return MementoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _memento_memento__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memento/memento */ "./src/app/modules/behavioral/memento/services/memento/memento.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MementoService = /** @class */ (function () {
    function MementoService() {
    }
    MementoService.prototype.memento = function () {
        Object(_memento_memento__WEBPACK_IMPORTED_MODULE_1__["memento"])();
    };
    MementoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MementoService);
    return MementoService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/memento/services/memento/memento.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/memento/services/memento/memento.ts ***!
  \************************************************************************/
/*! exports provided: memento, Originator, Memento, CareTaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memento", function() { return memento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Originator", function() { return Originator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memento", function() { return Memento; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareTaker", function() { return CareTaker; });
function memento() {
    var originator = new Originator();
    originator.state = 'ONE STATE';
    // console.log('init.: ', originator.state);
    var caretaker = new CareTaker();
    caretaker.memento = originator.createMemento();
    originator.state = 'another state';
    // console.log('originator set another state: ', originator.state);
    originator.setMemento(caretaker.memento);
    // console.log('return state from memento to originator: ', originator.state);
}
var Originator = /** @class */ (function () {
    function Originator() {
    }
    Object.defineProperty(Originator.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (d) {
            this._state = d;
        },
        enumerable: true,
        configurable: true
    });
    Originator.prototype.setMemento = function (m) {
        this._state = m.state;
    };
    Originator.prototype.createMemento = function () {
        return new Memento(this.state);
    };
    return Originator;
}());

var Memento = /** @class */ (function () {
    function Memento(originState) {
        this.originState = originState;
        this.stateVault = this.originState;
    }
    Object.defineProperty(Memento.prototype, "state", {
        get: function () {
            return this.stateVault;
        },
        enumerable: true,
        configurable: true
    });
    return Memento;
}());

var CareTaker = /** @class */ (function () {
    function CareTaker() {
    }
    Object.defineProperty(CareTaker.prototype, "memento", {
        get: function () {
            return this.state;
        },
        set: function (m) {
            this.state = m;
        },
        enumerable: true,
        configurable: true
    });
    return CareTaker;
}());



/***/ })

}]);
//# sourceMappingURL=modules-behavioral-memento-memento-module.js.map