String.prototype.isUpperCase = () => {
    return this == this.toUpperCase();
}

const isUppercase = (value) =>{
    return value === value.toUpperCase();
}

console.log(isUppercase('BECCA'));
