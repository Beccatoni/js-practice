/* 
Jack really likes his number five: the trick here is that you have to 
multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/

const multiplyByFive = (number) => {
    // const digits = Math.abs(num).toString().length;
    // return num * Math.pow(5, digits); 
    const numLength = Math.abs(number).toString().length;
    return number * 5 ** numLength
}

console.log(multiplyByFive(222));
console.log(multiplyByFive(-30));
console.log(multiplyByFive(40));