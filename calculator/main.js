(self["webpackChunkcalculator"] = self["webpackChunkcalculator"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot([]), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 36674);


class AppComponent {
    constructor() {
        this.title = 'calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["calc-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "calc-layout");
    } }, dependencies: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/material.module */ 48649);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ 36674);
/* harmony import */ var _layout_content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/content/content.component */ 87998);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/header/header.component */ 17876);
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/footer/footer.component */ 61954);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 20129);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _containers_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/calculator/calculator.component */ 37421);
/* harmony import */ var _containers_calculator_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/calculator/buttons/buttons.component */ 28767);
/* harmony import */ var _containers_calculator_expression_field_expression_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/calculator/expression-field/expression-field.component */ 90061);
/* harmony import */ var _containers_calculator_history_field_history_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/calculator/history-field/history-field.component */ 45207);
/* harmony import */ var _store_calculator_calculator_feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/calculator/calculator.feature */ 4743);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store-devtools */ 55242);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _modules_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forRoot({}),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forFeature(_store_calculator_calculator_feature__WEBPACK_IMPORTED_MODULE_12__.calculatorFeature),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forRoot([]),
        _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__.environment.production })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent,
        _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.SidebarComponent,
        _layout_content_content_component__WEBPACK_IMPORTED_MODULE_4__.ContentComponent,
        _containers_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_8__.CalculatorComponent,
        _containers_calculator_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_9__.ButtonsComponent,
        _containers_calculator_expression_field_expression_field_component__WEBPACK_IMPORTED_MODULE_10__.ExpressionFieldComponent,
        _containers_calculator_history_field_history_field_component__WEBPACK_IMPORTED_MODULE_11__.HistoryFieldComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule,
        _modules_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreRootModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 28767:
/*!********************************************************************!*\
  !*** ./src/app/containers/calculator/buttons/buttons.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonsComponent": () => (/* binding */ ButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/calculator.models */ 66207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);




const _c0 = function (a0) { return [a0, "mb-3"]; };
function ButtonsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonsComponent_div_1_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const calcButton_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onButtonClick(calcButton_r1.label, calcButton_r1.type, calcButton_r1 == null ? null : calcButton_r1.action)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const calcButton_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, calcButton_r1.specialCol ? "col-" + calcButton_r1.specialCol : "col-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "btn btn-" + calcButton_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-test", "calc-button-" + calcButton_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", calcButton_r1.label, " ");
} }
class ButtonsComponent {
    constructor() {
        this.operators = {};
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    /**
     * Forms multiple numbered calc buttons objects in a provided range
     *
     * @param {number} rangeStart Range start, inclusive
     * @param {number} rangeEnd   Range end, inclusive
     * @returns {ICalcButton[]}   Array of calc button objects
     */
    formNumberButtonsObjects(rangeStart, rangeEnd) {
        if (rangeStart < rangeEnd) {
            length = rangeEnd + 1 - rangeStart;
            const digitsArr = Array.from({ length }, (v, k) => k + rangeStart);
            const formedObjects = digitsArr.map((digit) => ({
                color: 'primary',
                type: 'number',
                label: digit.toString(),
            }));
            return formedObjects;
        }
        else if (rangeEnd - rangeStart === 0)
            return this.handleZeroRange(rangeStart);
        return [];
    }
    /**
     * Forms single number calc button object for a provided number
     *
     * @param {number} rangeStart Number for which to create calc button object
     * @returns {ICalcButton[]}   Array with a single calc button object
     */
    handleZeroRange(rangeStart) {
        return [
            {
                color: 'primary',
                type: 'number',
                label: rangeStart.toString(),
            },
        ];
    }
    /**
     * Event to be emitted on a calc button click, informing the parent
     * about the symbol, type, and optionally an action
     *
     * @param {string} symbol         Calc button label
     * @param {string} type           Type (function | operator | number)
     * @param {ECalsActions} [action] Optional action
     */
    onButtonClick(symbol, type, action) {
        this.inputChange.emit({ symbol, type, action });
    }
    /**
     * Populates calculator's buttons field with predefined buttons
     */
    populateButtonsOnInit() {
        this.calcButtons = [
            {
                color: 'info',
                type: 'function',
                label: 'AC',
                action: _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.ECalsActions.ALL_CLEAR,
            },
            {
                color: 'info',
                type: 'function',
                label: '+/-',
                specialCol: '9',
                action: _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.ECalsActions.CHANGE_OPERATOR,
            },
            ...this.formNumberButtonsObjects(7, 9),
            {
                color: 'info',
                type: 'operator',
                label: this.operators.divide.label,
                operator: this.operators.divide.sign,
            },
            ...this.formNumberButtonsObjects(4, 6),
            {
                color: 'info',
                type: 'operator',
                label: this.operators?.multiply?.label,
                operator: this.operators.multiply.sign,
            },
            ...this.formNumberButtonsObjects(1, 3),
            {
                color: 'info',
                type: 'operator',
                label: this.operators?.minus?.label,
                operator: this.operators.minus.sign,
            },
            ...this.formNumberButtonsObjects(0, 0),
            {
                color: 'info',
                //  handled as number
                type: 'number',
                label: '.',
            },
            {
                color: 'info',
                type: 'function',
                label: '=',
                action: _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.ECalsActions.EQUALS,
            },
            {
                color: 'info',
                type: 'operator',
                label: this.operators.plus.label,
                operator: this.operators.plus.sign,
            },
        ];
    }
    ngOnInit() {
        // Assigned in ngOnInit so we have operators @Input ready
        this.populateButtonsOnInit();
    }
}
ButtonsComponent.ɵfac = function ButtonsComponent_Factory(t) { return new (t || ButtonsComponent)(); };
ButtonsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ButtonsComponent, selectors: [["calc-buttons"]], inputs: { operators: "operators" }, outputs: { inputChange: "inputChange" }, decls: 2, vars: 2, consts: [[1, "row", "mt-3"], [3, "ngClass", 4, "ngFor", "ngForOf", "ngForAs"], [3, "ngClass"], ["type", "button", 3, "ngClass", "click"]], template: function ButtonsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ButtonsComponent_div_1_Template, 3, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.calcButtons)("ngForAs", ctx.index);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["button[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 60px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRiIsImZpbGUiOiJidXR0b25zLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgaGVpZ2h0OiA1NXB4O1xuICB3aWR0aDogNjBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 37421:
/*!***************************************************************!*\
  !*** ./src/app/containers/calculator/calculator.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorComponent": () => (/* binding */ CalculatorComponent)
/* harmony export */ });
/* harmony import */ var _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/calculator.models */ 66207);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mathjs */ 80721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _store_calculator_calculator_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/calculator/calculator.facade */ 83009);
/* harmony import */ var _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/calculator.service */ 4975);
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttons.component */ 28767);
/* harmony import */ var _expression_field_expression_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expression-field/expression-field.component */ 90061);
/* harmony import */ var _history_field_history_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-field/history-field.component */ 45207);










class CalculatorComponent {
    constructor(calculatorFacade, calculatorService) {
        this.calculatorFacade = calculatorFacade;
        this.calculatorService = calculatorService;
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
        this.data = { history: [], errors: [], result: null };
        this.expression = '';
        this.invalidAction = false;
    }
    /**
     ************************ STORE COMMUNICATION ***********************
     */
    /**
     * Stores a given expression result into the store
     *
     * @param {string} expression Math expression user input
     * @param {number} result     Evaluation of the expression
     */
    saveResult(expression, result) {
        this.calculatorFacade.saveResult({
            datestamp: moment__WEBPACK_IMPORTED_MODULE_1__().valueOf(),
            error: null,
            expression: expression,
            evaluation: result.toString()
        });
    }
    /**
     * Stores an error log (caused by an invalid action) to the store
     *
     * @param {any}    e Any error or error message
     * @param {string} expression Math expression user input
     */
    logError(e, expression) {
        this.calculatorFacade.logErrorsEntry({
            datestamp: moment__WEBPACK_IMPORTED_MODULE_1__().valueOf(),
            error: e,
            expression: expression,
            evaluation: null
        });
    }
    /**
     * Stores the evaluated result in the store's history logs if
     * result exists
     */
    saveCurrentResultToHistory() {
        this.data.result && this.calculatorFacade.logHistoryEntry(this.data.result);
    }
    /**
     * Clears the result property in the store if it exists
     */
    clearResultLog() {
        this.data.result && this.calculatorFacade.clearCalculatorLog();
    }
    /**
     ******** MATH EXPRESSION USER INPUT HANDLING ***********************
     */
    /**
     * Solves the expression and passes on the result to the store,
     * or flags and logs an error in the store in case of invalid expression
     *
     */
    onSolveExpression() {
        const lastItem = this.calculatorService.getExpressionLastItem();
        if (lastItem && !Number.isNaN(+lastItem)) {
            const expressionWithMathSigns = this.calculatorService.replaceExpressionLabelSignsWithMathSigns();
            try {
                const result = mathjs__WEBPACK_IMPORTED_MODULE_8__.evaluate(expressionWithMathSigns);
                this.saveResult(expressionWithMathSigns, result);
            }
            catch (e) {
                this.logError(e, expressionWithMathSigns);
            }
        }
        else {
            this.flagInvalidAction(null, _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.EInvalidActions.EQUALS + ', last char not a number part');
        }
    }
    /**
     * Gets called on a calc button click, attempts to append to
     * or operate on the expression
     *
     * @param {{
     *     symbol: string;        Calc button label
     *     type: string;          Type (function | operator | number)
     *     action?: ECalsActions; Optional action
     *   }} event                 Event object containing the above
     */
    onChangeExpression(event) {
        const { symbol, type, action = null } = event;
        switch (type) {
            case 'operator': {
                if (!!this.data.result)
                    this.onContinueWithPreviousExpression();
                this.handleOperator(symbol);
                break;
            }
            case 'number':
                this.handleNumber(symbol);
                break;
            case 'function':
                this.onCalcAction(action);
                break;
            default:
                break;
        }
    }
    /**
     * Changes last number from positive to negative and vice versa,
     * or flags and logs the error on a invalid attempt
     */
    onChangeOperator() {
        const expressionAsArr = this.calculatorService.
            getExpressionAsArrOfNumsAndOperators();
        const length = expressionAsArr.length;
        if (length) {
            const { last, secondToLast, operatorIsMinus, operatorIsPlus } = this.calculatorService.getChangeOperatorDeterminationVars(expressionAsArr);
            // If single positive number
            if (length === 1 && !Number.isNaN(+last) && +last > 0) {
                this.calculatorService.changeOperatorForSingleNumber(expressionAsArr[0], 'negative');
                // If single negative number
            }
            else if (length === 2 && operatorIsMinus) {
                this.calculatorService.changeOperatorForSingleNumber(expressionAsArr[1], 'positive');
                // Remaining cases
            }
            else if (length > 1 &&
                !Number.isNaN(+last) &&
                (operatorIsMinus || operatorIsPlus)) {
                this.calculatorService.changeOperatorOfLastNumberInMultiple(secondToLast, expressionAsArr);
                // Invalid expression ending for operator change
            }
            else {
                this.flagInvalidAction(null, _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.EInvalidActions.CHANGE_OPERATOR);
            }
            // Empty expression
        }
        else {
            this.flagInvalidAction(null, 'empty expression');
        }
    }
    /**
     * Stores the current expression result into the store's history logs,
     * and forms a new expression beginning with the stored result of now
     * previous expression
     *
     * Triggered when a user evaluates expression (=) and subsequently
     * clicks on any of the math operator buttons (+, -, /, *)
     */
    onContinueWithPreviousExpression() {
        this.onAllClear();
        const historyLength = this.data.history.length;
        const lastHistoryLog = this.data.history[historyLength - 1];
        this.calculatorService.updateExpression(lastHistoryLog.evaluation ? lastHistoryLog.evaluation : '');
    }
    /**
     * Performs a predefined operation and/or store operation based on
     * the action type
     *
     * @param {(ECalsActions | null)} action Action type
     */
    onCalcAction(action) {
        switch (action) {
            case _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.ECalsActions.ALL_CLEAR:
                this.onAllClear();
                break;
            case _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.ECalsActions.EQUALS:
                this.onSolveExpression();
                break;
            case _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.ECalsActions.CHANGE_OPERATOR:
                this.onChangeOperator();
                break;
            default:
                break;
        }
    }
    /**
     * Updates expression to an empty string, saves the result to the store's history,
     * and nullifies the result in the store
     */
    onAllClear() {
        this.calculatorService.updateExpression('');
        this.saveCurrentResultToHistory();
        this.clearResultLog();
    }
    /**
     ************************ USER INPUT HANDLING ***********************
     */
    /**
     * Determines whether suggested operator (math sign) may be appended to the
     * current expression string; on success, it appends and updates the expression;
     * on failure, it flags and logs the error
     *
     * @param {string} symbol Math sign to be appended to the expression
     */
    handleOperator(symbol) {
        let allowAppendObj = { allow: false };
        this.calculatorService.determineAllowBoolean(allowAppendObj, symbol);
        if (allowAppendObj.allow) {
            this.calculatorService.updateExpression(this.expression + ' ' + symbol + ' ');
        }
        else {
            this.flagInvalidAction(null, _models_calculator_models__WEBPACK_IMPORTED_MODULE_0__.EInvalidActions.APPEND_OPERATOR);
        }
    }
    /**
     * Determines whether suggested number (or dot*) may be appended to the
     * current expression string; on success, it appends and updates the expression;
     * on failure, it flags and logs the error
     *
     * *Dot is handled as a number as well, method includes check whether
     * dot is already present in case of a humber
     *
     * @param {string} symbol Number to be appended to the expression
     */
    handleNumber(symbol) {
        // Non-dot case
        if (symbol !== '.') {
            this.calculatorService.updateExpression(this.expression + symbol);
            // Dot case
        }
        else {
            const lastItem = this.calculatorService.getExpressionLastItem();
            if (lastItem && !Number.isNaN(+lastItem) && !lastItem.includes('.')) {
                this.calculatorService.updateExpression(this.expression + symbol);
            }
            else {
                this.flagInvalidAction(null, 'expression ends with a dot');
            }
        }
    }
    /**
     ***************************** ERROR HANDLING ***********************
     */
    /**
     * Shows red warning styling in the calculator container for a moment
     * and logs the error in the store
     *
     * Cases when caused: Multiple dot input, dot on empty expression,
     * double operator input, invalid operations
     *
     * @param {*} [e]                                     Optional error
     * @param {(string | ECalsActions)} [attemptedAction] Optional attempted action
     */
    flagInvalidAction(e, attemptedAction) {
        this.invalidAction = true;
        setTimeout(() => (this.invalidAction = false), 500);
        const errorParam = e ? e : attemptedAction ? attemptedAction : null;
        this.logError(errorParam, this.expression);
    }
    /**
     ************************************** HOOKS ***********************
     */
    ngOnInit() {
        // From service
        this.operators = this.calculatorService.operators;
        this.operatorsRegex = this.calculatorService.operatorsRegex;
        this.subs.add(this.calculatorService.expressionAsObs$.subscribe((expression) => (this.expression = expression)));
        // From store
        this.subs.add(this.calculatorFacade.history$.subscribe((history) => (this.data.history = history)));
        this.subs.add(this.calculatorFacade.result$.subscribe((result) => (this.data.result = result)));
        this.subs.add(this.calculatorFacade.errors$.subscribe((errors) => (this.data.errors = errors)));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
CalculatorComponent.ɵfac = function CalculatorComponent_Factory(t) { return new (t || CalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_store_calculator_calculator_facade__WEBPACK_IMPORTED_MODULE_2__.CalculatorFacade), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_calculator_service__WEBPACK_IMPORTED_MODULE_3__.CalculatorService)); };
CalculatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CalculatorComponent, selectors: [["calc-calculator"]], decls: 5, vars: 5, consts: [[1, "card", 2, "width", "22rem"], [1, "card-body", "invalid-action-flag"], [3, "history"], [3, "expression", "result", "invalidAction"], [3, "operators", "inputChange"]], template: function CalculatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "calc-history-field", 2)(3, "calc-expression-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "calc-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("inputChange", function CalculatorComponent_Template_calc_buttons_inputChange_4_listener($event) { return ctx.onChangeExpression($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("history", ctx.data == null ? null : ctx.data.history);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("expression", ctx.expression)("result", ctx.data == null ? null : ctx.data.result)("invalidAction", ctx.invalidAction);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("operators", ctx.operators);
    } }, dependencies: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_4__.ButtonsComponent, _expression_field_expression_field_component__WEBPACK_IMPORTED_MODULE_5__.ExpressionFieldComponent, _history_field_history_field_component__WEBPACK_IMPORTED_MODULE_6__.HistoryFieldComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxjdWxhdG9yLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 90061:
/*!**************************************************************************************!*\
  !*** ./src/app/containers/calculator/expression-field/expression-field.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressionFieldComponent": () => (/* binding */ ExpressionFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function (a1) { return ["card-body text-end fs-2", a1]; };
class ExpressionFieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExpressionFieldComponent.ɵfac = function ExpressionFieldComponent_Factory(t) { return new (t || ExpressionFieldComponent)(); };
ExpressionFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpressionFieldComponent, selectors: [["calc-expression-field"]], inputs: { expression: "expression", result: "result", invalidAction: "invalidAction" }, decls: 3, vars: 4, consts: [[1, "card", "mt-3"], ["data-test", "calc-expression-field", 3, "ngClass"]], template: function ExpressionFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.invalidAction ? "invalid-action-flag" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result ? ctx.result == null ? null : ctx.result.evaluation : ctx.expression, " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".card[_ngcontent-%COMP%] {\n  min-height: 4em;\n}\n.invalid-action-flag[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.25rem rgba(220, 53, 69, 0.25);\n}\n.card-body[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  line-height: 27px;\n  min-height: 59px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cHJlc3Npb24tZmllbGQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxlQUFBO0FBRVI7QUFEQTtFQUNFLHFCQUFBO0VBQ0EsaURBQUE7QUFHRjtBQURBO0VBQWEsdUJBQUE7RUFBeUIsaUJBQUE7RUFBbUIsZ0JBQUE7QUFNekQiLCJmaWxlIjoiZXhwcmVzc2lvbi1maWVsZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHsgbWluLWhlaWdodDogNGVtO31cbi5pbnZhbGlkLWFjdGlvbi1mbGFnIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYigyMjAgNTMgNjkgLyAyNSUpO1xufVxuLmNhcmQtYm9keSB7IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBsaW5lLWhlaWdodDogMjdweDsgbWluLWhlaWdodDogNTlweDt9XG5cbiJdfQ== */"] });


/***/ }),

/***/ 45207:
/*!********************************************************************************!*\
  !*** ./src/app/containers/calculator/history-field/history-field.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryFieldComponent": () => (/* binding */ HistoryFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


function HistoryFieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.expression, " =");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.evaluation);
} }
class HistoryFieldComponent {
    constructor() { }
    ngOnInit() {
    }
}
HistoryFieldComponent.ɵfac = function HistoryFieldComponent_Factory(t) { return new (t || HistoryFieldComponent)(); };
HistoryFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HistoryFieldComponent, selectors: [["calc-history-field"]], inputs: { history: "history" }, decls: 3, vars: 1, consts: [[1, "card"], [1, "card-body", "text-end", "fs-6"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "mb-3"], [1, "fs-4", "my-1"]], template: function HistoryFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HistoryFieldComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.history == null ? null : ctx.history.slice(-3));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".card-body[_ngcontent-%COMP%] {\n  height: 214px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnktZmllbGQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYSxhQUFBO0FBRWIiLCJmaWxlIjoiaGlzdG9yeS1maWVsZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkgeyBoZWlnaHQ6IDIxNHB4OyB9XG4iXX0= */"] });


/***/ }),

/***/ 87998:
/*!*****************************************************!*\
  !*** ./src/app/layout/content/content.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _containers_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containers/calculator/calculator.component */ 37421);


class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["calc-content"]], decls: 3, vars: 0, consts: [[1, "container"], [1, "row", "mt-4"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "calc-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_containers_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_0__.CalculatorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250ZW50LmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 61954:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["calc-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 17876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["calc-header"]], decls: 7, vars: 0, consts: [["color", "primary"], [1, "container"], ["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "button", 2)(3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Angular Calculator Demonstration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__.MatToolbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 36674:
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 17876);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 61954);
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/content.component */ 87998);




class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["calc-layout"]], decls: 4, vars: 0, consts: [["layout", "row", "flex", ""]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "calc-header")(2, "calc-content")(3, "calc-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50Lmxlc3MifQ== */"] });


/***/ }),

/***/ 20129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["calc-sidebar"]], decls: 2, vars: 0, template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sidebar works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5sZXNzIn0= */"] });


/***/ }),

/***/ 66207:
/*!*********************************************!*\
  !*** ./src/app/models/calculator.models.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ECalsActions": () => (/* binding */ ECalsActions),
/* harmony export */   "EInvalidActions": () => (/* binding */ EInvalidActions)
/* harmony export */ });
var ECalsActions;
(function (ECalsActions) {
    ECalsActions[ECalsActions["EQUALS"] = 0] = "EQUALS";
    ECalsActions[ECalsActions["CHANGE_OPERATOR"] = 1] = "CHANGE_OPERATOR";
    ECalsActions[ECalsActions["ALL_CLEAR"] = 2] = "ALL_CLEAR";
    ECalsActions[ECalsActions["APPEND_OPERATOR"] = 3] = "APPEND_OPERATOR";
})(ECalsActions || (ECalsActions = {}));
var EInvalidActions;
(function (EInvalidActions) {
    EInvalidActions["EQUALS"] = "EQUALS";
    EInvalidActions["CHANGE_OPERATOR"] = "CHANGE_OPERATOR";
    EInvalidActions["ALL_CLEAR"] = "ALL_CLEAR";
    EInvalidActions["APPEND_OPERATOR"] = "APPEND_OPERATOR";
})(EInvalidActions || (EInvalidActions = {}));


/***/ }),

/***/ 48649:
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ 32088);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ 86079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 47727);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/portal */ 17520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ 41861);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ 59673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ 15183);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ 83335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 64865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ 53453);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/menu */ 65397);
/* harmony import */ var _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/dialog */ 62529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);















































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_4__.CdkMenuModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__.ScrollingModule,
        _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_46__.DialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__.A11yModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__.CdkAccordionModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__.ClipboardModule,
        _angular_cdk_menu__WEBPACK_IMPORTED_MODULE_4__.CdkMenuModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__.CdkStepperModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__.CdkTableModule,
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__.CdkTreeModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.DragDropModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__.MatTreeModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_43__.OverlayModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_44__.PortalModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__.ScrollingModule,
        _angular_cdk_dialog__WEBPACK_IMPORTED_MODULE_46__.DialogModule] }); })();


/***/ }),

/***/ 4975:
/*!************************************************!*\
  !*** ./src/app/services/calculator.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorService": () => (/* binding */ CalculatorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class CalculatorService {
    constructor() {
        /**
         * Labels are used in calculator expression field, signs are used for mathjs' evaluation method
         */
        this.operators = {
            plus: { label: '+', sign: '+' },
            minus: { label: '−', sign: '-' },
            divide: { label: '÷', sign: '/' },
            multiply: { label: '×', sign: '*' },
        };
        this.operatorsRegex = /(\s\+\s)|(\s\−\s)|(\s÷\s)|(\s×\s)/g;
        this.expressionStr = '';
        this.expressionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.expressionAsObs$ = this.expressionSubject.asObservable();
    }
    /**
     * Updates current expression with a passed value
     *
     * @param {string} newExp New expression
     */
    updateExpression(newExp) {
        this.expressionStr = newExp;
        this.expressionSubject.next(newExp);
    }
    /**
     * Provides object filled with values related to determening the
     * operator change (positive to negative and vice versa)
     *
     * @param {string[]} expressionArr   Expression converted to array
     * @returns {IDetermineOperatorVals} Object with determanation related vals
     */
    getChangeOperatorDeterminationVars(expressionArr) {
        const length = expressionArr.length;
        const last = expressionArr[length - 1];
        const secondToLast = length > 1 ? expressionArr[length - 2] : null;
        const operatorIsMinus = secondToLast === this.operators.minus.label;
        const operatorIsPlus = secondToLast === this.operators.plus.label;
        return { last, secondToLast, operatorIsMinus, operatorIsPlus };
    }
    /**
     * Operator change is handled differently for positive and negative
     * numbers; lastly, it forms expression from the array and updates the
     * expression property
     *
     * @param {string} numStr                        Expression's  number part as string
     * @param {('positive' | 'negative')} toOperator To which operator it should convert
     */
    changeOperatorForSingleNumber(numStr, toOperator) {
        switch (toOperator) {
            case 'positive': {
                const convertedExpressionArr = [numStr];
                this.formExpressionFromArr(convertedExpressionArr);
                break;
            }
            case 'negative': {
                const convertedExpressionArr = [this.operators.minus.label, numStr];
                this.formExpressionFromArr(convertedExpressionArr);
                break;
            }
            default:
                break;
        }
    }
    /**
     * Operator change handling for expression with multiple number parts
     *
     * @param {(string | null)} secondToLast Item before the last one
     * @param {string[]} expressionArr       Expression converted to array
     */
    changeOperatorOfLastNumberInMultiple(secondToLast, expressionArr) {
        const length = expressionArr.length;
        const operatorConverted = this.convertLabelSign(secondToLast);
        const convertedExpressionArr = [...expressionArr];
        convertedExpressionArr[length - 2] = operatorConverted;
        this.formExpressionFromArr(convertedExpressionArr);
    }
    /**
     * Converts an expression to array made up from number parts and operators,
     * cleared of spaces
     *
     * @returns {string[]} Expression converted to an array
     */
    getExpressionAsArrOfNumsAndOperators() {
        return (this.expressionStr
            .split(this.operatorsRegex)
            // clear operators of white spaces
            .map((item) => item && item.replace(/\s/g, ''))
            // clear out undefined items
            .filter((item) => item));
    }
    /**
     * Conversion of positive operator to negative and vice versa
     *
     * @param {(string | null)} sign Math operator as label
     * @returns {string}             Math operator as label
     */
    convertLabelSign(sign) {
        switch (sign) {
            case this.operators.plus.label:
                return this.operators.minus.label;
            case this.operators.minus.label:
                return this.operators.plus.label;
            default:
                return '';
        }
    }
    /**
     * Converts expression array back to string expression
     *
     * @param {string[]} arr       Expression converted to an array
     */
    formExpressionFromArr(arr) {
        let newExpression = '';
        arr.length &&
            arr.forEach((part) => {
                const isNum = !Number.isNaN(+part);
                newExpression += isNum ? part : ` ${part} `;
            });
        this.updateExpression(newExpression);
    }
    /**
     * The mathjs evaluation methods requires that the operator signs are valid
     * math signs; the calculator operator labels are replaced with valid math signs
     *
     * @returns {string} Expression to be evaluated
     */
    replaceExpressionLabelSignsWithMathSigns() {
        let expressionForEvaluation = this.expressionStr;
        for (let [key, value] of Object.entries(this.operators)) {
            // Regex used to replace ALL occurrences
            const reg = new RegExp(`\\${value.label}`, 'g');
            expressionForEvaluation = expressionForEvaluation.replace(reg, value.sign);
        }
        return expressionForEvaluation;
    }
    /**
     * Provides boolean (in object so it can be handled in another function)
     * to help determine whether an operator may be appended
     * in CalculatorCompenent's `handleOperator`
     *
     * @param {{ allow: boolean }} allowAppendObj Object with passed boolean
     * @param {string} symbol                     Math operator label
     */
    determineAllowBoolean(allowAppendObj, symbol) {
        const length = this.expressionStr.length;
        // Empty input, allow minus
        if (!length && symbol === '−') {
            allowAppendObj.allow = true;
            // Non-empty input, last character is a number
        }
        else if (length) {
            const lastChar = this.expressionStr[length - 1];
            const isNumber = !Number.isNaN(parseInt(lastChar));
            if (isNumber) {
                allowAppendObj.allow = true;
            }
        }
    }
    /**
     * Returns the last item (character) of the expression string
     *
     * @returns {string} Last character of the expression
     */
    getExpressionLastItem() {
        const expressionAsArr = this.getExpressionAsArrOfNumsAndOperators();
        const length = expressionAsArr.length;
        return expressionAsArr[length - 1];
    }
}
CalculatorService.ɵfac = function CalculatorService_Factory(t) { return new (t || CalculatorService)(); };
CalculatorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CalculatorService, factory: CalculatorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10429:
/*!********************************************************!*\
  !*** ./src/app/store/calculator/calculator.actions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorActions": () => (/* binding */ CalculatorActions)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 23488);

var actionTypes;
(function (actionTypes) {
    actionTypes["LOG_RESULT"] = "LOG_RESULT";
    actionTypes["LOG_HISTORY"] = "LOG_HISTORY";
    actionTypes["LOG_ERROR"] = "LOG_ERROR";
    actionTypes["CLEAR_LOG"] = "CLEAR_LOG";
})(actionTypes || (actionTypes = {}));
const CalculatorActions = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createActionGroup)({
    source: '[CALCULATOR]',
    events: {
        [actionTypes.LOG_RESULT]: (result) => ({ result }),
        [actionTypes.LOG_HISTORY]: (historyLog) => ({ historyLog }),
        [actionTypes.LOG_ERROR]: (error) => ({ error }),
        [actionTypes.CLEAR_LOG]: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.emptyProps)(),
    }
});


/***/ }),

/***/ 83009:
/*!*******************************************************!*\
  !*** ./src/app/store/calculator/calculator.facade.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorFacade": () => (/* binding */ CalculatorFacade)
/* harmony export */ });
/* harmony import */ var _calculator_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.feature */ 4743);
/* harmony import */ var _calculator_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator.actions */ 10429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 23488);




class CalculatorFacade {
    constructor(store) {
        this.store = store;
        this.history$ = this.store.select(_calculator_feature__WEBPACK_IMPORTED_MODULE_0__.calculatorFeature.selectHistory);
        this.errors$ = this.store.select(_calculator_feature__WEBPACK_IMPORTED_MODULE_0__.calculatorFeature.selectErrors);
        this.result$ = this.store.select(_calculator_feature__WEBPACK_IMPORTED_MODULE_0__.calculatorFeature.selectResult);
    }
    logHistoryEntry(historyLog) {
        this.store.dispatch(_calculator_actions__WEBPACK_IMPORTED_MODULE_1__.CalculatorActions.log_history(historyLog));
    }
    logErrorsEntry(errorLog) {
        this.store.dispatch(_calculator_actions__WEBPACK_IMPORTED_MODULE_1__.CalculatorActions.log_error(errorLog));
    }
    saveResult(result) {
        this.store.dispatch(_calculator_actions__WEBPACK_IMPORTED_MODULE_1__.CalculatorActions.log_result(result));
    }
    clearCalculatorLog() {
        this.store.dispatch(_calculator_actions__WEBPACK_IMPORTED_MODULE_1__.CalculatorActions.clear_log());
    }
}
CalculatorFacade.ɵfac = function CalculatorFacade_Factory(t) { return new (t || CalculatorFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
CalculatorFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalculatorFacade, factory: CalculatorFacade.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4743:
/*!********************************************************!*\
  !*** ./src/app/store/calculator/calculator.feature.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculatorFeature": () => (/* binding */ calculatorFeature),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "selectCalculatorState": () => (/* binding */ selectCalculatorState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 23488);
/* harmony import */ var _calculator_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.actions */ 10429);


const initialState = {
    history: [],
    result: null,
    errors: [],
};
const calculatorFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
    name: 'calculator',
    reducer: (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_calculator_actions__WEBPACK_IMPORTED_MODULE_0__.CalculatorActions.log_history, (state, { historyLog }) => ({
        ...state,
        history: historyLog ? [...state.history, historyLog] : state.history
    })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_calculator_actions__WEBPACK_IMPORTED_MODULE_0__.CalculatorActions.log_error, (state, { error }) => ({
        ...state,
        errors: [...state.errors, error]
    })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_calculator_actions__WEBPACK_IMPORTED_MODULE_0__.CalculatorActions.log_result, (state, { result }) => ({
        ...state,
        result,
    })), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_calculator_actions__WEBPACK_IMPORTED_MODULE_0__.CalculatorActions.clear_log, (state) => ({
        ...state,
        result: null,
    }))),
});
const { name, reducer, selectCalculatorState,
// AUTO GENERATED SELECTORS
// selectHistory,
// selectErrors,
// selectResult,
 } = calculatorFeature;


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ }),

/***/ 75042:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map