"use strict"

// 1. Написать функцию, которая принимает на вход объект obj (например, goods), число from и число to. Если значение from и
//    to не числа, а obj не объект, функция прерывает свою работу и возвращает false. Если данные валидны, функция
//    формирует и возвращает новый ОБЪЕКТ с объектами, значения свойств price которых лежат в диапазоне от значения from до
//    значения to, не включая to.
let goods = {
	basketball:{price:100},
	football:{price:99},
	volleyball:{price:98},
	golf:{price:33},
	kvidich:{price:21}
};
let goodsGoodPrice = {};
let from = 10;
let to = 100;
function calc (goods, from, to){
	if ( typeof from !== 'number' || typeof to !== 'number') return false;
	if ( typeof goods !== 'object') return false;
	for (let key in goods){if (goods[key].price>=from && goods[key].price<to) return goodsGoodPrice[key] = goods[key]};
}
console.log(calc(goods, from, to));

// 3. Написать функцию, которая принимает на вход объект obj (например, books) и автора (author). Создает и
// возвращает новый массив, в который войдут все книги указанного автора, если такого автора нет, возвращает пустой массив.


      let books = [
         { author: 'Пушкин', title: 'Пир во время чумы'}, 
         { author: 'Толстой', title: 'Война и мир'}, 
         { author: 'Лермонтов', title: 'Тамань'}, 
         { author: 'Гончаров', title: 'Обломов'}, 
         { author: 'Лермонтов', title: 'Герой Нашего Времени'}, 
         { author: 'Пушкин', title: 'Руслан и Людмила'}, 
         { author: 'Лермонтов', title: 'И скучно, и грустно'},
      ];
      // let sortTitles = (book1, book2) => book1.title.localCompare(book2.title); //условно возьмем первые две книги (сравнение а и б)
      // books.sort(sortTitles);                                                   //метод локалкомпэйр сравнивает длину строки (tr or fl)
  


      function bookOfAuthor (books, author) {
      	let newArr = [];
      	for (let book of books){if (book.author === author)  newArr.push(book.title)}
      	return newArr;	 
      }
  console.log(bookOfAuthor(books, "лермонтов"))


