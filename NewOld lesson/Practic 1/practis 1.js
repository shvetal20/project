'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastNameMovie = prompt("Один из последних посмотреных фильмов",""),
    yourOpinion = +prompt("На сколько оцените его",""),
    lastNameMovies = prompt("Один из последних посмотреных фильмов",""),
    yourOpinions = +prompt("На сколько оцените его","");

personalMovieDB.movies[lastNameMovie] = yourOpinion;
personalMovieDB.movies[lastNameMovies] = yourOpinions;


console.log(personalMovieDB);