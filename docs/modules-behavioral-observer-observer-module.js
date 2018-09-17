(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-observer-observer-module"],{

/***/ "./src/app/modules/behavioral/observer/components/observer.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/behavioral/observer/components/observer.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/observer/components/observer.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/behavioral/observer/components/observer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/observer/components/observer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/behavioral/observer/components/observer.component.ts ***!
  \******************************************************************************/
/*! exports provided: ObserverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserverComponent", function() { return ObserverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_observer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/observer.service */ "./src/app/modules/behavioral/observer/services/observer.service.ts");
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







var ObserverComponent = /** @class */ (function () {
    function ObserverComponent(obs, http, interpreter) {
        var _this = this;
        this.obs = obs;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.observer.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.observer.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.observer.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.obs.pullObserver();
        this.obs.pushObserver();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    ObserverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-observer',
            template: __webpack_require__(/*! ./observer.component.html */ "./src/app/modules/behavioral/observer/components/observer.component.html"),
            styles: [__webpack_require__(/*! ./observer.component.css */ "./src/app/modules/behavioral/observer/components/observer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_observer_service__WEBPACK_IMPORTED_MODULE_3__["ObserverService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], ObserverComponent);
    return ObserverComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/observer/observer-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/observer/observer-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ObserverRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserverRoutingModule", function() { return ObserverRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_observer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/observer.component */ "./src/app/modules/behavioral/observer/components/observer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_observer_component__WEBPACK_IMPORTED_MODULE_2__["ObserverComponent"] }
];
var ObserverRoutingModule = /** @class */ (function () {
    function ObserverRoutingModule() {
    }
    ObserverRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ObserverRoutingModule);
    return ObserverRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/observer/observer.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/behavioral/observer/observer.module.ts ***!
  \****************************************************************/
/*! exports provided: ObserverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserverModule", function() { return ObserverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_observer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/observer.component */ "./src/app/modules/behavioral/observer/components/observer.component.ts");
/* harmony import */ var _observer_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer-routing.module */ "./src/app/modules/behavioral/observer/observer-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ObserverModule = /** @class */ (function () {
    function ObserverModule() {
    }
    ObserverModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _observer_routing_module__WEBPACK_IMPORTED_MODULE_3__["ObserverRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_observer_component__WEBPACK_IMPORTED_MODULE_2__["ObserverComponent"]]
        })
    ], ObserverModule);
    return ObserverModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/observer/services/observer.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/behavioral/observer/services/observer.service.ts ***!
  \**************************************************************************/
/*! exports provided: ObserverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserverService", function() { return ObserverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _observer_observer_pull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer/observer-pull */ "./src/app/modules/behavioral/observer/services/observer/observer-pull.ts");
/* harmony import */ var _observer_observer_push__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer/observer-push */ "./src/app/modules/behavioral/observer/services/observer/observer-push.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ObserverService = /** @class */ (function () {
    function ObserverService() {
    }
    ObserverService.prototype.pullObserver = function () {
        Object(_observer_observer_pull__WEBPACK_IMPORTED_MODULE_1__["pullObserver"])();
    };
    ObserverService.prototype.pushObserver = function () {
        Object(_observer_observer_push__WEBPACK_IMPORTED_MODULE_2__["pushObserver"])();
    };
    ObserverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ObserverService);
    return ObserverService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/observer/services/observer/observer-pull.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/behavioral/observer/services/observer/observer-pull.ts ***!
  \********************************************************************************/
/*! exports provided: pullObserver, ConcreteSubject, Observer1, Observer2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pullObserver", function() { return pullObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConcreteSubject", function() { return ConcreteSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer1", function() { return Observer1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer2", function() { return Observer2; });
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
function pullObserver() {
    var sub = new ConcreteSubject();
    sub.attach(new Observer1(sub));
    sub.attach(new Observer2(sub));
    sub.state = 'Some state...';
    // sub.notify();
}
var Subject = /** @class */ (function () {
    function Subject() {
        this.observersList = new Map();
    }
    Subject.prototype.attach = function (obs) {
        this.observersList.set(obs.name, obs);
    };
    Subject.prototype.detach = function (obs) {
        this.observersList.delete(obs.name);
    };
    Subject.prototype.notify = function () {
        this.observersList.forEach(function (v) { return v.update(); });
    };
    return Subject;
}());
var ConcreteSubject = /** @class */ (function (_super) {
    __extends(ConcreteSubject, _super);
    function ConcreteSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ConcreteSubject.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (d) {
            this._state = d;
        },
        enumerable: true,
        configurable: true
    });
    return ConcreteSubject;
}(Subject));

var Observer = /** @class */ (function () {
    function Observer() {
    }
    Object.defineProperty(Observer.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (d) {
            this._state = d;
        },
        enumerable: true,
        configurable: true
    });
    return Observer;
}());
var Observer1 = /** @class */ (function (_super) {
    __extends(Observer1, _super);
    function Observer1(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.name = 'Observer 1';
        return _this;
    }
    Observer1.prototype.update = function () {
        this.state = this.subject.state;
        console.log('Observer 1', this.state);
    };
    return Observer1;
}(Observer));

var Observer2 = /** @class */ (function (_super) {
    __extends(Observer2, _super);
    function Observer2(subject) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.name = 'Observer 2';
        return _this;
    }
    Observer2.prototype.update = function () {
        this.state = this.subject.state;
        console.log('Observer 2', this.state);
    };
    return Observer2;
}(Observer));



/***/ }),

/***/ "./src/app/modules/behavioral/observer/services/observer/observer-push.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/behavioral/observer/services/observer/observer-push.ts ***!
  \********************************************************************************/
/*! exports provided: pushObserver, PushConcreteSubject, PushObserver1, PushObserver2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushObserver", function() { return pushObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushConcreteSubject", function() { return PushConcreteSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushObserver1", function() { return PushObserver1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushObserver2", function() { return PushObserver2; });
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
function pushObserver() {
    var subj = new PushConcreteSubject();
    subj.attach(new PushObserver1());
    subj.attach(new PushObserver2());
    subj.state = 'Some state for push example';
    // subj.notify();
}
var Subject = /** @class */ (function () {
    function Subject() {
        this.observersList = new Map();
    }
    Subject.prototype.attach = function (observer) {
        this.observersList.set(observer.name, observer);
    };
    Subject.prototype.detach = function (observer) {
        this.observersList.delete(observer.name);
    };
    return Subject;
}());
var PushConcreteSubject = /** @class */ (function (_super) {
    __extends(PushConcreteSubject, _super);
    function PushConcreteSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PushConcreteSubject.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (d) {
            this._state = d;
        },
        enumerable: true,
        configurable: true
    });
    PushConcreteSubject.prototype.notify = function () {
        var _this = this;
        this.observersList.forEach(function (v) { return v.update(_this.state); });
    };
    return PushConcreteSubject;
}(Subject));

var Observer = /** @class */ (function () {
    function Observer() {
    }
    return Observer;
}());
var PushObserver1 = /** @class */ (function () {
    function PushObserver1() {
        this.name = 'Observer 1';
    }
    PushObserver1.prototype.update = function (state) {
        this.observerState = state;
        console.log('Observer 1', this.observerState);
    };
    return PushObserver1;
}());

var PushObserver2 = /** @class */ (function () {
    function PushObserver2() {
        this.name = 'Observer 2';
    }
    PushObserver2.prototype.update = function (state) {
        this.observerState = state;
        console.log('Observer 2', this.observerState);
    };
    return PushObserver2;
}());



/***/ })

}]);
//# sourceMappingURL=modules-behavioral-observer-observer-module.js.map