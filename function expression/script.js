// function declaration = define a reusable block of code
// function expressions = a way to define a function as values or variables


// function hello(){   //function
//     console.log('Hello');
// };

// const hello = function(){
//     console.log('Hello');
// };

// hello();


//ENTIRE FUNCTION AS AN ARGUMENT

// setTimeout(function(){
//     console.log('Hello')
// }, 3000);


const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function square(element){
    return Math.pow(element, 2);
});

const cube = numbers.map(function cube(element){
    return Math.pow(element, 3);
});

console.log(squares);
console.log(cube);

// function square(element){
//     return Math.pow(element, 2);
// };

const evenNums = numbers.filter(function(element){
    return element % 2 ===0;
});

console.log(evenNums);

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(total)
