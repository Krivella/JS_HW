'use strict'
// Создать функцию, кот*орая принимает на 
// вход число от 1(понедельник) до 6(воскресенье), а возвращает день недели на русском языке
 let input = parseInt(prompt("Введите число"));
 function res (input){
 	if (input === 1) return "Понедельник"
 		if (input === 2) return "Вторник"
 			if (input === 3) return "Среда"
 				if (input === 4) return "Четверг"
 					if (input === 5) return "Пятница"
 						if (input === 6) return "Суббота"
 							if (input ===7) return "Воскресенье"
 }
console.log(res(input));


// Написать функцию, котора добавляет в массив значение, только, если его не существует

let newNumbers = "jon";


function plussing(newNumbers, ...array){
	for (let num of array){
		if (array.includes(newNumbers)){return array}
			else array.push(newNumbers);
			
	}
}
let result = plussing (newNumbers, 1, "jon", 565, 'dima');
console.log(result);


// Написать функцию, которая возвращает не более 3 случайных элементов из переданного в нее массива.

function resultat (someMassive){
let someNumber = someMassive.sort(() => 0.5 - Math.random());
return someNumber.slice(0, 3);
	}
	let someMassive = [2, 5, -6, 100, 40, 53, 1];
	console.log(resultat(someMassive));


// Написать функцию, которая вернет самое длинное слово в предложении
   
//          let text = "самое длинное слово в предложении";
//          // используйте свойство length для определения размера строки (text.length)

let text = "самое длинное слово в предложении";
function longestWord(text){
	let arrowFromText = text.split(" ");
	let longestWord=arrowFromText.sort(function(a, b){
		return b.length - a.length;
	});
	return longestWord[0];
}

console.log (longestWord(text))



// Создать массив из пересечений использовать методы filter + includes

//          let first = ["Апрель", "Июль", "Октябрь", "Май"],
//          second = ["Май", "Январь", "Декабрь", "Октябрь"];

         let first = ["Апрель", "Июль", "Октябрь", "Май"],
         second = ["Май", "Январь", "Декабрь", "Октябрь"];
         let oppositeArr = first.filter(opposite => second.includes(opposite));

         console.log(oppositeArr);
        