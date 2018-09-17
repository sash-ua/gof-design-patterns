(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-state-state-module"],{

/***/ "./src/app/modules/behavioral/state/components/state.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/behavioral/state/components/state.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/state/components/state.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/behavioral/state/components/state.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/state/components/state.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/state/components/state.component.ts ***!
  \************************************************************************/
/*! exports provided: StateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return StateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/state.service */ "./src/app/modules/behavioral/state/services/state.service.ts");
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







var StateComponent = /** @class */ (function () {
    function StateComponent(state, http, interpreter) {
        var _this = this;
        this.state = state;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.state.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.state.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.state.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.state.state();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    StateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-state',
            template: __webpack_require__(/*! ./state.component.html */ "./src/app/modules/behavioral/state/components/state.component.html"),
            styles: [__webpack_require__(/*! ./state.component.css */ "./src/app/modules/behavioral/state/components/state.component.css")]
        }),
        __metadata("design:paramtypes", [_services_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], StateComponent);
    return StateComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/state/services/state.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/behavioral/state/services/state.service.ts ***!
  \********************************************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/state */ "./src/app/modules/behavioral/state/services/state/state.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = /** @class */ (function () {
    function StateService() {
    }
    StateService.prototype.state = function () {
        Object(_state_state__WEBPACK_IMPORTED_MODULE_1__["state"])();
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/state/services/state/state.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/behavioral/state/services/state/state.ts ***!
  \******************************************************************/
/*! exports provided: state, Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
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
function state() {
    var man = new Man();
    // man.behavior(); // 'Morning routine' by default
    // man.behavior(Time.evening); // morning -> noon, therefore state does not changed
    // man.behavior(Time.noon);  // 'Noon routine'
}
var Time;
(function (Time) {
    Time[Time["morning"] = 0] = "morning";
    Time[Time["noon"] = 1] = "noon";
    Time[Time["evening"] = 2] = "evening";
    Time[Time["night"] = 3] = "night";
})(Time || (Time = {}));
var Man = /** @class */ (function () {
    function Man() {
        this.manState = new MorningState();
    }
    Object.defineProperty(Man.prototype, "state", {
        get: function () {
            return this.manState;
        },
        set: function (s) {
            this.manState = s;
        },
        enumerable: true,
        configurable: true
    });
    Man.prototype.behavior = function (time) {
        if (!time) {
            time = Time.morning;
        }
        this.manState.handleState(this, time);
        this.manState.routine();
    };
    return Man;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.handleState = function (man, time) {
        this.changeState(man, time);
    };
    return State;
}());
var MorningState = /** @class */ (function (_super) {
    __extends(MorningState, _super);
    function MorningState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MorningState.prototype.routine = function () {
        console.log('Morning routine');
    };
    MorningState.prototype.changeState = function (man, time) {
        if (Time.noon === time) {
            man.state = new NoonState();
        }
    };
    return MorningState;
}(State));
var NoonState = /** @class */ (function (_super) {
    __extends(NoonState, _super);
    function NoonState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoonState.prototype.routine = function () {
        console.log('Noon routine');
    };
    NoonState.prototype.changeState = function (man, time) {
        if (Time.evening === time) {
            man.state = new EveningState();
        }
    };
    return NoonState;
}(State));
var EveningState = /** @class */ (function (_super) {
    __extends(EveningState, _super);
    function EveningState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EveningState.prototype.routine = function () {
        console.log('Evening routine');
    };
    EveningState.prototype.changeState = function (man, time) {
        if (Time.night === time) {
            man.state = new NightState();
        }
    };
    return EveningState;
}(State));
var NightState = /** @class */ (function (_super) {
    __extends(NightState, _super);
    function NightState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NightState.prototype.routine = function () {
        console.log('Night routine');
    };
    NightState.prototype.changeState = function (man, time) {
        if (Time.morning === time) {
            man.state = new MorningState();
        }
    };
    return NightState;
}(State));


/***/ }),

/***/ "./src/app/modules/behavioral/state/state-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/behavioral/state/state-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: StateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateRoutingModule", function() { return StateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/state.component */ "./src/app/modules/behavioral/state/components/state.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_state_component__WEBPACK_IMPORTED_MODULE_2__["StateComponent"] }
];
var StateRoutingModule = /** @class */ (function () {
    function StateRoutingModule() {
    }
    StateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StateRoutingModule);
    return StateRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/state/state.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/behavioral/state/state.module.ts ***!
  \**********************************************************/
/*! exports provided: StateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateModule", function() { return StateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/state.component */ "./src/app/modules/behavioral/state/components/state.component.ts");
/* harmony import */ var _state_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-routing.module */ "./src/app/modules/behavioral/state/state-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _state_routing_module__WEBPACK_IMPORTED_MODULE_3__["StateRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_state_component__WEBPACK_IMPORTED_MODULE_2__["StateComponent"]]
        })
    ], StateModule);
    return StateModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-behavioral-state-state-module.js.map