function* createSundae(){
    const toppings = [];

    toppings.push(yield);
    toppings.push(yield);
    toppings.push(yield);

    console.log(toppings)
    return toppings;
}

let it = createSundae();
it.next('hot fudge');
it.next('sprinkles');
it.next('whipped cream');
it.next();