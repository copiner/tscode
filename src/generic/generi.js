"use strict";
/*
  Generics
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
exports.__esModule = true;
exports.gener = void 0;
var gener = function () {
    /*
        function getProperty(obj: T, key: K) {
            return obj[key];
        }
    
        let x = { a: 1, b: 2, c: 3, d: 4 };
    
        getProperty(x, "a"); // okay
        getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
    */
    var BeeKeeper = /** @class */ (function () {
        function BeeKeeper() {
        }
        return BeeKeeper;
    }());
    var ZooKeeper = /** @class */ (function () {
        function ZooKeeper() {
        }
        return ZooKeeper;
    }());
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bee;
    }(Animal));
    var Lion = /** @class */ (function (_super) {
        __extends(Lion, _super);
        function Lion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Lion;
    }(Animal));
    function createInstance(c) {
        return new c();
    }
    var li = createInstance(Lion);
    var be = createInstance(Bee);
    console.log(li.keeper);
};
exports.gener = gener;
exports.gener();
