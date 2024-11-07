// callback = a function that is passed as an argument to another function
// reading files, network requests, interacting with databases
// 'Hey, when you're done, call this next'
// ha sokaig tart vmi betoltese akkor a program lefut majd viosszatér a betoltes utan

// function hello(callback) {
//     console.log("Hello");
//     callback();
// }

// function wait() {
//     console.log('wait')
// };

// function leave() {
//     console.log('Leave')
// };

// function goodbye() {
//     console.log("Goodbye");
// };

// hello(wait);


sum(displayPage, 1, 2)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
};

function displayConsole(result){
    console.log(result);
};

function displayPage(result){
    document.getElementById('myH1').textContent = result;
}

