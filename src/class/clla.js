"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clla = void 0;
/*
  class
*/
var clla = function () {
    var Employe = /** @class */ (function () {
        function Employe() {
        }
        return Employe;
    }());
    var employe = new Employe();
    employe.fullName = "Bob Smith";
    if (employe.fullName) {
        console.log(employe.fullName);
    }
    //-------
    var passcode = "secret passcode";
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: false,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
};
exports.clla = clla;
exports.clla();
