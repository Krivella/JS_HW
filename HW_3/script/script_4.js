"use strict"
let login = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
while(true){
	let input = prompt("Введите логин");
	if (login.includes(input)){let message=prompt("Такой уже есть в системе")
	}else {login.push(input);
break;
	}
}
console.log(login)