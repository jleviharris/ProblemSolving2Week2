"use strict"
// 1. Happy numbers

// 2. Prime Numbers
// (1) I want a function that takes in a string
// (2) string to be looped through
// (3) check for prime numbers
// (4) only numbers 1-100
/*
function PrimeNumbers (string){
    for (let i=0; i<string.length; i++){

    }
}
*/
// 3. Fibonacci
// (1) Ill need a function that takes in a string
// (2) loop through the string
// (3) check if last number and the previous equal the current
let array = [1, 1, 2];

function Fibonacci (array){
    
for (let i=2; i<100; i++){
    let cur = array[i];
    let oneBefore = array[i-1];
    let twoBefore = array[i-2];
    if (cur = oneBefore + twoBefore && i<=100){
        array.push(array[i]);
    }
     
    }
    console.log(array);};

Fibonacci(array);