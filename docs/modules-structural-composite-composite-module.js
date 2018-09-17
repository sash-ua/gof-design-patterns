(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-structural-composite-composite-module"],{

/***/ "./src/app/modules/structural/composite/components/composite.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/structural/composite/components/composite.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/structural/composite/components/composite.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/structural/composite/components/composite.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/structural/composite/components/composite.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/structural/composite/components/composite.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompositeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeComponent", function() { return CompositeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_composite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/composite.service */ "./src/app/modules/structural/composite/services/composite.service.ts");
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







var CompositeComponent = /** @class */ (function () {
    function CompositeComponent(comp, http, interpreter) {
        var _this = this;
        this.comp = comp;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.composite.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.composite.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.composite.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.comp.composite();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    CompositeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-composite',
            template: __webpack_require__(/*! ./composite.component.html */ "./src/app/modules/structural/composite/components/composite.component.html"),
            styles: [__webpack_require__(/*! ./composite.component.css */ "./src/app/modules/structural/composite/components/composite.component.css")]
        }),
        __metadata("design:paramtypes", [_services_composite_service__WEBPACK_IMPORTED_MODULE_3__["CompositeService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], CompositeComponent);
    return CompositeComponent;
}());



/***/ }),

/***/ "./src/app/modules/structural/composite/composite-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/structural/composite/composite-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CompositeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeRoutingModule", function() { return CompositeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_composite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/composite.component */ "./src/app/modules/structural/composite/components/composite.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_composite_component__WEBPACK_IMPORTED_MODULE_2__["CompositeComponent"] }
];
var CompositeRoutingModule = /** @class */ (function () {
    function CompositeRoutingModule() {
    }
    CompositeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CompositeRoutingModule);
    return CompositeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/composite/composite.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/structural/composite/composite.module.ts ***!
  \******************************************************************/
/*! exports provided: CompositeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeModule", function() { return CompositeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_composite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/composite.component */ "./src/app/modules/structural/composite/components/composite.component.ts");
/* harmony import */ var _composite_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./composite-routing.module */ "./src/app/modules/structural/composite/composite-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CompositeModule = /** @class */ (function () {
    function CompositeModule() {
    }
    CompositeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _composite_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompositeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_composite_component__WEBPACK_IMPORTED_MODULE_2__["CompositeComponent"]]
        })
    ], CompositeModule);
    return CompositeModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/composite/services/composite.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/structural/composite/services/composite.service.ts ***!
  \****************************************************************************/
/*! exports provided: CompositeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompositeService", function() { return CompositeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _composite_composite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./composite/composite */ "./src/app/modules/structural/composite/services/composite/composite.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompositeService = /** @class */ (function () {
    function CompositeService() {
    }
    CompositeService.prototype.composite = function () {
        Object(_composite_composite__WEBPACK_IMPORTED_MODULE_1__["composite"])();
    };
    CompositeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CompositeService);
    return CompositeService;
}());



/***/ }),

/***/ "./src/app/modules/structural/composite/services/composite/composite.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/structural/composite/services/composite/composite.ts ***!
  \******************************************************************************/
/*! exports provided: composite, ComplexEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composite", function() { return composite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexEl", function() { return ComplexEl; });
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
function composite() {
    var picture = new ComplexEl('Root');
    var line = new PrimitiveEl('line');
    var circle = new PrimitiveEl('circle');
    var pip = new ComplexEl('canvas1');
    var lineInPip = new PrimitiveEl('line');
    var outPictureEl = new PrimitiveEl('out');
    pip.addElement(lineInPip);
    picture.addElement(line);
    picture.addElement(circle);
    picture.addElement(pip);
    // console.log(picture.getChild(line));
    // console.log(picture.getChildren());
    // console.log(picture.getChild(outPictureEl));
}
var VectorGraphicEl = /** @class */ (function () {
    function VectorGraphicEl() {
        this._state = {
            rawName: '',
            name: Symbol(),
            msg: '',
            errMsg: 'No such method',
            renderer: []
        };
    }
    Object.defineProperty(VectorGraphicEl.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    VectorGraphicEl.prototype.addElement = function (elem) {
        return new Error(this.state.errMsg);
    };
    VectorGraphicEl.prototype.getChild = function (elem) {
        return new Error(this.state.errMsg);
    };
    VectorGraphicEl.prototype.getChildren = function () {
        return new Error(this.state.errMsg);
    };
    VectorGraphicEl.prototype.removeEl = function () {
        return new Error(this.state.errMsg);
    };
    return VectorGraphicEl;
}());
var PrimitiveEl = /** @class */ (function (_super) {
    __extends(PrimitiveEl, _super);
    function PrimitiveEl(name) {
        var _this = _super.call(this) || this;
        _this.state.name = Symbol(name);
        _this.state.msg = "Element " + name + " rendered";
        _this.state.rawName = name;
        _this.drawEl();
        return _this;
    }
    PrimitiveEl.prototype.drawEl = function () {
        this.state.renderer.push(this.state.msg);
    };
    return PrimitiveEl;
}(VectorGraphicEl));
var ComplexEl = /** @class */ (function () {
    function ComplexEl(name) {
        this._state = {
            rawName: '',
            name: Symbol(),
            msg: '',
            errMsg: 'No such method',
            renderer: []
        };
        this.nodes = new Map();
        this.state.name = Symbol(name);
        this.state.msg = "Complex element " + name + " rendered";
        this.drawEl();
        this.state.rawName = name;
    }
    Object.defineProperty(ComplexEl.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    ComplexEl.prototype.drawEl = function () {
        this.state.renderer.push(this.state.msg);
    };
    ComplexEl.prototype.addElement = function (elem) {
        this.nodes.set(elem.state.name, elem);
    };
    ComplexEl.prototype.getChild = function (elem) {
        var n = elem.state;
        return this.nodes.has(n.name) ? this.nodes.get(n.name) : new Error("Element '" + n.rawName + "' does not exists!");
    };
    ComplexEl.prototype.getChildren = function () {
        return this.nodes;
    };
    ComplexEl.prototype.removeEl = function () {
        this.nodes.delete(this.state.name);
    };
    return ComplexEl;
}());



/***/ })

}]);
//# sourceMappingURL=modules-structural-composite-composite-module.js.map