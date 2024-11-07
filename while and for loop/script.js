// while --> loop it its true


// let userName = "";

// if(userName === ""){
//     console.log("You didnt enter your name")
// }
// else{
//     console.log(`Hello ${userName}`)
// }

// while(userName === "" || userName === null){
//     userName = window.prompt("Enter your name");
// }
// console.log(`Hello ${userName}`)

// do while lopp
// do{
//     userName = window.prompt("Enter your name");
// }
// while(userName === "" || userName === null);

// console.log(`Hello ${userName}`)




///////////////////////////////

// let loggedIn = false;
// let userName;
// let password;

// while(!loggedIn){
//     userName = window.prompt("Enter your username: ");
//     password = window.prompt("Enter your passowrd: ")

//     if(userName === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in")
//     }
//     else{
//         console.log("Invalid credentials! Try again")
//     }
// }

// do{
//     userName = window.prompt("Enter username: ");
//     password = window.prompt("Enter password: ");

//     if(userName === "username" && password === "password"){
//         loggedIn = true;
//         console.log("You are logged in.");
//     }
//     else{
//         console.log("you are not logged in, try again");
//     }
// }while(!loggedIn)


/////////////// FOR LOOP ///////////////////
// limited time run


// let i = 0; meddig fusson?; mit csináljon egy lefutás után?
// for(let i = 10; i > 0; i-=2){
//     console.log(i)
// }
// console.log("Happy ny")


// for(let i = 1; i <= 20; i ++){
    
//     if(i == 13){
//         continue //skippeli a 13-at
//     }
//     else {
//         console.log(i)
//     }
// }


for(let i = 1; i <= 20; i ++){
    
    if(i == 13){
        break //teljesen kilép a loopból
    }
    else {
        console.log(i)
    }
}
