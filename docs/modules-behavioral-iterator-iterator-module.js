(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-behavioral-iterator-iterator-module"],{

/***/ "./src/app/modules/behavioral/iterator/components/iterator.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/behavioral/iterator/components/iterator.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/behavioral/iterator/components/iterator.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/behavioral/iterator/components/iterator.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pattern [patternCompData]=\"patternCompData\"></app-pattern>\n"

/***/ }),

/***/ "./src/app/modules/behavioral/iterator/components/iterator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/behavioral/iterator/components/iterator.component.ts ***!
  \******************************************************************************/
/*! exports provided: IteratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteratorComponent", function() { return IteratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../elements */ "./src/app/elements.ts");
/* harmony import */ var _LINKS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../LINKS */ "./src/app/LINKS.ts");
/* harmony import */ var _services_iterator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/iterator.service */ "./src/app/modules/behavioral/iterator/services/iterator.service.ts");
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







var IteratorComponent = /** @class */ (function () {
    function IteratorComponent(iterator, http, interpreter) {
        var _this = this;
        this.iterator = iterator;
        this.http = http;
        this.interpreter = interpreter;
        this.patternCompData = {
            gitLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.iterator.gitApiLink,
            wikiLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.iterator.wikiLink,
            sampleLink: _LINKS__WEBPACK_IMPORTED_MODULE_2__["LINKS"].behavioral.iterator.sampleLink,
            linkName: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].linkToSampleName,
            sample: _elements__WEBPACK_IMPORTED_MODULE_1__["ELEMENTS"].sampleTitle
        };
        this.iterator.iterator();
        var content$ = this.http.getData(this.patternCompData.gitLink).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp ? _this.interpreter.interpreter(atob(resp.content)) : null;
        }));
        this.patternCompData = Object.assign(this.patternCompData, { content$: content$ });
    }
    IteratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iterator',
            template: __webpack_require__(/*! ./iterator.component.html */ "./src/app/modules/behavioral/iterator/components/iterator.component.html"),
            styles: [__webpack_require__(/*! ./iterator.component.css */ "./src/app/modules/behavioral/iterator/components/iterator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_iterator_service__WEBPACK_IMPORTED_MODULE_3__["IteratorService"], _core_services_http_get_git_content_service__WEBPACK_IMPORTED_MODULE_5__["GetGitContentService"], _interpreter_services_interpreter_service__WEBPACK_IMPORTED_MODULE_6__["InterpreterService"]])
    ], IteratorComponent);
    return IteratorComponent;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/iterator/iterator-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/behavioral/iterator/iterator-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: IteratorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteratorRoutingModule", function() { return IteratorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_iterator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/iterator.component */ "./src/app/modules/behavioral/iterator/components/iterator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _components_iterator_component__WEBPACK_IMPORTED_MODULE_2__["IteratorComponent"] }
];
var IteratorRoutingModule = /** @class */ (function () {
    function IteratorRoutingModule() {
    }
    IteratorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], IteratorRoutingModule);
    return IteratorRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/iterator/iterator.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/behavioral/iterator/iterator.module.ts ***!
  \****************************************************************/
/*! exports provided: IteratorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteratorModule", function() { return IteratorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_iterator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/iterator.component */ "./src/app/modules/behavioral/iterator/components/iterator.component.ts");
/* harmony import */ var _iterator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iterator-routing.module */ "./src/app/modules/behavioral/iterator/iterator-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var IteratorModule = /** @class */ (function () {
    function IteratorModule() {
    }
    IteratorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _iterator_routing_module__WEBPACK_IMPORTED_MODULE_3__["IteratorRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [_components_iterator_component__WEBPACK_IMPORTED_MODULE_2__["IteratorComponent"]]
        })
    ], IteratorModule);
    return IteratorModule;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/iterator/services/iterator.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/behavioral/iterator/services/iterator.service.ts ***!
  \**************************************************************************/
/*! exports provided: IteratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IteratorService", function() { return IteratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _iterator_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterator/iterator */ "./src/app/modules/behavioral/iterator/services/iterator/iterator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IteratorService = /** @class */ (function () {
    function IteratorService() {
    }
    IteratorService.prototype.iterator = function () {
        Object(_iterator_iterator__WEBPACK_IMPORTED_MODULE_1__["iterator"])();
    };
    IteratorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], IteratorService);
    return IteratorService;
}());



/***/ }),

/***/ "./src/app/modules/behavioral/iterator/services/iterator/iterator.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/behavioral/iterator/services/iterator/iterator.ts ***!
  \***************************************************************************/
/*! exports provided: iterator, Iterator, KeyIterator, ValIterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterator", function() { return Iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyIterator", function() { return KeyIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValIterator", function() { return ValIterator; });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map */ "./src/app/modules/behavioral/iterator/services/iterator/map.ts");
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

function iterator() {
    var map = new _map__WEBPACK_IMPORTED_MODULE_0__["Map"]();
    map.set('first', 1);
    map.set('second', 2);
    map.set('third', 3);
    var keyIterator = map.createKeyIterator();
    for (var i = keyIterator.first(); !keyIterator.isDone(); i = keyIterator.next()) {
        // console.log(i);
    }
    var valIterator = map.createValIterator();
    for (var i = valIterator.first(); !valIterator.isDone(); i = valIterator.next()) {
        // console.log(i);
    }
}
var Iterator = /** @class */ (function () {
    function Iterator(iterable) {
        this.iterable = iterable;
    }
    Iterator.prototype.first = function () {
        return this.getItem(0);
    };
    Iterator.prototype.currentItem = function () {
        return this.getItem(this.current);
    };
    Iterator.prototype.next = function () {
        return this.current++ < this.iterable.size - 1 ? this.getItem(this.current) : null;
    };
    Iterator.prototype.isDone = function () {
        if (this.current < this.iterable.size) {
            return false;
        }
        else {
            this.current = 0;
            return true;
        }
    };
    return Iterator;
}());

var KeyIterator = /** @class */ (function (_super) {
    __extends(KeyIterator, _super);
    function KeyIterator(iterable) {
        var _this = _super.call(this, iterable) || this;
        _this.iterable = iterable;
        _this.current = 0;
        return _this;
    }
    KeyIterator.prototype.getItem = function (ind) {
        return this.iterable.keyVault[ind];
    };
    return KeyIterator;
}(Iterator));

var ValIterator = /** @class */ (function (_super) {
    __extends(ValIterator, _super);
    function ValIterator(iterable) {
        var _this = _super.call(this, iterable) || this;
        _this.iterable = iterable;
        _this.current = 0;
        return _this;
    }
    ValIterator.prototype.getItem = function (ind) {
        return this.iterable.valueVault[ind];
    };
    return ValIterator;
}(Iterator));



/***/ }),

/***/ "./src/app/modules/behavioral/iterator/services/iterator/map.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/behavioral/iterator/services/iterator/map.ts ***!
  \**********************************************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iterator */ "./src/app/modules/behavioral/iterator/services/iterator/iterator.ts");
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

var Collection = /** @class */ (function () {
    function Collection() {
        this.keyVault = [];
        this.valueVault = [];
    }
    return Collection;
}());
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        return _super.call(this) || this;
    }
    Map.prototype.getInd = function (key) {
        return this.keyVault.indexOf(key);
    };
    Map.prototype.createKeyIterator = function () {
        return new _iterator__WEBPACK_IMPORTED_MODULE_0__["KeyIterator"](this);
    };
    Map.prototype.createValIterator = function () {
        return new _iterator__WEBPACK_IMPORTED_MODULE_0__["ValIterator"](this);
    };
    Object.defineProperty(Map.prototype, "size", {
        get: function () {
            return this.keyVault.length;
        },
        enumerable: true,
        configurable: true
    });
    Map.prototype.has = function (key) {
        return this.keyVault.includes(key);
    };
    Map.prototype.set = function (key, val) {
        var res;
        if (!this.has(key)) {
            this.keyVault.push(key);
            this.valueVault.push(val);
            res = this.get(key) === val;
        }
        else {
            res = new Error('Key has been existing!');
        }
        return res;
    };
    Map.prototype.get = function (key) {
        var ind = this.getInd(key);
        return ind !== -1 ? this.valueVault[ind] : false;
    };
    Map.prototype.delete = function (key) {
        var ind = this.getInd(key);
        if (ind !== -1) {
            this.keyVault.splice(ind, 1);
            this.valueVault.splice(ind, 1);
        }
        return this.has(key);
    };
    return Map;
}(Collection));



/***/ })

}]);
//# sourceMappingURL=modules-behavioral-iterator-iterator-module.js.map