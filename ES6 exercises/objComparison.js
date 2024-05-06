/* Write a JavaScript program to compare two objects to determine 
if the first contains equivalent property values to the second one */


const areObjsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.lengh){
        return `The given objects are not equal!`
    }
    
    for(const key of keys1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

let obj1 = {
    name: "John",
    age: 23,
    degree: "CS"
};

let obj2 = {
    name: "John",
    age: 23,
    degree: "CS"
};

console.log(areObjsEqual(obj1, obj2)); 