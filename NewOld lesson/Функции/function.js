"use strict";

//Function Declaration
let num = 10;
function showFirstMessage(text) {
    console.log(text);
    let num = 20;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4,3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//Function Expression
const logger =function() {
    console.log("Heloo");
};
logger();

//Cтрелочные функции

const calc = (a, b) =>  a + b;