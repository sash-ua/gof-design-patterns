(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-chain-of-responsibility-chain-of-responsibility-module"],{

/***/ "./src/app/modules/behavioral/chain-of-responsibility/chain-of-responsibility-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/behavioral/chain-of-responsibility/chain-of-responsibility-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChainOfResponsibilityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainOfResponsibilityRoutingModule", function() { return ChainOfResponsibilityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_chain_of_responsibility_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chain-of-responsibility.component */ "./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_chain_of_responsibility_component__WEBPACK_IMPORTED_MODULE_2__["ChainOfResponsibilityComponent"] }
];
var ChainOfResponsibilityRoutingModule = /** @class */ (function () {
    function ChainOfResponsibilityRoutingModule() {
    }
    ChainOfResponsibilityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChainOfResponsibilityRoutingModule);
    return ChainOfResponsibilityRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/chain-of-responsibility/chain-of-responsibility.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/behavioral/chain-of-responsibility/chain-of-responsibility.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ChainOfResponsibilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainOfResponsibilityModule", function() { return ChainOfResponsibilityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_chain_of_responsibility_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chain-of-responsibility.component */ "./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.ts");
/* harmony import */ var _chain_of_responsibility_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chain-of-responsibility-routing.module */ "./src/app/modules/behavioral/chain-of-responsibility/chain-of-responsibility-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ChainOfResponsibilityModule = /** @class */ (function () {
    function ChainOfResponsibilityModule() {
    }
    ChainOfResponsibilityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chain_of_responsibility_routing_module__WEBPACK_IMPORTED_MODULE_3__["ChainOfResponsibilityRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_chain_of_responsibility_component__WEBPACK_IMPORTED_MODULE_2__["ChainOfResponsibilityComponent"]]
        })
    ], ChainOfResponsibilityModule);
    return ChainOfResponsibilityModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ChainOfResponsibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainOfResponsibilityComponent", function() { return ChainOfResponsibilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_chain_of_responsibility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chain-of-responsibility.service */ "./src/app/modules/behavioral/chain-of-responsibility/services/chain-of-responsibility.service.ts");
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







var ChainOfResponsibilityComponent = /** @class */ (function () {
    function ChainOfResponsibilityComponent(cOfR, http, interpreter) {
        var _this = this;
        this.cOfR = cOfR;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.chainOfResponsibility.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.chainOfResponsibility.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.chainOfResponsibility.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.cOfR.chainOfResponsibility();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    ChainOfResponsibilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chain-of-responsibility',
            template: __webpack_require__(/*! ./chain-of-responsibility.component.html */ "./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.html"),
            styles: [__webpack_require__(/*! ./chain-of-responsibility.component.css */ "./src/app/modules/behavioral/chain-of-responsibility/components/chain-of-responsibility.component.css")]
        }),
        __metadata("design:paramtypes", [_services_chain_of_responsibility_service__WEBPACK_IMPORTED_MODULE_3__["ChainOfResponsibilityService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], ChainOfResponsibilityComponent);
    return ChainOfResponsibilityComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/chain-of-responsibility/services/chain-of-responsibility.service.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/behavioral/chain-of-responsibility/services/chain-of-responsibility.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: ChainOfResponsibilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainOfResponsibilityService", function() { return ChainOfResponsibilityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chain_of_responsibility_chain_of_responsibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chain-of-responsibility/chain-of-responsibility */ "./src/app/modules/behavioral/chain-of-responsibility/services/chain-of-responsibility/chain-of-responsibility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChainOfResponsibilityService = /** @class */ (function () {
    function ChainOfResponsibilityService() {
    }
    ChainOfResponsibilityService.prototype.chainOfResponsibility = function () {
        Object(_chain_of_responsibility_chain_of_responsibility__WEBPACK_IMPORTED_MODULE_1__["chainOfResponsibility"])();
    };
    ChainOfResponsibilityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ChainOfResponsibilityService);
    return ChainOfResponsibilityService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/chain-of-responsibility/services/chain-of-responsibility/chain-of-responsibility.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/behavioral/chain-of-responsibility/services/chain-of-responsibility/chain-of-responsibility.ts ***!
  \************************************************************************************************************************/
/*! exports provided: chainOfResponsibility, AppHandler, DialogHandler, ButtonHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainOfResponsibility", function() { return chainOfResponsibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHandler", function() { return AppHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogHandler", function() { return DialogHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonHandler", function() { return ButtonHandler; });
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
function chainOfResponsibility() {
    var appHandler = new AppHandler();
    var dialogHandler = new DialogHandler();
    var buttonHandler = new ButtonHandler();
    buttonHandler.successor = appHandler; // Chain: button -> app
    dialogHandler.successor = buttonHandler; // Chain: dialog -> button -> app
    // dialogHandler.handleHelp({name: 'dialog'});  // This is help dialog!
    // dialogHandler.handleHelp({name: 'button'});  // This is help button!
    // dialogHandler.handleHelp({name: 'q'});       // This is help app!
}
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Object.defineProperty(Handler.prototype, "successor", {
        get: function () {
            return this._successor;
        },
        set: function (obj) {
            this._successor = obj;
        },
        enumerable: true,
        configurable: true
    });
    return Handler;
}());
var AppHandler = /** @class */ (function (_super) {
    __extends(AppHandler, _super);
    function AppHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppHandler.prototype.handleHelp = function (control) {
        console.log('This is help app!');
    };
    return AppHandler;
}(Handler));

var DialogHandler = /** @class */ (function (_super) {
    __extends(DialogHandler, _super);
    function DialogHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DialogHandler.prototype.handleHelp = function (control) {
        if (control.name === 'dialog') {
            console.log('This is help dialog!');
        }
        else if (this.successor) {
            this.successor.handleHelp(control);
        }
    };
    return DialogHandler;
}(Handler));

var ButtonHandler = /** @class */ (function (_super) {
    __extends(ButtonHandler, _super);
    function ButtonHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonHandler.prototype.handleHelp = function (control) {
        if (control.name === 'button') {
            console.log('This is help button!');
        }
        else if (this.successor) {
            this.successor.handleHelp(control);
        }
    };
    return ButtonHandler;
}(Handler));



/***/ })

}]);
//# sourceMappingURL=modules-behavioral-chain-of-responsibility-chain-of-responsibility-module.js.map