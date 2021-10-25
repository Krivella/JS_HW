"use strict"
let nums = [];
let a = 5;
let b = 300;
let step = 7;
for (let i=0;i<step;i++){
	nums.push(Math.round(Math.random()*(b-a)+a));
}
console.log(nums);
let min = nums.indexOf(Math.min(...nums));
console.log(min);
let max = nums.indexOf(Math.max(...nums));
console.log(max);
let minValue = Math.min(...nums);
let maxValue = Math.max(...nums);
nums[min]=maxValue;
nums[max]=minValue;




console.log(nums);












// var arr = [2,1,3,5,4,0]
//    arr[1] = arr.splice(0,1, arr[1])[0]
// console.log(arr)