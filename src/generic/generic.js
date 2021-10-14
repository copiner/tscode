"use strict";
/*
  Genertics
*/
exports.__esModule = true;
exports.genertic = void 0;
var genertic = function () {
    var GenericAny = /** @class */ (function () {
        function GenericAny() {
        }
        return GenericAny;
    }());
    var mGeneric = new GenericAny();
    mGeneric.zeroVal = 9;
    mGeneric.add = function (x, y) {
        return x + y;
    };
    var sGeneric = new GenericAny();
    sGeneric.zeroVal = '9';
    sGeneric.add = function (x, y) {
        return x + y;
    };
    console.log(mGeneric);
    console.log(sGeneric);
    function logIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    //logIdentity(9);
    logIdentity({ length: 1, value: 3 });
};
exports.genertic = genertic;
exports.genertic();
