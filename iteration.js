"use strict";
function iteration1() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

function iteration2() {
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

function iteration3(countUpTo, wordFor3, wordFor5) {
    for (let i = 1; i < countUpTo; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(wordFor3 + wordFor5);
        }
        else if (i % 3 == 0) {
            console.log(wordFor3);
        }
        else if (i % 5 == 0) {
            console.log(wordFor5);
        }
        else {
            console.log(i);
        }
    }
}

function iteration4(numberToDivide) {
    let newNumber = numberToDivide;
    for (let i = 0; i < numberToDivide; i++) {
        if (numberToDivide < 3) {
            console.log("2 - 1 = 1");
            break;
        }
        else {
            if (newNumber == 1) {
                console.log("1")
                break;
            }
            else if (newNumber % 3 == 0) {
                console.log(newNumber + " / 3 = " + (newNumber / 3));
                newNumber = newNumber / 3;
            }
            else {
                console.log(newNumber + " - 1 = " + (newNumber - 1));
                newNumber--;
            }
        }

    }

}