// Array = variable like structure that can hold more than 1 value


let fruits = ["apple", "orange", "banana"];

// fruits[3] = "coconut"

// console.log(fruits)

// fruits.push("coconut") //add element
// fruits.pop("banana") //remove element
// fruits.unshift('mango') //add element to beginning
// fruits.shift(); //remove element from beginning

// let numOfFruits = fruits.length;
// let index = fruits.indexOf('banana') //index == -1 element not found

// for(let i =0; i < fruits.length; i++ ){
//     console.log(fruits[i])
// }

// for(let i = fruits.length -1 ; i >= 0; i-- ){
//     console.log(fruits[i])
// }

//shortuc to display array

// for(let fruit of fruits) {
//     console.log(fruit)
// }


// fruits.sort(); //alphabetcal
fruits.sort().reverse() //reversed

console.log(fruits);
// console.log(numOfFruits);
// console.log(index);