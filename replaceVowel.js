/*
a js program to replace vowels in a 
sentence with a special character
*/

const replaceVowels = (sentence, specialChar) =>{
   return sentence.replace(/[aeiou]/gi, specialChar)
}

console.log(replaceVowels('Hello world!'));