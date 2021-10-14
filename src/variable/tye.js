"use strict";
exports.__esModule = true;
exports.tye = void 0;
/*
  type
*/
var tye = function () {
    var x;
    var y = {
        name: "Alice",
        loc: "Seattle"
    };
    x = y;
    function greet(n) {
        console.log('name', n.name);
    }
    greet(y);
};
exports.tye = tye;
exports.tye();
