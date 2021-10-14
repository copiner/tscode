"use strict";
/*
  ProgrammerCalculator
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.test = exports.Calculator = void 0;
var calculator_1 = require("./calculator");
var ProgrammerCalculator = /** @class */ (function (_super) {
    __extends(ProgrammerCalculator, _super);
    function ProgrammerCalculator(base) {
        var _this = _super.call(this) || this;
        _this.base = base;
        var maxBase = ProgrammerCalculator.digits.length;
        if (base <= 0 || base > maxBase) {
            throw new Error("base has to be within 0 to " + maxBase + " inclusive.");
        }
        return _this;
    }
    ProgrammerCalculator.prototype.processDigit = function (digit, currentValue) {
        if (ProgrammerCalculator.digits.indexOf(digit) >= 0) {
            return currentValue * this.base + ProgrammerCalculator.digits.indexOf(digit);
        }
    };
    ProgrammerCalculator.digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    return ProgrammerCalculator;
}(calculator_1.Calculator));
exports.Calculator = ProgrammerCalculator;
// Also, export the helper function
var calculator_2 = require("./calculator");
__createBinding(exports, calculator_2, "test");
