function* udacity() {
    yield 'Richard';
    yield 'James';
}

const uda = udacity();
const net = udacity.next();
console.log(net.value);


