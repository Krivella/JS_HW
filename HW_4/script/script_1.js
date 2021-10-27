"use strict"

let a = 5;
let b = 50;
let c = parseInt(prompt("Введите шаг"));
function range (a,b,c=1){
let arr = [];
for (let value=a;value<b;value+=c){
	arr.push(value);
	
}
return arr;
}
console.log(range(a,b,c));
