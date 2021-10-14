"use strict";
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
exports.clss = void 0;
var clss = function () {
    var Animal = /** @class */ (function () {
        function Animal(theName, theAge) {
            this.name = theName;
            this.age = theAge;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + ',' + this.age + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name, age) {
            return _super.call(this, name, age) || this;
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name, age) {
            return _super.call(this, name, age) || this;
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake("Sammy the pee", 12);
    var tom = new Horse("Tommy the pa", 11);
    sam.move();
    tom.move(34);
    sam.name;
    //sam.age;
};
exports.clss = clss;
exports.clss();
