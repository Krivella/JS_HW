"use strict"

let a = parseInt(prompt("Введите первое число"));
let b = parseInt(prompt("Введите второе число"));
let operation = prompt("Введите операцию");
	switch (operation){
	case "/":
	console.log (a/b);
	break;
	case "*":
	console.log (a*b);
	break;
	case "+":
	console.log (a+b);
	break;
	case "-":
	console.log (a-b);
	break;
	default:
	console.log("Input_Error")
}





