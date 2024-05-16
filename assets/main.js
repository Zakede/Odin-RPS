const choices = ["rock", "paper", "scissors"];

var humanScore  = 0;
var computerScore = 0;

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
}


function gethumanChoice() { 
    alert("Choose rock, paper or scissors.");
    let humanChoice = prompt("Enter your choice: ");
}

function playRound() {
    getComputerChoice();
    gethumanChoice();

    
}