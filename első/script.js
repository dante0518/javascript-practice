// function myFunction() {
//     document.getElementById("demo1").innerHTML = "Hello!"
// }


// let username

// username = window.prompt("Whats your username?")

// document.getElementById('mySubmit').onclick = function () {
//    username = document.getElementById('myText').value;
//    document.getElementById('myH1').textContent = `Hello, ${username}`
// }

// let age = window.prompt("How old are you?");
// age = Number(age)
// age += 1

// console.log(age, typeof age);

// const PI = 3.141592;
// let radius;
// let circumference;

// // radius = window.prompt('Enter the radius of a circle')

// document.getElementById('mySubmit').onclick = function(){
//    radius = document.getElementById('myText').value;
//    radius = Number(radius);
//    circumference = 2 * PI * radius;
//    document.getElementById('myH3').textContent = circumference + " cm";
// }


// Counter program 

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn')
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function() {
   count ++;
   countLabel.textContent = count;
};

decreaseBtn.onclick = function() {
   count --;
   countLabel.textContent = count;
};

resetBtn.onclick = function() {
   count = 0;
   countLabel.textContent = count;
}



