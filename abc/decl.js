"use strict";
/*
    declare
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.decl = void 0;
var decl = function () {
    var num = 9;
    var kitty = {
        name: "Dainy",
        live: num
    };
    kitty.name = 'Rorry';
    kitty.live--;
    //kitty = null;
    function f(_a) {
        var a = _a[0], b = _a[1];
        console.log(a);
        console.log(b);
    }
    var kki = [9, 5];
    //f(kis);
    f(kki);
    var o = {
        a: "foo",
        b: 12,
        c: "bar",
        de: null
    };
    var act = o.a, b = __rest(o, ["a"]);
    console.log(act);
    console.log(b);
    var a = o.a, _a = o.de, de = _a === void 0 ? 11 : _a;
    console.log(a, de);
    //rest
    var s = [3, 7];
    var p = [9, 3];
    var d = __spreadArray(__spreadArray(__spreadArray([2], s), p), [8]);
    console.log(d);
    d[1] = 4;
    console.log(d);
    console.log(s);
    var obj = {
        food: "spicy",
        price: "88",
        ambiance: "noisy"
    };
    var search = __assign(__assign({}, obj), { food: "sweet" });
    console.log(search);
};
exports.decl = decl;
exports.decl();
