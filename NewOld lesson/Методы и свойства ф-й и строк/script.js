"use strict";

// const str = "test";
// const arr = [1, 2, 4];
// 
// console.log(str.length);     //количество символов в строке


const str = "tEst";

console.log(str.toUpperCase());  //выводит большими буквами
console.log(str.toLowerCase());  //выводит маленькими буквами

console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "hello World";

console.log(logg.slice(6, 11));      // метод вырезание строки

console.log(logg.substring(6, 11));  // метод вырезание строки

console.log(logg.substr(6, 5 ));


//числа

const num = 12.2;
console.log(Math.round(num));       //округление до целого числа

const test = "12.2px";
console.log(parseInt(test));        //выводит в числовом формате только целые числа

console.log(parseFloat(test));      //выводит в числовом формате  числа
