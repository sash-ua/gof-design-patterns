(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-structural-proxy-proxy-module"],{

/***/ "./src/app/modules/structural/proxy/components/proxy.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/structural/proxy/components/proxy.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/structural/proxy/components/proxy.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/structural/proxy/components/proxy.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/structural/proxy/components/proxy.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/structural/proxy/components/proxy.component.ts ***!
  \************************************************************************/
/*! exports provided: ProxyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyComponent", function() { return ProxyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_proxy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/proxy.service */ "./src/app/modules/structural/proxy/services/proxy.service.ts");
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







var ProxyComponent = /** @class */ (function () {
    function ProxyComponent(proxy, http, interpreter) {
        var _this = this;
        this.proxy = proxy;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.proxy.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.proxy.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].structural.proxy.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.proxy.proxy();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    ProxyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proxy',
            template: __webpack_require__(/*! ./proxy.component.html */ "./src/app/modules/structural/proxy/components/proxy.component.html"),
            styles: [__webpack_require__(/*! ./proxy.component.css */ "./src/app/modules/structural/proxy/components/proxy.component.css")]
        }),
        __metadata("design:paramtypes", [_services_proxy_service__WEBPACK_IMPORTED_MODULE_3__["ProxyService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _behavioral_interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], ProxyComponent);
    return ProxyComponent;
}());



/***/ }),

/***/ "./src/app/modules/structural/proxy/proxy-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/structural/proxy/proxy-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ProxyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyRoutingModule", function() { return ProxyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_proxy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/proxy.component */ "./src/app/modules/structural/proxy/components/proxy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_proxy_component__WEBPACK_IMPORTED_MODULE_2__["ProxyComponent"] }
];
var ProxyRoutingModule = /** @class */ (function () {
    function ProxyRoutingModule() {
    }
    ProxyRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProxyRoutingModule);
    return ProxyRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/proxy/proxy.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/structural/proxy/proxy.module.ts ***!
  \**********************************************************/
/*! exports provided: ProxyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyModule", function() { return ProxyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_proxy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/proxy.component */ "./src/app/modules/structural/proxy/components/proxy.component.ts");
/* harmony import */ var _proxy_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proxy-routing.module */ "./src/app/modules/structural/proxy/proxy-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ProxyModule = /** @class */ (function () {
    function ProxyModule() {
    }
    ProxyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _proxy_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProxyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_proxy_component__WEBPACK_IMPORTED_MODULE_2__["ProxyComponent"]]
        })
    ], ProxyModule);
    return ProxyModule;
}());



/***/ }),

/***/ "./src/app/modules/structural/proxy/services/proxy.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/structural/proxy/services/proxy.service.ts ***!
  \********************************************************************/
/*! exports provided: ProxyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyService", function() { return ProxyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _proxy_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy/proxy */ "./src/app/modules/structural/proxy/services/proxy/proxy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProxyService = /** @class */ (function () {
    function ProxyService() {
    }
    ProxyService.prototype.proxy = function () {
        Object(_proxy_proxy__WEBPACK_IMPORTED_MODULE_1__["proxyE"])();
    };
    ProxyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProxyService);
    return ProxyService;
}());



/***/ }),

/***/ "./src/app/modules/structural/proxy/services/proxy/proxy.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/structural/proxy/services/proxy/proxy.ts ***!
  \******************************************************************/
/*! exports provided: proxyE, RealSubject, Proxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyE", function() { return proxyE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealSubject", function() { return RealSubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proxy", function() { return Proxy; });
function proxyE() {
    var rs = new RealSubject();
    var proxy = new Proxy(rs);
    // proxy.request('some request');
}
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function (url) {
        console.log('RealSubject');
    };
    return RealSubject;
}());

var Proxy = /** @class */ (function () {
    function Proxy(rs) {
        this.rs = rs;
    }
    Proxy.prototype.request = function (url) {
        this.rs.request(url);
    };
    return Proxy;
}());



/***/ })

}]);
//# sourceMappingURL=modules-structural-proxy-proxy-module.js.map