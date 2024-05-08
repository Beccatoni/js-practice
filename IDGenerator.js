function* generateId(){
    let id = 1;

    while(true){
        let i = yield id;
        if (i != null){
            id += i;
        } else {
            id += 1;
        }
    }
}

const gen = generateId();

console.log(gen.next());
console.log(gen.next(5));
console.log(gen.next());
