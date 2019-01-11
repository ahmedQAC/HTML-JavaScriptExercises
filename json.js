"use strict";
var requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'
request.send();
request.onload = function () {
var superHeroes = request.response;
//do stuff with superHeroes

console.log(JSON.stringify(superHeroes, null, 2));

}

