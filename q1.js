/*
Write a javascript program to check two numbers 
and return true if one of the number is 100 or if the sum 
of the two numbers is 100
*/

function checkNum (num1, num2) {
    if (num1  ===100 || num2===100 || num1+num2 ===100){
        return true;
    }
    return false;
}

console.log(checkNum(100,100));
console.log(checkNum(-1,100));
console.log(checkNum(0,100));
console.log(checkNum(2,930));