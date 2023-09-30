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

