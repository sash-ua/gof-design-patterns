(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-command-command-module"],{

/***/ "./src/app/modules/behavioral/command/command-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/behavioral/command/command-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: CommandRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandRoutingModule", function() { return CommandRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_command_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/command.component */ "./src/app/modules/behavioral/command/components/command.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_command_component__WEBPACK_IMPORTED_MODULE_2__["CommandComponent"] }
];
var CommandRoutingModule = /** @class */ (function () {
    function CommandRoutingModule() {
    }
    CommandRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CommandRoutingModule);
    return CommandRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/command/command.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/behavioral/command/command.module.ts ***!
  \**************************************************************/
/*! exports provided: CommandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandModule", function() { return CommandModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_command_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/command.component */ "./src/app/modules/behavioral/command/components/command.component.ts");
/* harmony import */ var _command_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command-routing.module */ "./src/app/modules/behavioral/command/command-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommandModule = /** @class */ (function () {
    function CommandModule() {
    }
    CommandModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _command_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommandRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_command_component__WEBPACK_IMPORTED_MODULE_2__["CommandComponent"]]
        })
    ], CommandModule);
    return CommandModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/command/components/command.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/behavioral/command/components/command.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/command/components/command.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/behavioral/command/components/command.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/command/components/command.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/behavioral/command/components/command.component.ts ***!
  \****************************************************************************/
/*! exports provided: CommandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandComponent", function() { return CommandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/calculator.service */ "./src/app/modules/behavioral/command/services/calculator.service.ts");
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







var CommandComponent = /** @class */ (function () {
    function CommandComponent(calc, http, interpreter) {
        var _this = this;
        this.calc = calc;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.command.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.command.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.command.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.calc.calculator();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    CommandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-command',
            template: __webpack_require__(/*! ./command.component.html */ "./src/app/modules/behavioral/command/components/command.component.html"),
            styles: [__webpack_require__(/*! ./command.component.css */ "./src/app/modules/behavioral/command/components/command.component.css")]
        }),
        __metadata("design:paramtypes", [_services_calculator_service__WEBPACK_IMPORTED_MODULE_3__["CalculatorService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], CommandComponent);
    return CommandComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/command/services/calculator.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/behavioral/command/services/calculator.service.ts ***!
  \***************************************************************************/
/*! exports provided: CalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorService", function() { return CalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _command_command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command/command */ "./src/app/modules/behavioral/command/services/command/command.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculatorService = /** @class */ (function () {
    function CalculatorService() {
    }
    CalculatorService.prototype.calculator = function () {
        Object(_command_command__WEBPACK_IMPORTED_MODULE_1__["calculator"])();
    };
    CalculatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorService);
    return CalculatorService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/command/services/command/command.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/command/services/command/command.ts ***!
  \************************************************************************/
/*! exports provided: calculator, CalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculator", function() { return calculator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorService", function() { return CalculatorService; });
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
function calculator() {
    var calc = new CalculatorService();
    // calc.add([1, 2]);
    // calc.cashedResult(0);
    // calc.sub([1, 2]);
    // calc.div([1, 2]);
    // calc.div([1, 0]);
    // calc.mult([22, 2]);
    // calc.undo();
    // calc.mult([22, 3]);
}
var CalculatorService = /** @class */ (function () {
    function CalculatorService() {
        this.calc = new Receiver();
        this.controller = new ControllerInvoker();
    }
    CalculatorService.prototype.run = function (arg) {
        return this.controller.execCommand(arg);
    };
    CalculatorService.prototype.undo = function () {
        this.controller.before();
    };
    CalculatorService.prototype.redo = function () {
        this.controller.after();
    };
    CalculatorService.prototype.clear = function () {
        this.controller.clear();
    };
    CalculatorService.prototype.cashedResult = function (id) {
        console.log(this.controller.cashedResult(id));
    };
    CalculatorService.prototype.add = function (args) {
        console.log(this.run(new Add(this.calc, args)));
    };
    CalculatorService.prototype.sub = function (args) {
        console.log(this.run(new Sub(this.calc, args)));
    };
    CalculatorService.prototype.div = function (args) {
        console.log(this.run(new Div(this.calc, args)));
    };
    CalculatorService.prototype.mult = function (args) {
        console.log(this.run(new Mult(this.calc, args)));
    };
    return CalculatorService;
}());

var ControllerInvoker = /** @class */ (function () {
    function ControllerInvoker() {
        this.indx = 0;
        this.stack = new Map();
    }
    ControllerInvoker.prototype.saveToStack = function (arg) {
        this.stack.set(this.indx, arg);
    };
    ControllerInvoker.prototype.execCommand = function (arg) {
        this.saveToStack(arg);
        return this.stack.get(this.indx++).execute();
    };
    ControllerInvoker.prototype.cashedResult = function (id) {
        return this.stack.has(id) ? this.stack.get(id).result : 'No check by the ID';
    };
    ControllerInvoker.prototype.before = function () {
        this.indx = this.indx > 0 ? --this.indx : 0;
    };
    ControllerInvoker.prototype.after = function () {
        var l = this.stack.size - 1;
        this.indx = this.indx < l ? ++this.indx : l;
    };
    ControllerInvoker.prototype.clear = function () {
        this.stack = new Map();
    };
    return ControllerInvoker;
}());
var Command = /** @class */ (function () {
    function Command() {
    }
    Object.defineProperty(Command.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (arg) {
            this._result = arg;
        },
        enumerable: true,
        configurable: true
    });
    return Command;
}());
var Add = /** @class */ (function (_super) {
    __extends(Add, _super);
    function Add(arf, args) {
        var _this = _super.call(this) || this;
        _this.arf = arf;
        _this.args = args;
        return _this;
    }
    Add.prototype.execute = function () {
        this.result = this.arf.run(function (args) { return args[0] + args[1]; }, this.args);
        return this.result;
    };
    return Add;
}(Command));
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub(arf, args) {
        var _this = _super.call(this) || this;
        _this.arf = arf;
        _this.args = args;
        return _this;
    }
    Sub.prototype.execute = function () {
        this.result = this.arf.run(function (args) { return args[0] - args[1]; }, this.args);
        return this.result;
    };
    return Sub;
}(Command));
var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div(arf, args) {
        var _this = _super.call(this) || this;
        _this.arf = arf;
        _this.args = args;
        return _this;
    }
    Div.prototype.execute = function () {
        this.result = this.arf.run(function (args) { return args[1] !== 0 ? args[0] / args[1] : 'Cannot divide by zero'; }, this.args);
        return this.result;
    };
    return Div;
}(Command));
var Mult = /** @class */ (function (_super) {
    __extends(Mult, _super);
    function Mult(arf, args) {
        var _this = _super.call(this) || this;
        _this.arf = arf;
        _this.args = args;
        return _this;
    }
    Mult.prototype.execute = function () {
        this.result = this.arf.run(function (args) { return args[0] * args[1]; }, this.args);
        return this.result;
    };
    return Mult;
}(Command));
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.run = function (fn) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return fn.apply(void 0, args);
    };
    return Receiver;
}());


/***/ })

}]);
//# sourceMappingURL=modules-behavioral-command-command-module.js.map