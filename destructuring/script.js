// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = to perform array destruction
// {} = to perform object destructuring


// EXAPLE 1
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b)


// EXAMPLE 2 
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

// with indexes

// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors)


// EXAMPLE 3
// ASSING ARRAY ELEMENTS TO VARIABLES

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor, secondColor, thirdColor);
console.log(extraColors);

// EXAMPLE 4
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry cook",
};
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 254,
};

const {firstName, lastName, age, job="Unemployed"} = person2; //default value=unemployed
console.log(firstName, lastName, age, job);


// EXAMPLE 5
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName}, ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
};

displayPerson(person2);