"use strict"
let array = [1,-1,2,-2,3,-3,4,-4];
let array_1 = [];

for (let arr of array) {
if (arr<0) array_1.push(arr);
}
console.log(array_1);