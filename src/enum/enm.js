"use strict";
/*
  enum
*/
exports.__esModule = true;
exports.enm = void 0;
var enm = function () {
    var Direction;
    (function (Direction) {
        Direction[Direction["up"] = 0] = "up";
        Direction[Direction["down"] = 1] = "down";
        Direction[Direction["left"] = 2] = "left";
        Direction[Direction["right"] = 3] = "right";
    })(Direction || (Direction = {}));
    console.log(Direction.right);
    var ShapeKind;
    (function (ShapeKind) {
        ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
        ShapeKind[ShapeKind["Square"] = 1] = "Square";
    })(ShapeKind || (ShapeKind = {}));
    var c = {
        //kind: ShapeKind.Square,//error
        kind: ShapeKind.Circle,
        radius: 100
    };
    console.log(c);
    var E;
    (function (E) {
        E[E["X"] = 0] = "X";
        E[E["Y"] = 1] = "Y";
        E[E["Z"] = 2] = "Z";
    })(E || (E = {}));
    function f(obj) {
        return obj.X;
    }
    console.log(f(E));
    //------
    var En;
    (function (En) {
        En[En["A"] = 0] = "A";
    })(En || (En = {}));
    var a = En.A;
    var nameOfA = En[a]; // "A"
    console.log(nameOfA);
    var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
    console.log(directions);
};
exports.enm = enm;
exports.enm();
