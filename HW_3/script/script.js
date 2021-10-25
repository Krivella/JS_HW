"use strict"
let nums = [
            [23, 56, 75, -90, 123],
            [17, 0, -6429, -122],
            [19, 86, 55, -3, 900, 0, 0],
            [4, 9, -2]
           ];
let sum = 0;

for (let arr of nums){
     for (let numbers of arr){
     	numbers+=10;
     	sum+=numbers;
     }
} 
console.log("Сумма элементов массива(к каждому прибавить десять"+sum)
console.log("Среднее арифметическое -"+sum/19)