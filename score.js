// Iteration 5: Store the player score and display it on the game over screen
const scoreBox =document.getElementById("score-board")
let score = localStorage.getItem("score")
scoreBox.innerHTML=score;
const playAgainButton = document.getElementById("play-again-button")
playAgainButton.onclick=()=>{
location.href="game.html"
}