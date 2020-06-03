'use strict';
        
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");

    while (numberOfFilms == "" || numberOfFilms == null
    || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    
}

rememberMyFilms();

function detectPersonalLevel(){
    for (let i = 1; i < 2; i++) {    
        let lastNameMovie = prompt("Один из последних посмотреных фильмов",""),
            yourOpinion = +prompt("На сколько оцените его","");
        if (lastNameMovie != null && yourOpinion != null && lastNameMovie != "" 
            && yourOpinion != "" && lastNameMovie.length < 50) {
            personalMovieDB.movies[lastNameMovie] = yourOpinion;
            console.log("Done");
        } else {
            console.log("Error");
            i--;
        }
       
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
       console.log(performance);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDB.genres[i - 1] = genre;
       
    }
}
writeYourGenres();

console.log(personalMovieDB);

