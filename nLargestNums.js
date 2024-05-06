// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript

function largest(n, array) {
    // Find the n highest elements in a list
    let arrSort = array.sort((a,b) => b-a);
    
    
    return arrSort.slice(0, n).reverse();
  }

//   or

const largestNums = (n, arr) => {
     return n === 0 ? [] : arr.sort((a,b)=> a-b).slice(-n);
} 

  console.log(largestNums(4, [1,3,4,4,5,66,57]));
