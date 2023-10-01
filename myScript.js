function getComputerChoice(){
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random()* options.length)];
  return choice;
}

let pcScore = 0
let playerScore = 0

function playRPS (playerSelection, computerSelection){
  if (playerSelection.toLowerCase() == "rock"){
    if (computerSelection =="rock") {
      console.log("Rock Draw");
      return;
    }
    else if (computerSelection == "paper") {
      console.log("You Lose! Paper beats Rock");
      return pcScore += 1;
    }
    else {
      console.log("You Win! Rock beats Scissors");
      return playerScore += 1;
    }
  }
  else if (playerSelection.toLowerCase() == "paper"){
    if (computerSelection == "rock") {
      console.log("You Win! Paper beats Rock");
      return playerScore += 1
    }
    else if (computerSelection == "paper"){
      console.log("Paper Draw");
      return;
    }
    else {
      console.log("You Lose! Scissors beat paper")
      return pcscore += 1;
    }
  }
  else if (playerSelection.toLowerCase() == "scissors"){
    if (computerSelection == "rock") {
      console.log("You lose! Rock beats Scissors");
      return pcScore += 1;
    }
    else if (computerSelection == "paper") {
      console.log("You win! Scissors beat paper");
      return playerScore +=1;
    }
    else {
      console.log("Scissors Draw");
    }
  }
  else {
    return "Choose one! Rock, paper or scissors?"
  }
}
  

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
// console.log(playRPS(playerSelection, computerSelection));
// console.log(playerSelection)
// console.log("pc " + computerSelection)
//advice from odin member. write if computer choice = your choice , instead of if statement for each tie, 

function game(){
  playRPS (playerSelection, getComputerChoice())
  playRPS (playerSelection, getComputerChoice())
  playRPS (playerSelection, getComputerChoice())
  playRPS (playerSelection, getComputerChoice())
  playRPS (playerSelection, getComputerChoice())
  return `The score is: Player:${playerScore} - PC:${pcScore}` //this function does not work, fix tommorrow
}
console.log(game(pcScore, playerScore))

if (playerScore > pcScore){
  console.log("Player won!");
}
else{
  console.log("PC won");
}