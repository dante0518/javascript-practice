// arrow functions = concise way to write function expressions,
// functions that used once

// function hello() {
//     console.log('Hello')
// };

// hello();


// const hello = function(){
//     console.log('Hello')
// };

// hello();


// const hello = (name, age) => {console.log(`Hello ${name}`);
//                             console.log('You are old');
//                             console.log(`You are ${age} years old`)}

// hello('Bro', 25);


// setTimeout(function() {
//    console.log('Hello') 
// }, 3000);

// setTimeout( () => {
//     console.log('Hello')
// }, 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares)
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes)

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums)

const oddNums = numbers.filter((element) => element !== 0);
console.log(oddNums)

const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total)