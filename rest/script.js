// rest parameter = (...rest) allow a function work with a variable number of argumbents by bundling them into an array
// spread = unpack an array
// rest = bundle separate elements into an array


// function openFridge(...foods) {
//     console.log(foods);
// };

// function getFood(...foods){
//     return foods;
// };

// const food1 = 'pizza';
// const food2 = 'hamburger';
// const food3 = 'sushi'
// const food4 = 'hotdog'
// const food5 = 'ramen'

// // openFridge(food1, food2, food3, food4, food5)

// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);



// function sum(...numbers) {
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     };
//     return result;
// }

// const total = sum(1, 2, 5);

// console.log(`Your total is $${total}`);


// function getAverage(...numbers) {
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     };
//     return result / numbers.length;
// }

// const total2 = getAverage(75, 100, 85, 90, 50);

// console.log(total2);


// combine strings

function combineStrings(...strings){
    return strings.join(' ')
};

const fullName = combineStrings('Mr.', "Sponge", "Bob", "III");

console.log(fullName);