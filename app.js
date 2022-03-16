//DOM
let resultDisplay = document.getElementById('result');
let scoreDisplay = document.getElementById('score');
const buttons = document.querySelectorAll('.button');
const resetButton = document.getElementById('reset');
let Rounds = document.getElementById('number')
let numberOfRounds = Rounds.textContent

//GLOBAL VARIABLES
let computerSelection
let playerSelection
let computerScore = 0;
let playerScore = 0;

//GAME LAUNCHING ON CLICK
let counter = 0
buttons.forEach(button => {
    button.addEventListener('click', () => {
        counter++;
        playerSelection = `${button.id}`
        computerSelection = computerPlay();
        //ROUNDS 
        if (counter < numberOfRounds) {
            playRound(computerSelection, playerSelection);
            //FINAL ROUND
        } else if (counter = numberOfRounds) {
            playRound(computerSelection, playerSelection);
            setTimeout(endGame, 400);
        }
    })
})

function computerPlay() {
    const possibleChoices = ["Rock", "Paper", "Scissors"]
    return possibleChoices[Math.floor(Math.random() * 3)];
}

function playRound(computerSelection, playerSelection) {
    let result
    scoreDisplay.textContent = `Computer: ${computerScore} - You: ${playerScore}`

    if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Paper" && playerSelection === "Rock") || (computerSelection === "Scissors" && playerSelection === "Paper")) {
        result = `Computer has chosen ${computerSelection} and ${computerSelection} beats ${playerSelection}! ⇒ You lose.`;
        ++computerScore;
    }

    if ((computerSelection === "Rock" && playerSelection === "Paper") || (computerSelection === "Paper" && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection === "Rock")) {
        result = `Computer has chosen ${computerSelection} and ${playerSelection} beats ${computerSelection}! ⇒ You win!`;
        ++playerScore;
    }

    if (computerSelection === playerSelection) {
        result = "It's a tie!";
    }

    let para = document.createElement('p')
    para.textContent = `Round ${counter} : ${result} `;
    resultDisplay.appendChild(para);
    scoreDisplay.textContent = `Computer: ${computerScore} - You: ${playerScore} `

}

function endGame() {
    if (computerScore > playerScore) {
        gameSentence = 'Oh no, You lost the game!';
    }
    if (playerScore > computerScore) {
        gameSentence = 'Congrats! You won the game!';
    }
    if (playerScore === computerScore) {
        gameSentence = 'It is a super tie!';
    }

    let finalScore = document.createElement('p');
    let finalResult = document.createElement('p');
    finalScore.textContent = `FINAL SCORE Computer: ${computerScore} - You: ${playerScore} `;
    finalResult.textContent = `${gameSentence} `;
    resultDisplay.appendChild(finalScore);
    resultDisplay.appendChild(finalResult);
    counter = 0;
    computerScore = 0;
    playerScore = 0;
}

//RESET BUTTON
resetButton.addEventListener('click', resetGame);

function resetGame() {
    counter = 0;
    computerScore = 0;
    playerScore = 0;
    while (resultDisplay.firstChild) {
        resultDisplay.removeChild(resultDisplay.firstChild);
    }
    scoreDisplay.textContent = `Computer: ${computerScore} - You: ${playerScore} `
}

//CHANGE ROUNDS NUMBER BUTTONS
const roundsUp = document.getElementById('round-up')
const roundsDown = document.getElementById('round-down')

roundsUp.addEventListener('click', () => {
    ++numberOfRounds
    Rounds.textContent = numberOfRounds;
    resetGame();
})

roundsDown.addEventListener('click', () => {
    --numberOfRounds
    Rounds.textContent = numberOfRounds;
    resetGame();
})