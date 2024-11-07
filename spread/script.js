// spread == '...' allows an interable such as an array or string to be expanded into separate elements (unpack elements)

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);

// let userName = 'Bro Code';
// let letters = [...userName];
// let letters = [...userName].join("-");


// console.log(letters);


let fruits = ['apple', 'orange', 'banana'];
let newFruits = [...fruits];
let vegetables = ['carrot', 'celery', 'potatos'];
// let foods = [...fruits, ...vegetables]; //combine multiple arrays
let foods = [...fruits, ...vegetables, 'eggs', 'milk']; //add new elements
let mindenes = [...foods, ...vegetables, ...fruits];
console.log(fruits)

console.log(foods);