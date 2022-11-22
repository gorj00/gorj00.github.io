function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/"./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }
    webpackEmptyAsyncContext.keys = function () {
      return [];
    };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-header\n  (languagePicked)=\"useLanguage($event)\">\n</app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/form/form.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/form/form.component.html ***!
    \*********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentHomeFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card>\n  <form class=\"pad\" (ngSubmit)=\"onInsertIntoTable()\" #form=\"ngForm\">\n\n    <h1 class=\"mat-display-2\">{{ 'form.title' | translate }}</h1>\n    <h2 class=\"mat-headline\">\n      {{ 'form.subtitle' | translate }}\n    </h2>\n\n    <mat-form-field>\n      <input matInput\n        [placeholder]=\"'form.input-number' | translate\"\n        type=\"number\"\n        class=\"example-right-align\"\n        name=\"amount\"\n        [(ngModel)]=\"amount\"\n        required>\n      <mat-error>\n        {{ 'form.input-error' | translate }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <mat-label>{{ 'form.select-currency' | translate }}</mat-label>\n      <mat-select [(ngModel)]=\"select\" name=\"select\" required>\n        <mat-option value=\"eur\">EUR</mat-option>\n        <mat-option value=\"czk\">CZK</mat-option>\n        <mat-option value=\"gbp\">GBP</mat-option>\n      </mat-select>\n      <mat-error>\n        {{ 'form.select-error' | translate }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"dollar-conversion-field\">\n      <label>\n        {{ 'form.hint' | translate }} <span class=\"mat-body-strong\">USD</span> <span\n          class=\"converted-amount\">{{ showConvertedAmount() }}</span>\n      </label>\n    </div>\n    <div class=\"submit-field\">\n      <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">\n        {{ 'form.submit' | translate }}\n      </button>\n    </div>\n\n  </form>\n</mat-card>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/home.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/home.component.html ***!
    \****************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<app-form></app-form>\n<mat-divider></mat-divider>\n<app-table></app-table>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/table/table.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/table/table.component.html ***!
    \***********************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentHomeTableTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<div class=\"pad\">\n  <table mat-table [dataSource]=\"tableData\" class=\"mat-elevation-z8\">\n\n    <!-- Amount Column -->\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef>\n        {{ 'table.entered' | translate }}\n      </th>\n      <td mat-cell *matCellDef=\"let row\">{{ row.amount }}</td>\n      <td mat-footer-cell *matFooterCellDef>\n        <span class=\"mat-body-strong\">\n          {{ 'table.total' | translate }}:\n        </span>\n      </td>\n    </ng-container>\n\n    <!-- USD Amount Column -->\n    <ng-container matColumnDef=\"amount-in-usd\">\n      <th mat-header-cell *matHeaderCellDef>\n        {{ 'table.converted' | translate }}\n      </th>\n      <td mat-cell *matCellDef=\"let row\"> {{ row.amountInUsd }} </td>\n      <td mat-footer-cell *matFooterCellDef>\n        <span class=\"mat-body-strong\">{{ displayTableTotal }} USD</span>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n\n  </table>\n</div>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/content/information/information.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/information/information.component.html ***!
    \******************************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContentInformationInformationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-card>\n  <div class=\"pad\">\n    <h1 class=\"mat-display-2\">\n      {{ 'information.title' | translate }}\n    </h1>\n\n    <section class=\"info-section\"\n      *ngFor=\"let section of 'information.iterate-info' | translate\">\n\n      <h2 class=\"mat-headline\">\n        {{ section.title }}:\n      </h2>\n\n      <mat-list role=\"list\" *ngFor=\"let content of section.items\">\n        <mat-list-item role=\"listitem\">\n          {{ content.item }}\n        </mat-list-item>\n      </mat-list>\n\n    </section>\n\n  </div>\n</mat-card>\n";

    /***/
  },

  /***/"./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/
  /*! exports provided: default */
  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\">\n  <span>\n    <a href=\"/\">\n      {{ 'header.site-title' | translate }}\n    </a>\n  </span>\n  <ul class=\"navigation\">\n    <li>\n      <a\n        mat-button\n        routerLink=\"/\">\n        {{ 'header.navlink-home' | translate }}\n      </a>\n    </li>\n    <li>\n      <a\n        mat-button\n        routerLink=\"/information\">\n        {{ 'header.navlink-info' | translate }}\n      </a>\n    </li>\n  </ul>\n  <span class=\"spacer\"></span>\n  <ul class=\"lang-choice\">\n    <li>\n      <button\n        mat-button\n        (click)=\"onLanguagePick('eng')\">\n          ENG\n    </button>\n    </li>\n    <li>\n      <button\n        mat-button\n        (click)=\"onLanguagePick('cze')\">\n          CZE\n    </button>\n    </li>\n  </ul>\n</mat-toolbar>\n";

    /***/
  },

  /***/"./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/
  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }
        return t;
      };
      return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }
    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }
    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }
    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
        f,
        y,
        t,
        g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;
      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }
    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }
    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }
    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }
      return ar;
    }
    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }
      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }
      return r;
    }
    ;
    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;
      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }
    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;
      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }
    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }
    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }
    ;
    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }
    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }
      return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }
      privateMap.set(receiver, value);
      return value;
    }

    /***/
  },

  /***/"./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/
  /*! exports provided: default */
  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "main {\r\n  width: 75%;\r\n  margin: 1rem auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcbiJdfQ== */";

    /***/
  },

  /***/"./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(translate) {
        _classCallCheck(this, AppComponent);
        this.translate = translate;
        translate.setDefaultLang('cze');
      }
      _createClass(AppComponent, [{
        key: "useLanguage",
        value: function useLanguage(language) {
          this.translate.use(language);
        }
      }]);
      return AppComponent;
    }();
    AppComponent.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./app.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./app.component.css */"./src/app/app.component.css"))["default"]]
    })], AppComponent);

    /***/
  },

  /***/"./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule, HttpLoaderFactory */
  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */"./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @angular/material/toolbar */"./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */
    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/material/button */"./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */
    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! @angular/material/form-field */"./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */
    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! @angular/material/card */"./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */
    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! @angular/material/input */"./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */
    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! @angular/material/select */"./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */
    var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! @angular/material/table */"./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */
    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! @angular/material/divider */"./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */
    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! @angular/material/list */"./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */
    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! @ngx-translate/core */"./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */
    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! @ngx-translate/http-loader */"./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./app.component */"./src/app/app.component.ts");
    /* harmony import */
    var _content_home_form_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./content/home/form/form.component */"./src/app/content/home/form/form.component.ts");
    /* harmony import */
    var _content_home_table_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./content/home/table/table.component */"./src/app/content/home/table/table.component.ts");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__( /*! @angular/platform-browser/animations */"./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__( /*! ./header/header.component */"./src/app/header/header.component.ts");
    /* harmony import */
    var _content_home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__( /*! ./content/home/home.component */"./src/app/content/home/home.component.ts");
    /* harmony import */
    var _content_information_information_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__( /*! ./content/information/information.component */"./src/app/content/information/information.component.ts");
    var appRoutes = [{
      path: '',
      component: _content_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"]
    }, {
      path: 'information',
      component: _content_information_information_component__WEBPACK_IMPORTED_MODULE_23__["InformationComponent"]
    }];
    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _content_home_form_form_component__WEBPACK_IMPORTED_MODULE_18__["FormComponent"], _content_home_table_table_component__WEBPACK_IMPORTED_MODULE_19__["TableComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"], _content_home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"], _content_information_information_component__WEBPACK_IMPORTED_MODULE_23__["InformationComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }
      }), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
    })], AppModule);

    // required for AOT compilation
    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_16__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    /***/
  },

  /***/"./src/app/content/home/form/form.component.css":
  /*!******************************************************!*\
    !*** ./src/app/content/home/form/form.component.css ***!
    \******************************************************/
  /*! exports provided: default */
  /***/
  function srcAppContentHomeFormFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "mat-card .pad {\r\n  padding: 2rem;\r\n}\r\n\r\nmat-form-field {\r\n  margin: 0 2rem 0 0;\r\n}\r\n\r\n.submit-field {\r\n  display: block;\r\n  margin-top: 1.5rem;\r\n}\r\n\r\n.submit-field button {\r\n  font-size: 15px;\r\n  margin: 0 0 0.25rem 0;\r\n}\r\n\r\n.mat-display-2 {\r\n  margin: 0 0 20px 0;\r\n}\r\n\r\n.mat-headline {\r\n  margin: 0 0 50px 0;\r\n}\r\n\r\n.dollar-conversion-field {\r\n  display: inline-block;\r\n  color: #a0a0a0;\r\n}\r\n\r\n.mat-body-strong {\r\n  color: #636363;\r\n}\r\n\r\n.converted-amount {\r\n  color: #3f51b5;\r\n  font-size: 22px;\r\n  margin: 0 0 0 8px;\r\n}\r\n\r\nh1 {\r\n  color: #3f51b5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ob21lL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2hvbWUvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCAucGFkIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAwIDJyZW0gMCAwO1xyXG59XHJcblxyXG4uc3VibWl0LWZpZWxkIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5zdWJtaXQtZmllbGQgYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luOiAwIDAgMC4yNXJlbSAwO1xyXG59XHJcblxyXG4ubWF0LWRpc3BsYXktMiB7XHJcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xyXG59XHJcblxyXG4ubWF0LWhlYWRsaW5lIHtcclxuICBtYXJnaW46IDAgMCA1MHB4IDA7XHJcbn1cclxuXHJcbi5kb2xsYXItY29udmVyc2lvbi1maWVsZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjYTBhMGEwO1xyXG59XHJcblxyXG4ubWF0LWJvZHktc3Ryb25nIHtcclxuICBjb2xvcjogIzYzNjM2MztcclxufVxyXG5cclxuLmNvbnZlcnRlZC1hbW91bnQge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW46IDAgMCAwIDhweDtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcbiJdfQ== */";

    /***/
  },

  /***/"./src/app/content/home/form/form.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/content/home/form/form.component.ts ***!
    \*****************************************************/
  /*! exports provided: FormComponent */
  /***/
  function srcAppContentHomeFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_exchange_rate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../services/exchange-rate.service */"./src/app/services/exchange-rate.service.ts");
    /* harmony import */
    var _services_table_row_insertion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../../../services/table-row-insertion.service */"./src/app/services/table-row-insertion.service.ts");
    var FormComponent = /*#__PURE__*/function () {
      function FormComponent(exchangeRateService, tableRowInsertionService) {
        _classCallCheck(this, FormComponent);
        this.exchangeRateService = exchangeRateService;
        this.tableRowInsertionService = tableRowInsertionService;
      }
      // Makes 3 215 211 from 3215211
      _createClass(FormComponent, [{
        key: "makeSpacesInNumber",
        value: function makeSpacesInNumber(num) {
          if (this.amount) {
            var parts = num.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
            return parts.join('.');
          }
        }
      }, {
        key: "showConvertedAmount",
        value: function showConvertedAmount() {
          if (this.amount && this.select) {
            var currencyPerDollar = this.rates[this.select];
            var convertedAmount = this.amount / currencyPerDollar;
            var editedConvertedAmount = +convertedAmount.toFixed(2);
            this.convertedAmount = editedConvertedAmount;
            return '$ ' + this.makeSpacesInNumber(editedConvertedAmount);
          } else {
            return '...';
          }
        }
      }, {
        key: "onInsertIntoTable",
        value: function onInsertIntoTable() {
          var tableRow;
          // Increment total sum of the table
          this.tableRowInsertionService.tableTotal += this.convertedAmount;
          // Set entered amount (CZK | EUR | GBP) and converted amount (USD)
          var enteredAmountSelCode = this.makeSpacesInNumber(this.amount) + ' ' + this.select;
          var convertedAmountUSDCode = this.makeSpacesInNumber(this.convertedAmount) + ' USD';
          // Store amounts above into a new table row object
          tableRow = {
            amount: enteredAmountSelCode,
            amountInUsd: convertedAmountUSDCode
          };
          // Insert new row to the table
          this.tableRowInsertionService.addTableRow(tableRow);
          // Inform table the total was incremented
          this.tableRowInsertionService.incrementTableTotal(this.convertedAmount);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;
          // Fetch exchange rates
          this.exchangeRateService.getRates().subscribe(function (rates) {
            _this.rates = rates;
          }, function (error) {
            return console.log(error);
          }, function () {
            return console.log('getRates() completed!');
          });
        }
      }]);
      return FormComponent;
    }();
    FormComponent.ctorParameters = function () {
      return [{
        type: _services_exchange_rate_service__WEBPACK_IMPORTED_MODULE_2__["ExchangeRateService"]
      }, {
        type: _services_table_row_insertion_service__WEBPACK_IMPORTED_MODULE_3__["TableRowInsertionService"]
      }];
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./form.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/form/form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./form.component.css */"./src/app/content/home/form/form.component.css"))["default"]]
    })], FormComponent);

    /***/
  },

  /***/"./src/app/content/home/home.component.css":
  /*!*************************************************!*\
    !*** ./src/app/content/home/home.component.css ***!
    \*************************************************/
  /*! exports provided: default */
  /***/
  function srcAppContentHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "mat-divider {\r\n  margin: 10px 0;\r\n  width: 100%;\r\n  opacity: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29udGVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaXZpZGVyIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbiJdfQ== */";

    /***/
  },

  /***/"./src/app/content/home/home.component.ts":
  /*!************************************************!*\
    !*** ./src/app/content/home/home.component.ts ***!
    \************************************************/
  /*! exports provided: HomeComponent */
  /***/
  function srcAppContentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }
      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HomeComponent;
    }();
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./home.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./home.component.css */"./src/app/content/home/home.component.css"))["default"]]
    })], HomeComponent);

    /***/
  },

  /***/"./src/app/content/home/table/table.component.css":
  /*!********************************************************!*\
    !*** ./src/app/content/home/table/table.component.css ***!
    \********************************************************/
  /*! exports provided: default */
  /***/
  function srcAppContentHomeTableTableComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "table {\r\n  width: 100%;\r\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),\r\n              0 2px 2px 0 rgba(0,0,0,.14),\r\n              0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n\r\ntr.mat-footer-row:nth-child(odd),\r\ntr.mat-row:nth-child(odd) {\r\n  background: #fbfbfb;\r\n}\r\n\r\nmat-list-item {\r\n  width: 60%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9ob21lL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1g7O3lDQUV1QztBQUN6Qzs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2hvbWUvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsMCwwLC4xNCksXHJcbiAgICAgICAgICAgICAgMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcblxyXG50ci5tYXQtZm9vdGVyLXJvdzpudGgtY2hpbGQob2RkKSxcclxudHIubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxufVxyXG5cclxubWF0LWxpc3QtaXRlbSB7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG4iXX0= */";

    /***/
  },

  /***/"./src/app/content/home/table/table.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/content/home/table/table.component.ts ***!
    \*******************************************************/
  /*! exports provided: TableComponent */
  /***/
  function srcAppContentHomeTableTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
      return TableComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _services_table_row_insertion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../services/table-row-insertion.service */"./src/app/services/table-row-insertion.service.ts");
    var TableComponent = /*#__PURE__*/function () {
      function TableComponent(tableRowInsertionService) {
        _classCallCheck(this, TableComponent);
        this.tableRowInsertionService = tableRowInsertionService;
        this.tableData = [];
        this.displayedColumns = ['amount', 'amount-in-usd'];
      }
      _createClass(TableComponent, [{
        key: "makeSpacesTableToal",
        value: function makeSpacesTableToal(tableTotal) {
          var parts = tableTotal.toString().split('.');
          parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          return parts.join('.');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;
          // If any amounts inserted, display them
          this.tableData = this.tableRowInsertionService.getTableRows();
          // Listen and wait for newly inserted amounts
          this.tableRowsSubscription = this.tableRowInsertionService.getTableUpdateListener().subscribe(function (tableRows) {
            _this2.tableData = tableRows;
          });
          // If any amounts inserted, display total
          this.tableTotal = this.tableRowInsertionService.getTableTotal();
          this.displayTableTotal = this.makeSpacesTableToal(Number(this.tableTotal.toFixed(2)));
          // Listen and wait for newly inserted amounts to update total
          this.tableTotalSubscription = this.tableRowInsertionService.getTableTotalUpdateListener().subscribe(function (tableTotal) {
            _this2.tableTotal = tableTotal;
            _this2.displayTableTotal = _this2.makeSpacesTableToal(Number(_this2.tableTotal.toFixed(2)));
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Preventing memory leaks
          this.tableRowsSubscription.unsubscribe();
          this.tableTotalSubscription.unsubscribe();
        }
      }]);
      return TableComponent;
    }();
    TableComponent.ctorParameters = function () {
      return [{
        type: _services_table_row_insertion_service__WEBPACK_IMPORTED_MODULE_2__["TableRowInsertionService"]
      }];
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./table.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/content/home/table/table.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./table.component.css */"./src/app/content/home/table/table.component.css"))["default"]]
    })], TableComponent);

    /***/
  },

  /***/"./src/app/content/information/information.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/content/information/information.component.css ***!
    \***************************************************************/
  /*! exports provided: default */
  /***/
  function srcAppContentInformationInformationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "mat-card .pad {\r\n  padding: 2rem;\r\n}\r\n\r\n.mat-display-2 {\r\n  margin: 0;\r\n}\r\n\r\nmat-list-item.mat-list-item {\r\n  height: 35px;\r\n}\r\n\r\nmat-list-item a {\r\n  color: #3f51b5;\r\n  font-size: inherit;\r\n  padding-left: 4px;\r\n}\r\n\r\n.mat-headline {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.info-section {\r\n  margin-top: 65px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVudC9pbmZvcm1hdGlvbi9pbmZvcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb250ZW50L2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCAucGFkIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4ubWF0LWRpc3BsYXktMiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYXQtbGlzdC1pdGVtLm1hdC1saXN0LWl0ZW0ge1xyXG4gIGhlaWdodDogMzVweDtcclxufVxyXG5cclxubWF0LWxpc3QtaXRlbSBhIHtcclxuICBjb2xvcjogIzNmNTFiNTtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGxpbmUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5pbmZvLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDY1cHg7XHJcbn1cclxuXHJcbiJdfQ== */";

    /***/
  },

  /***/"./src/app/content/information/information.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/content/information/information.component.ts ***!
    \**************************************************************/
  /*! exports provided: InformationComponent */
  /***/
  function srcAppContentInformationInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "InformationComponent", function () {
      return InformationComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var InformationComponent = /*#__PURE__*/function () {
      function InformationComponent() {
        _classCallCheck(this, InformationComponent);
      }
      _createClass(InformationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return InformationComponent;
    }();
    InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-information',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./information.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/content/information/information.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./information.component.css */"./src/app/content/information/information.component.css"))["default"]]
    })], InformationComponent);

    /***/
  },

  /***/"./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/
  /*! exports provided: default */
  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */
    __webpack_exports__["default"] = "ul {\r\n  list-style: none;\r\n  padding: 0 0 0 2rem;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  display: inline-block;\r\n}\r\n\r\nul.navigation li,\r\nul.lang-choice li {\r\n  padding-right: 0.8rem;\r\n}\r\n\r\nul.lang-choice li button,\r\nul.navigation li a {\r\n  background-color: #30419e;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: #ffffff;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDAgMCAwIDJyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG51bC5uYXZpZ2F0aW9uIGxpLFxyXG51bC5sYW5nLWNob2ljZSBsaSB7XHJcbiAgcGFkZGluZy1yaWdodDogMC44cmVtO1xyXG59XHJcblxyXG51bC5sYW5nLWNob2ljZSBsaSBidXR0b24sXHJcbnVsLm5hdmlnYXRpb24gbGkgYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNDE5ZTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4iXX0= */";

    /***/
  },

  /***/"./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/
  /*! exports provided: HeaderComponent */
  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
        this.languagePicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      _createClass(HeaderComponent, [{
        key: "onLanguagePick",
        value: function onLanguagePick(lang) {
          this.languagePicked.emit(lang);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);
      return HeaderComponent;
    }();
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "languagePicked", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! raw-loader!./header.component.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__( /*! ./header.component.css */"./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);

    /***/
  },

  /***/"./src/app/services/exchange-rate.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/exchange-rate.service.ts ***!
    \***************************************************/
  /*! exports provided: ExchangeRateService */
  /***/
  function srcAppServicesExchangeRateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ExchangeRateService", function () {
      return ExchangeRateService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */"./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! rxjs/operators */"./node_modules/rxjs/_esm2015/operators/index.js");
    var ExchangeRateService = /*#__PURE__*/function () {
      function ExchangeRateService(http) {
        _classCallCheck(this, ExchangeRateService);
        this.http = http;
        this.rates = [];
        this.baseURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/';
        this.baseCurrency = 'usd.json';
        this.exchangeRatesURL = this.baseURL + this.baseCurrency;
      }
      _createClass(ExchangeRateService, [{
        key: "getRates",
        value: function getRates() {
          return this.http.get(this.exchangeRatesURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ratesData) {
            return ratesData.usd;
          }));
        }
      }]);
      return ExchangeRateService;
    }();
    ExchangeRateService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };
    ExchangeRateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ExchangeRateService);

    /***/
  },

  /***/"./src/app/services/table-row-insertion.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/table-row-insertion.service.ts ***!
    \*********************************************************/
  /*! exports provided: TableRowInsertionService */
  /***/
  function srcAppServicesTableRowInsertionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "TableRowInsertionService", function () {
      return TableRowInsertionService;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! rxjs */"./node_modules/rxjs/_esm2015/index.js");
    var TableRowInsertionService = /*#__PURE__*/function () {
      function TableRowInsertionService() {
        _classCallCheck(this, TableRowInsertionService);
        this.tableRows = [];
        this.tableRowsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.tableTotal = 0;
        this.tableTotalUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      _createClass(TableRowInsertionService, [{
        key: "getTableUpdateListener",
        value: function getTableUpdateListener() {
          return this.tableRowsUpdated.asObservable();
        }
      }, {
        key: "addTableRow",
        value: function addTableRow(tableRow) {
          this.tableRows.push(tableRow);
          this.tableRowsUpdated.next(_toConsumableArray(this.tableRows));
        }
      }, {
        key: "getTableRows",
        value: function getTableRows() {
          return _toConsumableArray(this.tableRows);
        }
      }, {
        key: "getTableTotalUpdateListener",
        value: function getTableTotalUpdateListener() {
          return this.tableTotalUpdated.asObservable();
        }
      }, {
        key: "incrementTableTotal",
        value: function incrementTableTotal(newAmount) {
          this.tableTotalUpdated.next(this.tableTotal);
        }
      }, {
        key: "getTableTotal",
        value: function getTableTotal() {
          return this.tableTotal;
        }
      }]);
      return TableRowInsertionService;
    }();
    TableRowInsertionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TableRowInsertionService);

    /***/
  },

  /***/"./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/"./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"./node_modules/tslib/tslib.es6.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/platform-browser-dynamic */"./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./app/app.module */"./src/app/app.module.ts");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./environments/environment */"./src/environments/environment.ts");
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });

    /***/
  },

  /***/0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__( /*! D:\WORKSPACE\Angular-USDconverter\src\main.ts */"./src/main.ts");

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map