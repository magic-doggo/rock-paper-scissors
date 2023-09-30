function getComputerChoice(){
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random()* options.length)];
  return choice;
}


function playRPS (playerSelection, computerSelection){
  if (playerSelection.toLowerCase() == "rock"){
    if (computerSelection =="rock") {
      return "Rock Draw";
    }
    else if (computerSelection == "paper") {
      return "You Lose! Paper beats Rock";
    }
    else {
      return "You Win! Rock beats Scissors";
    }
  }
  else if (playerSelection.toLowerCase() == "paper"){
    if (computerSelection == "rock") {
      return "You Win! Paper beats Rock";
    }
    else if (computerSelection == "paper"){
      return "Paper Draw";
    }
    else {
      return "You Lose! Scissors beat paper";
    }
  }
  else if (playerSelection.toLowerCase() == "scissors"){
    if (computerSelection == "rock") {
      return "You lose! Rock beats Scissors";
    }
    else if (computerSelection == "paper") {
      return "You win! Scissors beat paper";
    }
    else {
      return "Scissors draw";
    }
  }
  else {
    return "Choose one! Rock, paper or scissors?"
  }
}
  

const playerSelection = "Scissors";

const computerSelection = getComputerChoice();
console.log(playRPS(playerSelection, computerSelection));
console.log(playerSelection)
console.log("pc " + computerSelection)
