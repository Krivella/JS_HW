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
table.classList.add("row")
let firstRow = table.insertRow()


for (let key in articles[0]){
let firstCell=firstRow.insertCell()
// firstCell.classList.add("row")
firstCell.innerText = key.toUpperCase()
}

for (let someObj of articles){
	let rows = table.insertRow()
	// rows.classList.add("row")
for (let key in someObj){
	let cell = rows.insertCell()
	// cell.classList.add("row")
	cell.innerText = someObj[key]
}
}

document.querySelector(".table").append(table)

}
 genreTable(articles)	