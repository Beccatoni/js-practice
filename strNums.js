// Adding numbers in a string

const sumOfNums = str => {
    let nums = str.match(/\d+/g) || [];
    console.log(nums)
    return nums.reduce((sum, num) => sum + parseInt(num), 0)
}

console.log(sumOfNums('1234 abcd3'))

const sumOfNums2 = str => {
    let sum = 0
   for (let i = 0; i<str.length; i++) {
    let char = str.charAt(i); // The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
    if(!isNaN(char) && char !== ' '){
        sum += parseInt(char);
    }
   }
   return sum
}
// console.log(sumOfNums2('1234 rsdmh3'))

