'use strict';

let title = document.getElementById('title'),
    menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement('li'),
    prompts = document.querySelector('#prompt'),
    adv = document.getElementsByClassName('adv')[0]


menu.insertBefore(menuItem[2], menuItem[1]);                           //поменяли местами два элемента

menuItemLi.classList.add('menu-item');                                //сщздаем новую кнопку(5)
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";   //меняем картинку

title.textContent = "Мы продаем только качественную техгику Apple";  //меняем текст

adv.remove();                                                         //удаляем рекламу

let opinion = prompt("Ваше мнение о технике Apple?");                 // спрашиваем о технике Apple
prompts.textContent = opinion;
    
