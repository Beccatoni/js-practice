// factorial of a num
function factorial(num){
    let result = 1
     for(let i = 1; i<=num; i++){
         result *= i;
     }
    let newStr =  result.toString();
    let arr = [...newStr];
    arr.sort()
    
    

}


console.log(factorial(12));

