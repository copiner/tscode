/*

Stringvalidator  Zipcodevalidator
*/

/*
import { ZipCodeValidator } from "./zipcodevalidator"

let valid = new ZipCodeValidator();

console.log(valid.isAcceptable("9900"));


import { ZipCodeValidator as Zcv } from "./zipcodevalidator"

let valids = new Zcv();

console.log(valids.isAcceptable("99110"));

import * as validator from "./zipcodevalidator"

let validss = new validator.ZipCodeValidator();

console.log(validss.isAcceptable("991101"));

*/

import { StringValidator } from "./validation";
import { LettersOnlyValidator } from "./lettersonlyvalidator";
import { ZipCodeValidator } from "./zipcodevalidator"


let strings = ["hello", "98011", "210"];

let validators: { [s: string]: StringValidator; } = {}


validators["Zip code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

console.log(validators)

strings.forEach(s => {
    for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "m" : "nm"} ${name}`)
    }
})
