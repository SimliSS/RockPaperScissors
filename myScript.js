/*function that randomly returns either 'rock', 'paper' or scissors.*/
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random()*choice.length)]
}

/*Declaring and initializing variables*/
let winner = 0;
let playerScore = 0;
let computerScore = 0;

/*function that initializes the game and keeps score of the 5 rounds*/
function initializeGame() {
    const playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection,computerSelection))
    if (playerScore <= 5 && computerScore <=5) {
        console.log('Current score: Player: ', playerScore, ' Computer: ', computerScore)
        setTimeout(initializeGame, 0);
        } else {
        console.log(win_condition());
         }
}

/*function that plays a single round and takes two parameters*/
function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore +=1; computerScore +=1;
        return `It's a Tie!You both chose ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore +=1;
        return "You Win! Rock beats Scissors";
    } else  if (playerSelection === "rock" && computerSelection ==="paper") {
        computerScore +=1;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore +=1;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore +=1;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore +=1;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore +=1;
        return "You Lose! Scissors beats Paper";
    }
}

/*function that determines the winner of the game*/
function win_condition() {
    if (playerScore > 5) {
        return `Player Wins!${playerScore}`;
    }
    if (computerScore > 5) {
        return `Computer Wins!${computerScore}`;
    }
}

initializeGame();
