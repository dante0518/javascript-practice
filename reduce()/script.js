// .reduce() = reduces the elements of an array to a single value


const prices = [2500, 2600, 410, 950, 1200];

const total = prices.reduce(sum);

console.log(`Your total is ${total} Ft`)

function sum(accumulator, element){
    return accumulator + element;
};

// function sum(previous, next){
//     return previous + next;
// };

const grades = [75, 60, 91, 80, 48, 95];

const max = grades.reduce(getMax);
const min = grades.reduce(getMin);

console.log(max);
console.log(min);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
};

function getMin(accumulator, element){
    return Math.min(accumulator, element);
};