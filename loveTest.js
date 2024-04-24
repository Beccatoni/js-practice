// opposites attracts

const loveFunction = (flower1, flower2) =>{
    if (flower1.length % 2 === 0 && flower2.length % 2 !== 0){
        return true
    }
    return false
}

console.log(loveFunction('rose', 'margarite'));