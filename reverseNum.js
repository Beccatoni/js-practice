// reversing any number by first converting it into a string

const numReverse = (n) => {
    return n.toString().split('').reverse().map(nString => parseInt(nString))
}

console.log(numReverse(2000));