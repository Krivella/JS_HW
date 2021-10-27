"use strict"
let data = parseInt(prompt("Введите что-то"));
function check(){
	  if ( isNaN(data) )
	    console.log("Это не число")
	  else
	    console.log("Это число");
}
console.log(check());