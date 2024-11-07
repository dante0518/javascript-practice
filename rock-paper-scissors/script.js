const playerChoice = ["rock", "paper", "scissors"];
const rollPlayer1 = document.getElementById('rollPlayer1')
const result1 = document.querySelector('.result1')


rollPlayer1.onclick = function() {
    result1.textContent = 'PLAYER 1 IS WINNER'
}