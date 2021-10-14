"use strict";
exports.__esModule = true;
exports.inter = void 0;
/*
    interface
*/
var inter = function () {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: "black" });
    console.log(mySquare);
    var p1 = { x: 10, y: 20 };
    //p1.x = 5;
    var a = [3, 5, 7, 9];
    var ro = a;
    console.log(ro[0]);
    //ro[0] = 12;
    //a = ro;
    a = ro;
    var mySearch;
    mySearch = function (source, subString) {
        var result = source.indexOf(subString);
        return result > -1;
    };
    console.log(mySearch('copiner', 'co'));
    function createClock(ctor, hour, minute) {
        return new ctor(hour, minute);
    }
    var DigitalClock = /** @class */ (function () {
        function DigitalClock(h, m) {
        }
        DigitalClock.prototype.tick = function () {
            console.log("beep beep");
        };
        return DigitalClock;
    }());
    var AnalogClock = /** @class */ (function () {
        function AnalogClock(h, m) {
        }
        AnalogClock.prototype.tick = function () {
            console.log("tick tock");
        };
        return AnalogClock;
    }());
    var digital = createClock(DigitalClock, 12, 17);
    var analog = createClock(AnalogClock, 7, 32);
    digital.tick();
    var square = {};
    square.color = "blue";
    square.sideLength = 10;
    square.penWidth = 5.0;
    console.log(square);
    function getCounter() {
        var counter = function (start) { };
        counter.interval = 123;
        counter.reset = function () { };
        return counter;
    }
    var c = getCounter();
    c(10);
    c.reset();
    c.interval = 5.0;
    console.log(c);
};
exports.inter = inter;
exports.inter();
