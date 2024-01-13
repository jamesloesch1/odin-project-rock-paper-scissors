// Computer vs Human player 
// The computer needs to randomly choose rock, paper, or scissors 
// The program needs to get the human players input
// The program needs to evaluate the human player's input against the computer's 
// Based on defined rules, the program needs to evaluate who wins the game 

// Rules:
// Rock beats scissors
// Scissors beats paper
// Paper beats rock 

// Three variables for button selectors 

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let choiceContainer = document.querySelector('.container.choice');

// Initialize user choice variable to store user choice 

let userChoice;

// Event listeners for user choice and associated buttons 

let humanChoice = document.querySelector('#humanChoice');


rock.addEventListener('click', () => {
    userChoice = 'rock';
    humanChoice.textContent = userChoice;;
});

paper.addEventListener('click', () => {
    userChoice = 'paper';
    humanChoice.textContent = userChoice;;
});

scissors.addEventListener('click', () => {
    userChoice = 'scissors';
    humanChoice.textContent = userChoice;;
});















// Possible computer choices 

const CHOICES = ["rock", "paper", "scissors"];

// Function to get computer choice 

const computerChoice = function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
}

// initialing the score element so we have a place to display the score 
let score = document.querySelector('#container');


// function determineWinner(computerChoice, userChoice) {

//     let computer = computerChoice();
//     let human = userChoice;

//     console.log(computer);
//     console.log(human);

//     if (computer === human) {
//          console.log("Draw");
//     } else if (computer == "rock" && human == "scissors" || computer == "paper" && human == "rock" || computer == "scissors" && human == "paper") {
//         console.log("Computer wins");
//     } else {
//         console.log("Human wins");
//     }
// }






