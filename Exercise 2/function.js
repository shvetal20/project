
let num = 20;
function showFirstMessage(text) {
    alert(text);
    let num = 10;
    console.log(num);
}
showFirstMessage("Hello World");
console.log(num);


let calc = function(a,b) {   //function Expresion  --- когда ф-ю присваиваем в переменную*/
    return(a + b);
};
//let calc = (a,b) => a+b;  //стрелочная ф-я

console.log(calc(3,4));

console.log(calc(8,4));

    function retVar() {   
        let num = 50;
        return num;    //return возвращает переменную во внешний мир
    }

    let anotherNum = retVar();  //выполнение функции
    console.log(anotherNum);
    
    /*function Declaration   // это ф-я обьявлена в потоке кода 
    function Expresion      //когда ф-ю присваиваем в переменную*/

    /*методы и свойства строк и чисел
    методы - вспомагательные ф-и.
    строки - вспомагательные значния.*/
    let str = "test";
    console.log(str.length); // количество символов в строке

    console.log(str.toUpperCase()); // пишет большими буквами
    console.log(str.toLowerCase()); //маленькими буквами

    let twelve = "12.2px";
    console.log(Math.round(twelve)); // округляет до целого значения
    console.log(parseInt(twelve)); //целые числа
    console.log(parseFloat(twelve)); // десятичные числа
