"use strict"

// Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
//  Функция не должна быть привязана к конкретным названиям свойств. Заголовки ячеек - названия свойств в верхнем регистре. 
//  Пример того, что должно получиться на изображении tables.png

//  Массивы для проверки:
 let articles = [
     {
         id: 1,
         title: "JS",
         text: "About JS",
         author: "Max"
     },
     {
         id: 2,
         title: "PHP",
         text: "About PHP",
         author: "Ivan"
     },
     {
         id: 3,
         title: "DataBase",
         text: "About DB",
         author: "Paul"
     },
     {
         id: 4,
         title: "HTML",
         text: "About HTML",
         author: "Paul"
     }
 ];

 function genreTable (articles) {
let table = document.createElement("table")
 	for (let artic of articles){
 	let row = table.insertRow()
 	row = articles.lenght

 	for (let description in artic){
 	// let cell = row.insertCell()	
 	// cell.innerText = Object.keys(artic)	

 	let cell_1 = row.insertCell()
 	cell_1 = artic.description
 	}
 	
 	}
cell.append(row)
row.append(table)
table.append(table)
 }
 genreTable (articles)