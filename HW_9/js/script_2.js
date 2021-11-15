"use strict"
// Вывести в html информацию о животных. В html вместо значений true / false выводить: Есть / Нет

  let animals = [
     {
        "name": "Люся",
        "age": "1 год",
        "color": "трехцветная",
        "additional_info": {"vaccinations": true, "passport": true}
     },
     {
        "name": "Том",
        "age": "3 месяца",
        "color": "белый",
        "additional_info": {"vaccinations": false, "passport": false}
     },
     {
        "name": "Макс",
        "age": 2,
        "color": "серый",
        "additional_info": {"vaccinations": false, "passport": true}
     },
     {
        "name": "Василий",
        "age": 3,
        "color": "черный",
        "additional_info": {"vaccinations": true, "passport": true}
     }
  ];         

function htmlCats (animals, cats){
	for (let oneCat of animals){
		let someCat = document.createElement('div')

		let catName = document.createElement('p')
		catName.innerText = "Имя " + oneCat.name

		let catAge = document.createElement('p')
		catAge.innerText = "Возраст "+oneCat.age

		let catColor = document.createElement('p')
		catColor.innerText = "Цвет "+oneCat.color

		let catInfo = document.createElement('ul')
		catInfo.innerText = "Дополнительная информация"

		let catVaccinations = document.createElement('li')
		 if (oneCat.additional_info.vaccinations===true) {catVaccinations.innerText = "Прививки есть"} 
		 	else {catVaccinations.innerText = "Прививок нет"}

		 let catPassport = document.createElement('li')
		 if (oneCat.additional_info.passport===true) {catPassport.innerText = "Паспорт есть"} 
		 	else {catPassport.innerText = "Паспорта нет"}

		 catInfo.append(catVaccinations, catPassport);
		 someCat.append(catName, catAge, catColor, catInfo);
		 cats.append(someCat);

	}
}
htmlCats (animals, document.querySelector(".cats"))