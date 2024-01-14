
let outcomeText = document.querySelector('.outcome.text'); 

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let userChoice;

let userChoiceText = document.querySelector('#user-choice-text');

let computerChoiceContainer = document.querySelector('.computer.choice.container');
let computerChoiceText = document.querySelector('#computer-choice-text');

// Computer choice

const CHOICES = ["Rock", "Paper", "Scissors"];

const computerChoice = function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
};

// Initialize round variable 

let round = 0;

// Initialize score 

let computerScore = 0;
let userScore = 0;

// Function that compares user choice and computer choice, determines a winner, and then increments the round number 

function determineWinner(computerChoice, userChoice) {

    let computer = computerChoice();
    let human = userChoice;

    userChoiceText.textContent = human;
    computerChoiceText.textContent = computer;

    if (computer === human) {
        outcomeText.textContent = "Draw";
        round++;
    } else if (computer == "Rock" && human == "Scissors" || computer == "Paper" && human == "Rock" || computer == "Scissors" && human == "Paper") {
        outcomeText.textContent = "Computer wins"
        computerScore++;
        computerScoreText.textContent = `${computerScore}`
        round++;
    } else {
        outcomeText.textContent = "Human wins";
        userScore++;
        userScoreText.textContent = `${userScore}`
        round++;
    }

    roundNumberText.textContent = `${round}`

     alertWinner();

};

// Function that checks the score and determines the winner of the series 

const alertWinner = function(){
    if (computerScore === 5 && userScore < 5) {
        alert("Computer wins in first to 5 series");
    } else if (userScore === 5 && computerScore < 5) {
        alert("Human wins in first to 5 series");
    };
}

let userScoreText = document.querySelector('#user-score-text');
let computerScoreText = document.querySelector('#computer-score-text');

let roundNumberText = document.querySelector('#round-number-text');

// User chouice event listeners 

rock.addEventListener('click', () => {
    userChoice = 'Rock';
    determineWinner(computerChoice, userChoice);
});

paper.addEventListener('click', () => {
    userChoice = 'Paper';
    determineWinner(computerChoice, userChoice);
});

scissors.addEventListener('click', () => {
    userChoice = 'Scissors';
    determineWinner(computerChoice, userChoice);
});












