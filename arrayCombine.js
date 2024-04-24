/* Combining arrays and returning array with unique values*/

const arrayCombiner = (arr1, arr2) => {
    let combined = arr1.concat(arr2)
    combined = new Set(combined)
    combined = Array.from(combined)
    return combined.sort((a, b) => b-a);
}

console.log(arrayCombiner([1, 2, 3], [1, 2, 3,5,8,0]))