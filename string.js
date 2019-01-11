"use strict";

function string4(inputString) {
    let counter = 0;
    for (let i = 0; i < inputString.length - 2; i++) {
        if (inputString.charAt(i) == inputString.charAt(i + 1) && inputString.charAt(i + 1) == inputString.charAt(i + 2)) {
            counter++;
        }

    }
    console.log(counter);
}