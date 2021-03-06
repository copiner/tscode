"use strict";
/*
  LettersOnlyValidator.ts
*/
exports.__esModule = true;
exports.LettersOnlyValidator = void 0;
var lettersRegexp = /^[A-Za-z]+$/;
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
exports.LettersOnlyValidator = LettersOnlyValidator;
