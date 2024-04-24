// // checking if a variable is an array in js

// let myVar = [1,2,3,4,6];

// if (Array.isArray(myVar)){
//     console.log('Your variable  is an array');
// }else{
//     console.log('Your variable is not an array');
// }



// // iterating over an array

// for (let i = 0; i < myVar.length; i++){
//     console.log(myVar[i]);
// }


// // using foreach
// myVar.forEach((element) => console.log(`Two: ${element}`));

// for (let element of myVar){
//     console.log(`Three: ${element}`);
// }


// // removing an element from an array:

// // 1 using splice
// myVar.splice(1, 1);
// console.log(myVar);


// // using filter
// const val = [4,6,2,3,8]
// const filtered = val.filter((element) => element%2 !== 0)
// console.log(filtered)

// // finding the index of particular element

// let index = val.indexOf(3)
// console.log(index)


// shallow and deep copy of the array
let original = [[1], [2], [3], [4]];
let shallowArray = original.slice()
let deepCopy = JSON.parse(JSON.stringify(original));

original[2].push(7);
console.log('Shallow:',shallowArray)
console.log('Deep: ',deepCopy)


// satisfying a condition
let nums = [5,7,8,9];
let greaterThanseven = nums.every((num) => num>7)

console.log(greaterThanseven) //returns false


// converting an array into a string

console.log(nums.join(''))
console.log(JSON.stringify(nums));

