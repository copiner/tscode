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
exports.claa = void 0;
/*
  class
*/
var claa = function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee;
    }(Person));
    var howard = new Employee("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    //let john = new Person("John");//error
    var Octopus = /** @class */ (function () {
        function Octopus(theName) {
            this.numberOfLegs = 8;
            this.name = theName;
        }
        return Octopus;
    }());
    var Octopuses = /** @class */ (function () {
        function Octopuses(name) {
            this.name = name;
            this.numberOfLegs = 16;
            //this.name = name;
        }
        return Octopuses;
    }());
    var dad = new Octopus("Man with the 8 strong legs");
    //dad.name = "Man with the 3-piece suit";//error
    console.log(dad.name);
    var dades = new Octopuses("Man with the 16 strong legs");
    console.log(dades.name);
};
exports.claa = claa;
exports.claa();
