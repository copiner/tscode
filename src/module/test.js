"use strict";
/*

Stringvalidator  Zipcodevalidator
*/
exports.__esModule = true;
var lettersonlyvalidator_1 = require("./lettersonlyvalidator");
var zipcodevalidator_1 = require("./zipcodevalidator");
var strings = ["hello", "98011", "210"];
var validators = {};
validators[Number(1)] = new zipcodevalidator_1.ZipCodeValidator();
validators["Letters only"] = new lettersonlyvalidator_1.LettersOnlyValidator();
console.log(validators);
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "m" : "nm") + " " + name_1);
    }
});
