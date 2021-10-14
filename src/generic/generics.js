"use strict";
exports.__esModule = true;
exports.generics = void 0;
/*
  Generics
*/
var generics = function () {
    function identity(arg) {
        return arg;
    }
    var ou = identity("sstringg");
    console.log(ou);
    var op = identity(11011);
    console.log(op);
    function logIdentity(arg) {
        console.log(arg.length);
        return arg;
    }
    var ot = logIdentity([2, 7, 4]);
    console.log(ot);
    //------
    var tIdentity = identity;
    var yIdentity = identity;
    console.log(yIdentity(11));
};
exports.generics = generics;
exports.generics();
