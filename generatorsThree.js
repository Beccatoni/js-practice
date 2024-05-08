function* getEmployee(){
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for(const name in names){
        facts.push(yield name);

    }
    console.log(facts)
}

const getEmployeIterator = getEmployee();

let name = getEmployeIterator.next().value;

name = getEmployeIterator.next(`${name} is cool`).value;
console.log(name);

name = getEmployeIterator.next();