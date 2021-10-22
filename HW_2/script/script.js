"use strict"
let count = parseInt(prompt("Введите число"));
if (count<=100&&count>=90) {
	console.log("Ваша оценка-отлично");
} else if(count<=89&&count>=60){
	console.log("Ваша оценка-good");
} else if (count<=59&&count>=40){
	console.log ("Ваша оценка-трояк");
} else if (count<=39&&count>=0) {
	console.log ("one more time pliz");
}


