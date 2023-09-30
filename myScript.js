function getComputerChoice(){
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random()* options.length)];
  return choice
}

console.log(getComputerChoice())

// function plays a single round of RPS
// takes 2 PARAMETERS
// return a string that declares the winner of the round
// make player parameter case-insensitive

function playRPS (playerSelection, computerSelection){
  if (playerSelection == "rock"){
    if (computerSelection =="rock") {
      return "Rock Draw"
    }
    else if (computerSelection == "paper") {
      return "You Lose! Paper beats Rock"
    }
    else {
      return "You Win! Rock beats Scissors"
    }
  }
  else if (playerSelection == "paper"){
    if (computerSelection == "rock") {
      return "You Win! Paper beats Rock"
    }
    else if (computerSelection == "paper"){
      return "Paper Draw"
    }
    else {
      return "You Lose! Scissors beat paper"
    }
  }
  else {
    if (computerSelection == "rock") {
      return "You lose! Rock beats Scissors"
    }
    else if (computerSelection == "paper") {
      return "You win! Scissors beat paper"
    }
    else {
      return "Paper Draw"
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRPS(playerSelection, computerSelection));