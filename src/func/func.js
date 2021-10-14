"use strict";
/*
  function
*/
exports.__esModule = true;
exports.func = void 0;
var func = function () {
    var myAdd = function (x, y) {
        return x + y;
    };
    console.log(myAdd(2, 7));
    function buildName(f, l) {
        if (l === void 0) { l = "Smith"; }
        return f + " " + l;
    }
    console.log(buildName("Bob"));
    var deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
};
exports.func = func;
exports.func();
