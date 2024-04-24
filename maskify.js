// maskifying the numbers or secret question characters

const maskifyString = (str) => {
    if(str.length <= 4){
        return str
    }

    const maskedStr = '#'.repeat(str.length -4 ) + str.slice(-4);
    
    return maskedStr
}

console.log(maskifyString('inkokoyumurobyi'))