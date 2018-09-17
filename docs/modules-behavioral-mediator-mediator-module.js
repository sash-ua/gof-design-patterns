(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-mediator-mediator-module"],{

/***/ "./src/app/modules/behavioral/mediator/components/mediator.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/behavioral/mediator/components/mediator.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/mediator/components/mediator.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/behavioral/mediator/components/mediator.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/mediator/components/mediator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/behavioral/mediator/components/mediator.component.ts ***!
  \******************************************************************************/
/*! exports provided: MediatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediatorComponent", function() { return MediatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_mediator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mediator.service */ "./src/app/modules/behavioral/mediator/services/mediator.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/services/http/get-git-content.service */ "./src/app/core/services/http/get-git-content.service.ts");
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







var MediatorComponent = /** @class */ (function () {
    function MediatorComponent(mediator, http, interpreter) {
        var _this = this;
        this.mediator = mediator;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.mediator.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.mediator.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.mediator.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.mediator.mediator();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    MediatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mediator',
            template: __webpack_require__(/*! ./mediator.component.html */ "./src/app/modules/behavioral/mediator/components/mediator.component.html"),
            styles: [__webpack_require__(/*! ./mediator.component.css */ "./src/app/modules/behavioral/mediator/components/mediator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_mediator_service__WEBPACK_IMPORTED_MODULE_3__["MediatorService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], MediatorComponent);
    return MediatorComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/mediator/mediator-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/mediator/mediator-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: MediatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediatorRoutingModule", function() { return MediatorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_mediator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mediator.component */ "./src/app/modules/behavioral/mediator/components/mediator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_mediator_component__WEBPACK_IMPORTED_MODULE_2__["MediatorComponent"] }
];
var MediatorRoutingModule = /** @class */ (function () {
    function MediatorRoutingModule() {
    }
    MediatorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MediatorRoutingModule);
    return MediatorRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/mediator/mediator.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/behavioral/mediator/mediator.module.ts ***!
  \****************************************************************/
/*! exports provided: MediatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediatorModule", function() { return MediatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_mediator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mediator.component */ "./src/app/modules/behavioral/mediator/components/mediator.component.ts");
/* harmony import */ var _mediator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediator-routing.module */ "./src/app/modules/behavioral/mediator/mediator-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MediatorModule = /** @class */ (function () {
    function MediatorModule() {
    }
    MediatorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _mediator_routing_module__WEBPACK_IMPORTED_MODULE_3__["MediatorRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_mediator_component__WEBPACK_IMPORTED_MODULE_2__["MediatorComponent"]]
        })
    ], MediatorModule);
    return MediatorModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/mediator/services/mediator.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/behavioral/mediator/services/mediator.service.ts ***!
  \**************************************************************************/
/*! exports provided: MediatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediatorService", function() { return MediatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mediator_mediator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mediator/mediator */ "./src/app/modules/behavioral/mediator/services/mediator/mediator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediatorService = /** @class */ (function () {
    function MediatorService() {
    }
    MediatorService.prototype.mediator = function () {
        Object(_mediator_mediator__WEBPACK_IMPORTED_MODULE_1__["mediatorE"])();
    };
    MediatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MediatorService);
    return MediatorService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/mediator/services/mediator/mediator.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/behavioral/mediator/services/mediator/mediator.ts ***!
  \***************************************************************************/
/*! exports provided: mediatorE, ConcretMediator, Colleague1, Colleague2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediatorE", function() { return mediatorE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcretMediator", function() { return ConcretMediator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colleague1", function() { return Colleague1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colleague2", function() { return Colleague2; });
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
function mediatorE() {
    var mediator = new ConcretMediator();
    var coll1 = new Colleague1(mediator);
    var coll2 = new Colleague2(mediator);
    mediator.c1 = coll1;
    mediator.c2 = coll2;
    // coll1.send('msg from 1');
    // coll2.send('msg from 2');
}
var Mediator = /** @class */ (function () {
    function Mediator() {
    }
    return Mediator;
}());
var ConcretMediator = /** @class */ (function (_super) {
    __extends(ConcretMediator, _super);
    function ConcretMediator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcretMediator.prototype.send = function (msg, colleague) {
        this.c1 === colleague ? this.c2.notify(msg) : this.c1.notify(msg);
    };
    return ConcretMediator;
}(Mediator));

var Colleague = /** @class */ (function () {
    function Colleague(mediator) {
        this.mediator = mediator;
    }
    return Colleague;
}());
var Colleague1 = /** @class */ (function (_super) {
    __extends(Colleague1, _super);
    function Colleague1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colleague1.prototype.send = function (msg) {
        this.mediator.send(msg, this);
    };
    Colleague1.prototype.notify = function (msg) {
        console.log('Colleague1', msg);
    };
    return Colleague1;
}(Colleague));

var Colleague2 = /** @class */ (function (_super) {
    __extends(Colleague2, _super);
    function Colleague2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Colleague2.prototype.send = function (msg) {
        this.mediator.send(msg, this);
    };
    Colleague2.prototype.notify = function (msg) {
        console.log('Colleague2', msg);
    };
    return Colleague2;
}(Colleague));



/***/ })

}]);
//# sourceMappingURL=modules-behavioral-mediator-mediator-module.js.map