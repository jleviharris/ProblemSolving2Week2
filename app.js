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
/*let userChoice = prompt('Please enter your starting number');
let userArray = [];
function UserChoiceToArray (userChoice){
    parseInt(userArray.push(userChoice));
    parseInt(userArray.push(userChoice));
    parseInt(userArray.push(userChoice + userChoice));
};


*/
let userChoice;
let userArray;
let cur;
let oneAfter;
let twoAfter;
let oneBefore;

function UserChoiceToArray (userChoice){
    userChoice = prompt('Please enter your starting number');
    userArray = [];
    userArray.push(parseInt(userChoice));
    userArray.push(parseInt(userChoice));
    userArray.push(parseInt(userChoice) + parseInt(userChoice));
    
};
function Fibonacci (){ 
    UserChoiceToArray(userChoice);
for (let i=2; i<100; i++){
    cur = userArray[i];
    oneAfter = userArray[i+1];
    twoAfter = userArray[i+2];
    oneBefore = userArray[i-1];
    do {userArray.push(cur + oneBefore);}
    while (twoAfter = oneAfter + cur)
    };
    console.log(userArray);
};


Fibonacci();