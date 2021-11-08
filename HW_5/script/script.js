"use strict"
 // Отсортировать массив чисел по возрастанию [3, 90, 5, -100, 50, 0, 560, 1]. Использовать метод массивов `sort`
 let nums = [3, 90, 5, -100, 50, 0, 560, 1];
 function sortNums(a, b){
	if (a<b) return -1;
	if (a>b) return 1;
	return 0;
}
nums.sort(sortNums);
console.log(nums);





// Написать функцию проверки на спам.
//    1) Функция принимает на вход текст и ...спам-слова (переменное количество аргументов).
//    2) Определить по 5ти бальной шкале, как часто в тексте встречается спам.
//    3) Результат вернуть из функции.
//    Для того, чтобы преобразовать текст в массив слов используйте метод `split()`. 
   
// Например:

//        let text = "lorem ipsum dolor";
//        let words = text.split(" "); // разбили строку на массив по пробелу
//        console.log(words); // ["lorem", "ipsum", "dolor"]


let text = "В соглавном бою в  ОАЭ экс-чемпион UFC Петр Ян победил  Кори Сэндхагена и выиграл  пояс временного чемпиона организации в легчайшем весе";
let words = text.split(" ");
function spamCheck (words, ...spam){
	let level = 0;

	for(let elem of spam){
		if (words.includes(elem)) level++

	}

if (level === 0) return'В тексте спама нет';
if (level === 1) return 'В тексте мало спама';
if (level === 2) return 'В тексте есть спам';
if (level === 3) return 'В тексте много спама';
if (level >= 4) return 'Весь текст - спам';
 
}
let res = spamCheck(words, "ОАЭ", "weiejfwfi", "UFC", "Петр");
console.log (res);




// На методы массивов из занятия #5. Дан массив:

//         let numsArr = [
//             [3, 5, -1, 6, 0],
//             [56, -9, 111, 6],
//             [11, 86, -12],
//         ];

//     1) Увеличить каждый элемент массива на 10
    // 2) Создать массив, в который войдут положительные элементы numsArr

     let numsArr = [
            [3, 5, -1, 6, 0],
            [56, -9, 111, 6],
            [11, 86, -12],
        ];

      for (let numss of numsArr){  
      for (let i = 0; i < numss.length; i++) {
	numss[i] = numss[i] +=10;
}
}
      console.log(numsArr)


    let arrayNew=[];
   for (let numss of numsArr){  
   for (let number of numss){
if (number>0) arrayNew.push(number);
   }
}
   console.log(arrayNew);