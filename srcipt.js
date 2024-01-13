
let outcomeText = document.querySelector('.outcome.text'); 

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let userChoice;

let userChoiceText = document.querySelector('#user-choice-text');

let computerChoiceContainer = document.querySelector('.computer.choice.container');
let computerChoiceText = document.querySelector('#computer-choice-text');

// Computer choice

const CHOICES = ["rock", "paper", "scissors"];

const computerChoice = function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
};

// Player choice

rock.addEventListener('click', () => {
    userChoice = 'rock';
});

paper.addEventListener('click', () => {
    userChoice = 'paper';
});

scissors.addEventListener('click', () => {
    userChoice = 'scissors';
});

// Function to play a round and determine a winner

function determineWinner(computerChoice, userChoice) {

    let computer = computerChoice();
    let human = userChoice;

    userChoiceText.textContent = human;
    computerChoiceText.textContent = computer;

    if (computer === human) {
         outcomeText.textContent = "Draw";
    } else if (computer == "rock" && human == "scissors" || computer == "paper" && human == "rock" || computer == "scissors" && human == "paper") {
        outcomeText.textContent = "Computer wins"
    } else {
        outcomeText.textContent = "Human wins";
    }
};

rock.addEventListener('click', () => {
    determineWinner(computerChoice, userChoice);
});

paper.addEventListener('click', () => {
    determineWinner(computerChoice, userChoice);
});

scissors.addEventListener('click', () => {
    determineWinner(computerChoice, userChoice);
});










