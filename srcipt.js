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

const CHOICES = ["rock", "paper", "scissors"];

const computerChoice = function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return CHOICES[randomIndex];
}

// This function gets a choice from the user and makes sure that it is valid 

const userChoice = function getUserChoice(){
    let choice;
    do {
        choice = prompt("Rock, Paper, Scissors?").toLocaleLowerCase();
    } while (!CHOICES.includes(choice));
    return choice;
}


function determineWinner(computerChoice, userChoice) {

    let computer = computerChoice();
    let human = userChoice();

    console.log(computer);
    console.log(human);

    if (computer === human) {
         console.log("Draw");
    } else if (computer == "rock" && human == "scissors" || computer == "paper" && human == "rock" || computer == "scissors" && human == "paper") {
        console.log("Computer wins");
    } else {
        console.log("Human wins");
    }
}


// This function plays 5 rounds of Rock, Paper, Scissors

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round: ${i}`)
        determineWinner(computerChoice, userChoice);
    }
}

game();



