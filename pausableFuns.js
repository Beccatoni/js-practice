// generators
function* getEmployee(){
    console.log('The function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Orit', 'Richard'];

    for(const name of names){
        console.log(name);
    }
    console.log('The function has ended');
}

const getEmployeIterator = getEmployee();
getEmployeIterator.next();