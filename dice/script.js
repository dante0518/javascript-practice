// const playerRoll1 =  document.getElementById('playerRoll1');
// const playerRoll2 =  document.getElementById('playerRoll2');
// const result1 = document.getElementById('result1');
// const result2 = document.getElementById('result2');
// const winnerPlayer = document.getElementById('winnerPlayer');


// let number1;
// let number2;

// playerRoll1.onclick = function() {
//     number1 = Math.round(Math.random() * 6);
//     result1.textContent = `Player 1 rolled ${number1}`
// }

// playerRoll2.onclick = function() {
//     number2 = Math.round(Math.random() * 6);
//     result2.textContent = `Player 1 rolled ${number2}`
// }

// function determineWinner() {
//     if (number1 !== undefined && number2 ==! undefined) {
//         if(number1 > number2) {
//             winnerPlayer.textContent = 'Player 1 wins';
//         }
//         else if (number1 < number2) {
//             winnerPlayer.textContent = 'Player 2 wins';
//         }
//         else {
//             winnerPlayer.textContent = 'Its a tie'
//         }

//     }
// }

const playerRoll1 = document.getElementById('playerRoll1');
const playerRoll2 = document.getElementById('playerRoll2');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const winnerPlayer = document.getElementById('winnerPlayer');
const resetButton = document.getElementById('reset')

let number1;
let number2;
let player1Rolled = false;
let player2Rolled = false;

playerRoll1.onclick = function() {
    number1 = Math.floor(Math.random() * 6) + 1; // To get a number between 1 and 6
    result1.textContent = `Player 1 rolled ${number1}`;
    player1Rolled = true;
    determineWinner(); // Check winner after Player 1 rolls
}

playerRoll2.onclick = function() {
    number2 = Math.floor(Math.random() * 6) + 1; // To get a number between 1 and 6
    result2.textContent = `Player 2 rolled ${number2}`;
    player2Rolled = true;
    determineWinner(); // Check winner after Player 2 rolls
}

function determineWinner() {
    if (player1Rolled && player2Rolled) { // Ensure both players have rolled
        if (number1 > number2) {
            winnerPlayer.textContent = 'Player 1 wins';
        } else if (number2 > number1) {
            winnerPlayer.textContent = 'Player 2 wins';
        } else {
            winnerPlayer.textContent = 'It\'s a tie';
        }
    }
}


resetButton.onclick = function() {
    result1.textContent = '';
    result2.textContent = '';
    winnerPlayer.textContent = '';
    player1Rolled = false;
    player2Rolled = false;
    number1 = undefined;
    number2 = undefined;
}