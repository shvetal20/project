'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");
        
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

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

console.log(personalMovieDB);


// console.log(personalMovieDB);

// let i = 1;
// while (i < 2) {
//     let lastNameMovie = prompt("Один из последних посмотреных фильмов",""),
//         yourOpinion = +prompt("На сколько оцените его","");
//     if (lastNameMovie != null && yourOpinion != null && lastNameMovie != "" 
//         && yourOpinion != "" && lastNameMovie.length < 50) {
//         personalMovieDB.movies[lastNameMovie] = yourOpinion;
    
// }
