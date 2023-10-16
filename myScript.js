function getComputerChoice(){
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random()* options.length)];
  return choice;
}

let pcScore = 0
let playerScore = 0
let playerSelection;

const rockChoice = document.querySelector("#rock");
const paperChoice = document.querySelector("#paper")
const scissorsChoice = document.querySelector("#scissors")

rockChoice.addEventListener("click", rockClicked);
function rockClicked() {
  playerSelection = "rock";
  game();
  if (playerScore < 5 && pcScore < 5){
    currentScore.textContent = `The score is: Player:${playerScore} - Computer:${pcScore}`
  }
  else if (playerScore < 5 && pcScore == 5){
    currentScore.textContent = `The PC won! Player:${playerScore} - Computer:${pcScore}`
    playerScore = 0
    pcScore = 0
  }
  else if (playerScore == 5 && pcScore < 5){
    currentScore.textContent = `The Player won! Player:${playerScore} - Computer:${pcScore}`
    playerScore = 0
    pcScore = 0
  }
  return;
}

paperChoice.addEventListener("click", paperClicked);
function paperClicked() {
  playerSelection = "paper";
  game();
  if (playerScore < 5 && pcScore < 5){
    currentScore.textContent = `The score is: Player:${playerScore} - Computer:${pcScore}`
  }
  else if (playerScore < 5 && pcScore == 5){
    currentScore.textContent = `The PC won! Player:${playerScore} - Computer:${pcScore}`
    playerScore = 0
    pcScore = 0
  }
  else if (playerScore == 5 && pcScore < 5){
    currentScore.textContent = `The Player won! Player:${playerScore} - Computer:${pcScore}`
    playerScore = 0
    pcScore = 0
  }
  return;
}

scissorsChoice.addEventListener("click", scissorsClicked);
function scissorsClicked() {
  playerSelection = "scissors";
  game();
  if (playerScore < 5 && pcScore < 5){
    currentScore.textContent = `The score is: Player:${playerScore} - Computer:${pcScore}`
  }
  else if (playerScore < 5 && pcScore == 5){
    currentScore.textContent = `The PC won! Player:${playerScore} - Computer:${pcScore}`
    playerScore = 0
    pcScore = 0
  }
  else if (playerScore == 5 && pcScore < 5){
    currentScore.textContent = `The Player won! Player:${playerScore} - Computer:${pcScore}`
    playerScore = 0
    pcScore = 0
  }
  return;
}



function playRPS (playerSelection, computerSelection){
  if (playerSelection.toLowerCase() == "rock"){
    if (computerSelection =="rock") {
      console.log("Rock Draw");
      roundWinner.textContent = "Rock Draw"
      return;
    }
    else if (computerSelection == "paper") {
      // console.log("You Lose! Paper beats Rock");
      roundWinner.textContent = "You Lose! Paper beats Rock"
      return pcScore += 1;
    }
    else {
      // console.log("You Win! Rock beats Scissors");
      roundWinner.textContent = "You Win! Rock beats Scissors"
      return playerScore += 1;
    }
  }
  else if (playerSelection.toLowerCase() == "paper"){
    if (computerSelection == "rock") {
      // console.log("You Win! Paper beats Rock");
      roundWinner.textContent = "You Win! Paper beats Rock"
      return playerScore += 1
    }
    else if (computerSelection == "paper"){
      // console.log("Paper Draw");
      roundWinner.textContent = "Paper Draw"
      return;
    }
    else {
      // console.log("You Lose! Scissors beat paper")
      roundWinner.textContent = "You Lose! Scissors beat paper"
      return pcScore += 1;
    }
  }
  else if (playerSelection.toLowerCase() == "scissors"){
    if (computerSelection == "rock") {
      // console.log("You lose! Rock beats Scissors");
      roundWinner.textContent = "You lose! Rock beats Scissors"
      return pcScore += 1;
    }
    else if (computerSelection == "paper") {
      // console.log("You win! Scissors beat paper");
      roundWinner.textContent = "You win! Scissors beat paper"
      return playerScore +=1;
    }
    else {
      // console.log("Scissors Draw");
      roundWinner.textContent = "Scissors Draw"
    }
  }
  else {
    return "Choose one! Rock, paper or scissors?"
  }
}
  
const computerSelection = getComputerChoice();
//advice from odin member. write if computer choice = your choice , instead of if statement for each tie. maybe add a "winning" else, where you contain all winning combinations with ||

function game(){
  playRPS (playerSelection, getComputerChoice())
  console.log(`The score is: Player:${playerScore} - PC:${pcScore}`)
  return `The score is: Player:${playerScore} - PC:${pcScore}` 
}

const currentScore = document.createElement("p")
const roundWinner = document.createElement("p")
const textBelow = document.querySelector("div")
textBelow.appendChild(currentScore)
textBelow.appendChild(roundWinner)