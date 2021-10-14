/*
  interator

  tsc interat --target es6
*/


let sArray = [2, "string", false];
//for..of会遍历可迭代的对象，调用对象上的Symbol.iterator方法
for (let entry of sArray) {
    console.log(entry);
}

let pets = new Set(["Cat", "Dog", "Hamster"]);

for (let pet in pets) {
    console.log('1', pet);
}

for (let pet of pets) {
    console.log("2", pet);
}


