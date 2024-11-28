const array = [1, 3, 5, 2, 4];
const array2 = ['apple', 'banana', 'cherry'];


// console.log(array[3]);
// console.log(array2[2]);
// array length property
// console.log(array2.length);

// push() or pop()
array.push(6);
// console.log(array);
array.pop();
// console.log(array);

array2.push('mango');
array2.push('orange');
// console.log(array2);
array2.pop();
// console.log(array2);

// unshift() or shift(); 
  
array.unshift(9);
array.unshift(10);
// console.log(array);
array.shift()
// console.log(array)

// splice method // 

array.splice(2,2,7);
array2.splice(2,1,'mango');
// console.log(array);
// console.log(array2);

// forEach method // 


array.forEach(function(element){
    // console.log(element);
});


// map method   // 

let double = array.map(num=>num*2);

let squared = array.map(num =>num*num)

// console.log(double)
// console.log(squared)

// filter method //

const newArr = array.filter(num=>num %2 ===0);
// console.log(newArr)

// includes true/false hi return karta h
// console.log(array.includes(3))
// console.log(array2.includes('banana'))

// indexOf element ki index return karta h 
// console.log(array2.indexOf('banana'))
// console.log(array.indexOf(4))

let fruits = ['संतरा', 'सेब', 'केला'];
fruits.sort();
// console.log(fruits); // ['केला', 'संतरा', 'सेब']

// नंबर्स को सॉर्ट करना
let numbers = [40, 1, 5, 200];
numbers.sort((a, b) => a - b);
// console.log(numbers); // [1, 5, 40, 200]
