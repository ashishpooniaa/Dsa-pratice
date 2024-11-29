let str = 'Hello World';
let str3 ='How Are You'

// string ki length //
console.log(str.length);

// String slice method//
console.log(str.slice(6,11));

// string ki substring method //
console.log(str.substring(0,5))

// string ki substr method//
console.log(str.substr(3,4))

// replace method //
console.log(str.replace('hello','Ram Ram'))

// replaceAll method / 
let str2 = 'hello, hello, world'
console.log(str2.replaceAll('hello','Ram'))

// toUpperCase method //
console.log(str.toUpperCase())

// toLowerCase method //
 console.log(str.toLowerCase())
 
//  concat method //
console.log(str.concat(' ',str3))


 
// trim method //
let str4 = '    Hello World    ';
console.log(str4.trim());

// trimStart method //
console.log(str4.trimStart());

// trimEnd method //
console.log(str4.trimEnd());

// split method //
console.log(str.split(' '))


 

let text = "Hello World World";
let index = text.indexOf("World");  
console.log(index)   
let lastIndex = text.lastIndexOf("World"); 
console.log(lastIndex)

// includes(), startsWith(), endsWith() method //

let text2 = "Hello World";
console.log(text2.includes("World"));     
console.log(text2.startsWith("Hello"));   
console.log(text2.endsWith("World"));

// charAt() and charCodeAt() method //

let text3  = "Hello";
console.log(text3.charAt(0));      
console.log(text3.charCodeAt(0));  