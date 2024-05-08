function* generatorFunction() {
    yield 'Hello';
    yield 'World';
    yield 'Worl';
    yield 'Wor';
    yield 'Wo';
    yield 'W';
    yield 'World';
  }

const one = generatorFunction();
console.log(one);

one.next()
console.log(one.next().value);