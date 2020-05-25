
    'use strict';
let arr = [1, 2, 3, 4, 5];
  
arr.pop();
arr.push("5");
arr.shift();
arr.unshift("1");
console.log(arr);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(arr);

let ar = ["first", 2, 3, "four", 5];
ar.forEach(function(item, i, mass) {
    console.log(i + ": " + item + " (масив " + mass + ")");
});
console.log(ar);


let mass = [1, 2, 4, 6, 7];   //выводит значения в масива
  for (let key of mass) {
      console.log(key);
  }

let mast = prompt("", ""),
   art = [];
arr = mast.split(":");
console.log(art);


// let arm = ["rwew", "gry", "tre", "tq"],  //выводит елементы масива в строку
//     i = arm.join(": ");
//     console.log(i);


//  let ar = ["rwew", "gry", "tre", "tq"],  // сортирует елементы масива по алфавиту
//      i = ar.sort();
//     console.log(ar);

// let ar = ["1", "15", "52", "4", "22"],  // сортирует елементы масива по возрастанию
//     i = ar.sort(compareNum);

    function compareNum(a,b) {
        return a-b;
        
    }
    console.log(ar);


let fruits = ["яблоко", "банан"],
    first = fruits[0],
    last = fruits[fruits.lenght - 1];
    fruits.push("апельсин", "лимон");
    fruits.pop();
    fruits.shift();
    console.log(fruits);
    console.log(first, last);
    
fruits.forEach(function(item, index, array) {
    console.log(index, item);
});





