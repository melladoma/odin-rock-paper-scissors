const possibleChoices = ["Rock", "Paper", "Scissors"]
let computerSelection
let playerSelection
let result1
let result2
let result
let computerScore = 0;
let playerScore = 0;
let gameScore


function computerPlay() {
    return possibleChoices[Math.floor(Math.random() * 3)];
}

function capitalizeInput(input) {
    let input1 = input.toUpperCase();
    let input2 = input1.toLowerCase();
    return input1[0] + input2.slice(1);
}

function playRound(computerSelection, playerSelection) {

    if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Scissors" && playerSelection === "Paper")) {
        result1 = "You lose.";
        result2 = `\nComputer has chosen ${computerSelection} and ${computerSelection} beats ${playerSelection} !`;
        result = result1 + result2;
        ++computerScore;
        return console.log(`${result}\nComputer: ${computerScore} - You: ${playerScore}`);
    }

    if ((computerSelection === "Rock" && playerSelection === "Paper") || (computerSelection === "Paper" && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection === "Rock")) {
        result1 = "You win!";
        result2 = `\nComputer has chosen ${computerSelection} and ${playerSelection} beats ${computerSelection} !`;
        result = result1 + result2;
        ++playerScore;
        return console.log(`${result}\nComputer: ${computerScore} - You: ${playerScore}`);
    }

    if (computerSelection === playerSelection) {
        result1 = "It's a tie!";
        result = result1;
        return console.log(`${result}\nComputer: ${computerScore} - You: ${playerScore}`);
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        computerSelection = computerPlay();
        let choice = prompt("Rock,Paper or Scissors?")
        playerSelection = capitalizeInput(choice);
        console.log(`Round ${i}`)
        playRound(computerSelection, playerSelection);
    }
    if (computerScore > playerScore) {
        gameScore = "Oh no, You lost the game!";
    }
    if (playerScore > computerScore) {
        gameScore = "Congrats! You won the game!";
    }
    if (playerScore === computerScore) {
        gameScore = "It is a super tie!";
    }
    return console.log(`${gameScore}`)
}


game();


