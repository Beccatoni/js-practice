// 
function sumDigits(number) {
    let numStr = number.toString().trim('-');
    console.log(numStr)
    let sum = 0
    for(let i = 0; i<numStr; i++){
      if(numStr[i])
      sum += numStr[i];
    }
    return sum
  }

  sumDigits(-5)
  
  