const choices = ["rock", "paper", "scissors"];

var humanScore = 0;
var computerScore = 0;

function computerSelection() {
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    alert("Choose rock, paper or scissors.");
    return computerSelection;

}


function playRound() {

    computerSelection();
    let humanSelection = prompt("Enter your choice: ");

    if (humanSelection === computerSelection) {
        console.log("You Chose " + humanSelection + " and Computer Chose " + computerSelection + "!");
        console.log("It's a tie!");

    } else if (humanSelection === "rock" && computerSelection === "scissors" ||
        humanSelection === "paper" && computerSelection === "rock" ||
        humanSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        console.log("You Chose " + humanSelection + " and Computer Chose " + computerSelection + "!");
        console.log("You Win, Your score " + humanScore);

    } else {
        computerScore++;
        console.log("You Chose " + humanSelection + " and Computer Chose " + computerSelection + "!");
        console.log("You Lose, Computer score " + computerScore);
    }

    console.log("Your Final Score is: " + humanScore);

}


playRound();