(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-creational-singleton-singleton-module"],{

/***/ "./src/app/modules/creational/singleton/components/singleton.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/creational/singleton/components/singleton.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/creational/singleton/components/singleton.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/creational/singleton/components/singleton.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/creational/singleton/components/singleton.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/creational/singleton/components/singleton.component.ts ***!
  \********************************************************************************/
/*! exports provided: SingletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonComponent", function() { return SingletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/singleton.service */ "./src/app/modules/creational/singleton/services/singleton.service.ts");
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







var SingletonComponent = /** @class */ (function () {
    function SingletonComponent(singleton, http, interpreter) {
        var _this = this;
        this.singleton = singleton;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.singleton.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.singleton.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].creational.singleton.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.singleton.singleton();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    SingletonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-singleton',
            template: __webpack_require__(/*! ./singleton.component.html */ "./src/app/modules/creational/singleton/components/singleton.component.html"),
            styles: [__webpack_require__(/*! ./singleton.component.css */ "./src/app/modules/creational/singleton/components/singleton.component.css")]
        }),
        __metadata("design:paramtypes", [_services_singleton_service__WEBPACK_IMPORTED_MODULE_3__["SingletonService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], SingletonComponent);
    return SingletonComponent;
}());



/***/ }),

/***/ "./src/app/modules/creational/singleton/services/singleton.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/creational/singleton/services/singleton.service.ts ***!
  \****************************************************************************/
/*! exports provided: SingletonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonService", function() { return SingletonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _singleton_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./singleton/singleton */ "./src/app/modules/creational/singleton/services/singleton/singleton.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingletonService = /** @class */ (function () {
    function SingletonService() {
    }
    SingletonService.prototype.singleton = function () {
        Object(_singleton_singleton__WEBPACK_IMPORTED_MODULE_1__["singleton"])();
    };
    SingletonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SingletonService);
    return SingletonService;
}());



/***/ }),

/***/ "./src/app/modules/creational/singleton/services/singleton/singleton.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/creational/singleton/services/singleton/singleton.ts ***!
  \******************************************************************************/
/*! exports provided: singleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
function singleton() {
    var sun1 = SunSingleton.SunInstance;
    var sun2 = SunSingleton.SunInstance;
    // console.log('sun1 === sun2', sun1 === sun2);
    // console.log(sun1.shining());
    // console.log(sun2.shining());
}
var SunSingleton;
(function (SunSingleton) {
    var Sun = /** @class */ (function () {
        function Sun() {
            this.luminosity = 0;
        }
        Sun.prototype.shining = function () {
            return this.luminosity++;
        };
        return Sun;
    }());
    SunSingleton.SunInstance = new Sun();
})(SunSingleton || (SunSingleton = {}));


/***/ }),

/***/ "./src/app/modules/creational/singleton/singleton-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/creational/singleton/singleton-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SingletonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonRoutingModule", function() { return SingletonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_singleton_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/singleton.component */ "./src/app/modules/creational/singleton/components/singleton.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_singleton_component__WEBPACK_IMPORTED_MODULE_2__["SingletonComponent"] }
];
var SingletonRoutingModule = /** @class */ (function () {
    function SingletonRoutingModule() {
    }
    SingletonRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SingletonRoutingModule);
    return SingletonRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/creational/singleton/singleton.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/creational/singleton/singleton.module.ts ***!
  \******************************************************************/
/*! exports provided: SingletonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonModule", function() { return SingletonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _singleton_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleton-routing.module */ "./src/app/modules/creational/singleton/singleton-routing.module.ts");
/* harmony import */ var _components_singleton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/singleton.component */ "./src/app/modules/creational/singleton/components/singleton.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SingletonModule = /** @class */ (function () {
    function SingletonModule() {
    }
    SingletonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _singleton_routing_module__WEBPACK_IMPORTED_MODULE_2__["SingletonRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _components_singleton_component__WEBPACK_IMPORTED_MODULE_3__["SingletonComponent"]
            ]
        })
    ], SingletonModule);
    return SingletonModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-creational-singleton-singleton-module.js.map