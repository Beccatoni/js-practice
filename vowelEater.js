const replaceVowel = str => {
    return str.replace(/[aeiou]/gi, '!')
} 

console.log(replaceVowel('hi there !'))