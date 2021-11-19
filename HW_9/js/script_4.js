"use strict"
// Написать функцию generateField(n) по генерации поля размером n x n. Значение n не может быть меньше 3. 
// Для 3х ячеек поля (для выбора ячейки использовать random) добавить атрибут prise. 
// Значение атрибута prise - значение ключа объекта prises. 
// Пример того, что должно получиться при генерации поля 4 Х 4 на изображении field.png.

  let prises = {
     headphones: "Наушники",
     book: "Книга",
     postcard: "Открытка"
  };
  let prise = Object.keys(prises)
   
   let innerBody = document.body
  function generateField(n) {
  	if (n>=3){
  		let field = [];
      field = document.createElement('div')

      let randomArr = [];
       for(let j=0; j<3; j++){
       let randomSector= Math.flor(Math.random(n*n))
       randomSector = document.createElement('div')
       randomSector.setAttribute('prise')
       randomArr.push(randomSector);
     }

      for(let i=0; i<n*n; i++){
        let sector = document.createElement('div')
        field.push(sector);
        field.splice(0, 3, randomArr)
      }
      }
  	
   else console.log("Значение должно быть больше 3")
  
  innerBody.append(field)
 generateField(4)
  }

  innerBody.style.cssText= `
  bourder: 10px solid black
  background: "yellow"`