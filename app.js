"use strict"
// 1. Happy numbers
// (1) Create a function that takes in string
// (2) split string into two strings
// (3) square both numbers and add together
// (4) repeat till it breaks down to 1





// 2. Prime Numbers
// (1) I want a function that takes in a string
// (2) string to be looped through
// (3) check for prime numbers and add if theyre prime
// (4) only numbers 1-100

let primeNumbersArray = [];
/*function PrimeNumbers (array){
    for (let i=0; i<101;){
        if(parseInt(array[i]) % 2 = 0){
            i++;}
            else primeNumbersArray.push(parseInt(array[i]));
        };console.log(primeNumbersArray);
    }
};
PrimeNumbers(primeNumbersArray);
*/
function PrimeNumbers (array){
    for (let i=1; i<101; i++){
        if ( i % 2&&3 != 0) {
            array.push(i);
        }
    }console.log(array);
};
PrimeNumbers(primeNumbersArray);




/*
// 3. Fibonacci
// (1) Ill need a function that takes in a string
// (2) loop through the string
// (3) check if last number and the previous equal the current
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
*/