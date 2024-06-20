"use strict";
// question#1
// Write a TypeScript function that takes a number and returns its square after a delay of 2 seconds.
//  Use the setTimeout function to simulate the delay.
function squareAfterDelay(number) {
    return new Promise((res) => {
        setTimeout(() => {
            res(number * number);
        }, 2000);
    });
}
squareAfterDelay(4).then((result) => (console.log(result)));
// question#2
// Write a TypeScript function that takes a string and returns its length after a delay of 1 second:
function lengthAfterDelay(str) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(str.length);
        }, 1000);
    });
}
// question#
//  Write a TypeScript function that takes a boolean and returns its negation after a delay of 3 seconds:
function negateAfterDelay(boolean) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(!boolean);
        }, 3000);
    });
}
