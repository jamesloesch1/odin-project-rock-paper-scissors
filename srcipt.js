// Computer vs Human player 
// The computer needs to randomly choose rock, paper, or scissors 
// The program needs to get the human players input
// The program needs to evaluate the human player's input against the computer's 
// Based on defined rules, the program needs to evaluate who wins the game 

// Rules:
// Rock beats scissors
// Scissors beats paper
// Paper beats rock 

// This function gets the choice from the computer

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const computerChoice = function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) return ROCK;
    if (choice === 2) return PAPER;
    return SCISSORS;
}

// This promt gets the choice from the player and stores it in playerChoice

function playRound(computer) {

    let human = prompt("Rock, Paper, Scissors?");
    let humanChoice = human.toLowerCase();

    console.log(computer);
    console.log(humanChoice);

    if (computer === humanChoice) {
        console.log("Draw");
    } else if (computer == "rock" && humanChoice == "scissors" || computer == "paper" && humanChoice == "rock" || computer == "scissors" && humanChoice == "paper") {
        console.log("Computer wins");
    } else {
        console.log("Human wins");
    }
}

// playRound(computerChoice());

// This function plays 5 rounds of Rock, Paper, Scissors

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ${i}`)
        playRound(computerChoice());
    }
}

game();


