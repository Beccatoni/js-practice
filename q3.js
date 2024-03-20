/* Write a Javascript program to replace every character in 
a given string with the character following it in the alphabet
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const stri = 'abc';
const replaceChar = (string) => {
  
const strArr = string.split();
  
  for (let i=0; i<strArr.length; i++){

    if(alphabet.includes(strArr[i])){
      const charIndex = alphabet.indexOf(strArr[i]);
      strArr[i] = alphabet[charIndex + 1] ;
      
      return strArr.join('');
      
    }
  }
}

console.log(replaceChar(stri));