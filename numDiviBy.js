// Find numbers which are divisible by given number
const divisibleByNumber = (numbers, number) => {
   let possibleNums = []
    for (let i = 0; i < numbers.length; i++) {
        if(number % numbers[i] === 0){
            possibleNums.push(numbers[i])
            
        }
    }

    return possibleNums
}

// console.log(divisibleByNumber([2,4,6,9], 3));

// OR

const isDivisible = (numbers, number) => {
    return numbers.filter((num) => num % number === 0);
}

console.log(isDivisible([2,4,6,9], 3));

