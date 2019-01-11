"use strict";
function changeParagraph(){
    
    let para = document.createElement("p");
    para.setAttribute("id", "para");
    let node = document.createTextNode(document.getElementById("text").value);
    para.appendChild(node);

    let element = document.getElementById("div1");
    element.appendChild(para);
}

function deleteParagraph(){
    document.getElementById("para").remove();
}