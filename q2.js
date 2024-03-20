/* Write a javascript program to get the extension of a filename */

const fileExtensionCheck = (filename) =>{
    for (let i=filename.length-1; i>=0; i--){
        if (filename[i] === '.'){
            return `The extension of the given file ${filename} is: ${filename.slice(i, filename.length)}`
        } 
    }
}

console.log(fileExtensionCheck('hello.txt'));
console.log(fileExtensionCheck('hello.txt.js.json.erc'))
// more good or better 
// const fileExtensionCheck = (fileExtension) => fileExtension.slice(fileExtension.lastIndexOf('.'));

// console.log(fileExtensionCheck('hello.txt'));
// console.log(fileExtensionCheck('hello.txt.rw.com'));
// console.log(fileExtensionCheck('hello.txt.js.json.erc'));
