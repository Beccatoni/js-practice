// https://www.codewars.com/kata/53d628de83db278fb1000710/train/javascript\

String.prototype.myNewMethod = function(){
    return this.toUpperCase();
}

const x = Symbol('hey');
console.log(x); 
// console.log(x.valueOf())