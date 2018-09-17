(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-creational-prototype-prototype-module"],{

/***/ "./src/app/modules/creational/prototype/components/prototype.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/creational/prototype/components/prototype.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/creational/prototype/components/prototype.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/creational/prototype/components/prototype.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/creational/prototype/components/prototype.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/creational/prototype/components/prototype.component.ts ***!
  \********************************************************************************/
/*! exports provided: PrototypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeComponent", function() { return PrototypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _services_prototype_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/prototype.service */ "./src/app/modules/creational/prototype/services/prototype.service.ts");
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







var PrototypeComponent = /** @class */ (function () {
    function PrototypeComponent(protoServ, http, interpreter) {
        var _this = this;
        this.protoServ = protoServ;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_1__["LINKS"].creational.prototype.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_1__["LINKS"].creational.prototype.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_1__["LINKS"].creational.prototype.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_2__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_2__["ELEMENTS"].sampleTitle
        };
        this.protoServ.prototype();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    PrototypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prototype',
            template: __webpack_require__(/*! ./prototype.component.html */ "./src/app/modules/creational/prototype/components/prototype.component.html"),
            styles: [__webpack_require__(/*! ./prototype.component.css */ "./src/app/modules/creational/prototype/components/prototype.component.css")]
        }),
        __metadata("design:paramtypes", [_services_prototype_service__WEBPACK_IMPORTED_MODULE_3__["PrototypeService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_4__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], PrototypeComponent);
    return PrototypeComponent;
}());



/***/ }),

/***/ "./src/app/modules/creational/prototype/prototype-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/creational/prototype/prototype-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: PrototypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeRoutingModule", function() { return PrototypeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_prototype_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/prototype.component */ "./src/app/modules/creational/prototype/components/prototype.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '', component: _components_prototype_component__WEBPACK_IMPORTED_MODULE_2__["PrototypeComponent"]
    }];
var PrototypeRoutingModule = /** @class */ (function () {
    function PrototypeRoutingModule() {
    }
    PrototypeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PrototypeRoutingModule);
    return PrototypeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/creational/prototype/prototype.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/creational/prototype/prototype.module.ts ***!
  \******************************************************************/
/*! exports provided: PrototypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeModule", function() { return PrototypeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _prototype_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prototype-routing.module */ "./src/app/modules/creational/prototype/prototype-routing.module.ts");
/* harmony import */ var _components_prototype_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/prototype.component */ "./src/app/modules/creational/prototype/components/prototype.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PrototypeModule = /** @class */ (function () {
    function PrototypeModule() {
    }
    PrototypeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _prototype_routing_module__WEBPACK_IMPORTED_MODULE_2__["PrototypeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _components_prototype_component__WEBPACK_IMPORTED_MODULE_3__["PrototypeComponent"]
            ]
        })
    ], PrototypeModule);
    return PrototypeModule;
}());



/***/ }),

/***/ "./src/app/modules/creational/prototype/services/prototype.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/creational/prototype/services/prototype.service.ts ***!
  \****************************************************************************/
/*! exports provided: PrototypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrototypeService", function() { return PrototypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _prototype_prototype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prototype/prototype */ "./src/app/modules/creational/prototype/services/prototype/prototype.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrototypeService = /** @class */ (function () {
    function PrototypeService() {
    }
    PrototypeService.prototype.prototype = function () {
        Object(_prototype_prototype__WEBPACK_IMPORTED_MODULE_1__["prototype"])();
    };
    PrototypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PrototypeService);
    return PrototypeService;
}());



/***/ }),

/***/ "./src/app/modules/creational/prototype/services/prototype/prototype.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/creational/prototype/services/prototype/prototype.ts ***!
  \******************************************************************************/
/*! exports provided: prototype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prototype", function() { return prototype; });
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
function prototype() {
    var proto = new Keratinocytes();
    var clone = proto.clone();
    // console.log('proto size', proto.size);
    // console.log('clone size', clone.size);
    proto.feedsOn([1, 2, 3]);
    // console.log('proto size after eating', proto.size);
    // console.log('clone size', clone.size);
}
var Epidermis = /** @class */ (function () {
    function Epidermis() {
    }
    Epidermis.prototype.growth = function (m) {
        return this.size += m / 10;
    };
    return Epidermis;
}());
var Keratinocytes = /** @class */ (function (_super) {
    __extends(Keratinocytes, _super);
    function Keratinocytes() {
        var _this = _super.call(this) || this;
        _this._size = 1;
        return _this;
    }
    Object.defineProperty(Keratinocytes.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (d) {
            this._size = d;
        },
        enumerable: true,
        configurable: true
    });
    Keratinocytes.prototype.feedsOn = function (nutrients) {
        this.size = this.growth(nutrients.length);
    };
    Keratinocytes.prototype.clone = function () {
        return new Keratinocytes();
    };
    return Keratinocytes;
}(Epidermis));


/***/ })

}]);
//# sourceMappingURL=modules-creational-prototype-prototype-module.js.map