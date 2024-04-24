// can not use '*' multiplier symbol

const billboard = (name, price=30) => {
    let total = 0
    for (let i = 0; i< name.length; i++) {
        total += price
    }
    return total
}

console.log(billboard('Becca'));

