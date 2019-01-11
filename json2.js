"use strict";
let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'
request.send();

let kings;
request.onload = function () {
kings = request.response;

// console.log(JSON.stringify(kings, null, 2));
}

function searchName(){
    let name=kings.filter(s=>s.nm===document.getElementById("kingName").value)
    console.log(JSON.stringify(name, null, 2))
}