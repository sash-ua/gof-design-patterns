(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-visitor-visitor-module"],{

/***/ "./src/app/modules/behavioral/visitor/components/visitor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/behavioral/visitor/components/visitor.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/visitor/components/visitor.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/behavioral/visitor/components/visitor.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/visitor/components/visitor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/behavioral/visitor/components/visitor.component.ts ***!
  \****************************************************************************/
/*! exports provided: VisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorComponent", function() { return VisitorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_visitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/visitor.service */ "./src/app/modules/behavioral/visitor/services/visitor.service.ts");
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







var VisitorComponent = /** @class */ (function () {
    function VisitorComponent(visitor, http, interpreter) {
        var _this = this;
        this.visitor = visitor;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.visitor.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.visitor.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.visitor.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.visitor.visitior();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    VisitorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visitor',
            template: __webpack_require__(/*! ./visitor.component.html */ "./src/app/modules/behavioral/visitor/components/visitor.component.html"),
            styles: [__webpack_require__(/*! ./visitor.component.css */ "./src/app/modules/behavioral/visitor/components/visitor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_visitor_service__WEBPACK_IMPORTED_MODULE_3__["VisitorService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], VisitorComponent);
    return VisitorComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/visitor/services/visitor.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/visitor/services/visitor.service.ts ***!
  \************************************************************************/
/*! exports provided: VisitorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorService", function() { return VisitorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _visitor_visitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitor/visitor */ "./src/app/modules/behavioral/visitor/services/visitor/visitor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisitorService = /** @class */ (function () {
    function VisitorService() {
    }
    VisitorService.prototype.visitior = function () {
        Object(_visitor_visitor__WEBPACK_IMPORTED_MODULE_1__["visitior"])();
    };
    VisitorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], VisitorService);
    return VisitorService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/visitor/services/visitor/visitor.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/visitor/services/visitor/visitor.ts ***!
  \************************************************************************/
/*! exports provided: visitior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitior", function() { return visitior; });
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
function visitior() {
    var controller = new ElementsController();
    controller.add(new ElementA());
    controller.add(new ElementB());
    // controller.accept(new VisitorAlfa());
    // controller.accept(new VisitorBeta());
}
var Visitor = /** @class */ (function () {
    function Visitor() {
    }
    return Visitor;
}());
var VisitorAlfa = /** @class */ (function (_super) {
    __extends(VisitorAlfa, _super);
    function VisitorAlfa() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Alfa visitor';
        return _this;
    }
    VisitorAlfa.prototype.visitElementA = function (el) {
        el.runA(this.name);
    };
    VisitorAlfa.prototype.visitElementB = function (el) {
        el.runB(this.name);
    };
    return VisitorAlfa;
}(Visitor));
var VisitorBeta = /** @class */ (function (_super) {
    __extends(VisitorBeta, _super);
    function VisitorBeta() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Beta visitor';
        return _this;
    }
    VisitorBeta.prototype.visitElementA = function (el) {
        el.runA(this.name);
    };
    VisitorBeta.prototype.visitElementB = function (el) {
        el.runB(this.name);
    };
    return VisitorBeta;
}(Visitor));
var Element = /** @class */ (function () {
    function Element() {
    }
    return Element;
}());
var ElementA = /** @class */ (function (_super) {
    __extends(ElementA, _super);
    function ElementA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._name = 'Element A';
        return _this;
    }
    Object.defineProperty(ElementA.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    ElementA.prototype.accept = function (visitor) {
        visitor.visitElementA(this);
    };
    ElementA.prototype.runA = function (visitorName) {
        console.log(this._name + " executed by " + visitorName);
    };
    return ElementA;
}(Element));
var ElementB = /** @class */ (function (_super) {
    __extends(ElementB, _super);
    function ElementB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._name = 'Element B';
        return _this;
    }
    Object.defineProperty(ElementB.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    ElementB.prototype.accept = function (visitor) {
        visitor.visitElementB(this);
    };
    ElementB.prototype.runB = function (visitorName) {
        console.log(this._name + " executed by " + visitorName);
    };
    return ElementB;
}(Element));
var ElementsController = /** @class */ (function () {
    function ElementsController() {
        this.elements = new Map();
    }
    ElementsController.prototype.add = function (elem) {
        this.elements.set(elem.name, elem);
    };
    ElementsController.prototype.remove = function (elem) {
        this.elements.delete(elem.name);
    };
    ElementsController.prototype.accept = function (visitor) {
        this.elements.forEach(function (v) { return v.accept(visitor); });
    };
    return ElementsController;
}());


/***/ }),

/***/ "./src/app/modules/behavioral/visitor/visitor-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/behavioral/visitor/visitor-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: VisitorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorRoutingModule", function() { return VisitorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_visitor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/visitor.component */ "./src/app/modules/behavioral/visitor/components/visitor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_visitor_component__WEBPACK_IMPORTED_MODULE_2__["VisitorComponent"] }
];
var VisitorRoutingModule = /** @class */ (function () {
    function VisitorRoutingModule() {
    }
    VisitorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VisitorRoutingModule);
    return VisitorRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/visitor/visitor.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/behavioral/visitor/visitor.module.ts ***!
  \**************************************************************/
/*! exports provided: VisitorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorModule", function() { return VisitorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_visitor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/visitor.component */ "./src/app/modules/behavioral/visitor/components/visitor.component.ts");
/* harmony import */ var _visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor-routing.module */ "./src/app/modules/behavioral/visitor/visitor-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var VisitorModule = /** @class */ (function () {
    function VisitorModule() {
    }
    VisitorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__["VisitorRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_visitor_component__WEBPACK_IMPORTED_MODULE_2__["VisitorComponent"]]
        })
    ], VisitorModule);
    return VisitorModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-behavioral-visitor-visitor-module.js.map