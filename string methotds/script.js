// Strings



// let userName = " Skaikru ";

// console.log(userName.charAt(1));
// console.log(userName.indexOf("s"));
// console.log(userName.length);

// userName = userName.trim();
// userName = userName.toLocaleUpperCase();
// userName = userName.toLocaleLowerCase();
// userName = userName.repeat(3);
// console.log(userName)


// let result = userName.startsWith(" ");
// console.log(result)

// if (result) {
//     console.log('your username cant begin with " "');
// }
// else{
//     console.log(userName);
// }


// let result = userName.endsWith(" ");
// console.log(result)

// if (result) {
//     console.log('your username cant end with " "');
// }
// else{
//     console.log(userName);
// }

// let result = userName.includes(" ");
// console.log(result)

// if (result) {
//     console.log('your username cant include " "');
// }
// else{
//     console.log(userName);
// }


// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "/");

// console.log(phoneNumber)

// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.padStart(20, "0");

// console.log(phoneNumber)


// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.padEnd(15, "0");

// console.log(phoneNumber)


// STRING SLICING

// const fullName = "Peter Dobi";

// // let firstName = fullName.slice(0, 5);  // kell +1 az utolsó index kiírásához
// // let lastName = fullName.slice(6); // nem kell ending index mindig

// // let firstChar = fullName.slice(0, 1);
// // let lastChar = fullName.slice(-2);

// // console.log(firstName);
// // console.log(lastName);
// // console.log(firstChar);
// // console.log(lastChar);

// // make it more dynamic, where is the space??

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1); // +1, hogy a space ne legyen included

// console.log(firstName);
// console.log(lastName);


const email = "dante0518@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1)

console.log(userName);
console.log(extension)





