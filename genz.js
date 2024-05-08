function* simpleGenerator(){
    yield 'One'
    yield 'Two'
    yield 'Three'
}

const generatorObj = simpleGenerator();
console.log(generatorObj.next());

console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());