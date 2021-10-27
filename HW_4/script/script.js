"use strict"
// Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
// будет возвращать слово "товар" в правильной форме ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).
let count =  prompt("Введите количество товаров");
let variative = ["товар", "товара", "товаров"];
let keys = count%10;
function returnWord (count, keys){
if (count>10 && count<=14) return count+=variative[2];
if (keys===1) return count+=variative[0];
if (keys>1 && keys<5) return count+=variative[1];
if (keys>=5 && keys<=9) return count+=variative[2];
if (keys===0) return count+=variative[2];

} console.log(returnWord(count, keys));
