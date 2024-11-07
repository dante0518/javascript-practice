// if statements 

// let age = 13;

// if(age >= 18){
//     console.log('You are old enough to enter this site.')
// }
// else{
//     console.log('You must be 18+ to enter this site.')
// }


// let time = 13;

// if(time < 12){
//     console.log('good morning')
// }
// else {
//     console.log('good afternoon')
// }

// booleans

// let isStudent = true;

// if(isStudent) {
//     console.log('You are a student')
// }
// else{
//     console.log('YOu are not a student')
// }


// nested if 

// let age = 18;
// let hasLicence = true;

// if(age >= 16){
//     console.log('you are old enough to drive');
    
//     if(hasLicence){
//         console.log('You have a licence');
//     }
//     else{
//         console.log('You do not have a licence')
//     }
// }
// else{
//     console.log('You must be 16+ to have a license')
// }


// let age = 0;

// if(age >= 100) {
//     console.log('You are too old to enter this site')
// }
// else if (age == 0) {
//     console.log('You cant enter, You were just born')
// }
// else if (age >= 18) {
//     console.log('You are old enough to enter this site')
// }
// else if(age < 0) {
//     console.log('Your age cant be below 0')
// }
// else{
//     console.log('You must be 18+ to enter this site')
// }

// age submit 

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit')
const resultElement = document.getElementById('resultElement');

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);

if(age >= 100) {
    resultElement.textContent = `You are too old to enter this site`;
}
else if (age == 0) {
    resultElement.textContent = `You cant enter, You were just born`;
}
else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site`;
}
else if(age < 0) {
    resultElement.textContent = `Your age cant be below 0`;
}
else{
    resultElement.textContent = `You must be 18+ to enter this site`;
}

}