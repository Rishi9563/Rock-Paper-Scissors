const btn = document.querySelector("#start");
let userOption = document.getElementById("playerhand");
let botOption = document.getElementById("bothand");
const roundwinner = document.querySelector("#winner");
const roundDisplay = document.querySelector("#rounddisplay");
const playerScore = document.querySelector("#playerscore");
const botScore = document.querySelector("#computerscore");
const timerclock = document.querySelector(".timer");
let rounds = 0;
let humanScore = 0;
let computerScore = 0;
let computerSelection;
let humanSelection;



function getcomputerChoice() {

    if ((humanScore == 5) || (computerScore == 5)) {
        return;
    }

    let random = Math.random() * 100;

    if (random < 35) {
        computerSelection = "rock";
    }

    else if (random < 69) {
        computerSelection = "paper";
    }

    else {
        computerSelection = "scissors";
    }
    other();
}

function other() {
    if (computerSelection == "rock") {
        botOption.src = "images/noun-rock-88661 - Copy.png";
    }

    else if (computerSelection == "paper") {
        botOption.src = "images/papercopy.png";
    }

    else {
        botOption.src = "images/noun-scissors-88666 - Copy.png";
    }
}

function compare(playerchoice) {
    if ((humanScore == 5) || (computerScore == 5)) {
        return;
    }

    getcomputerChoice();

    if (playerchoice == computerSelection) {
        roundwinner.textContent = "Draw!";
    }

    else if (playerchoice == "rock" && computerSelection == "paper") {
        roundwinner.textContent = "BOT Wins!";
        computerScore += 1;
    }

    else if (playerchoice == "rock" && computerSelection == "scissors") {
        roundwinner.textContent = "You Win!";
        humanScore += 1;
    }

    else if (playerchoice == "paper" && computerSelection == "rock") {
        roundwinner.textContent = "You Win!";
        humanScore += 1;
    }

    else if (playerchoice == "paper" && computerSelection == "scissors") {
        roundwinner.textContent = "BOT Wins!";
        computerScore += 1;
    }

    else if (playerchoice == "scissors" && computerSelection == "rock") {
        roundwinner.textContent = "BOT Wins!";
        computerScore += 1;
    }

    else if (playerchoice == "scissors" && computerSelection == "paper") {
        roundwinner.textContent = "You Win!";
        humanScore += 1;
    }

    scoreUpdate();
}

function scoreUpdate() {
    rounds += 1;
    roundDisplay.textContent = `Round ${rounds}`;
    playerScore.textContent = humanScore;
    botScore.textContent = computerScore;

    if ((humanScore === 5) || (computerScore === 5)) {
        finalDisplay();
        return;
    }

}

function playRound(playerchoice) {
    if ((humanScore === 5) || (computerScore === 5)) {
        return;
    }

    if (playerchoice == "rock") {
        userOption.src = "images/noun-rock-88661.png";
        
    }

    else if (playerchoice == "paper") {
        userOption.src = "images/noun-paper-88662.png";
    }

    else {
        userOption.src = "images/noun-scissors-88666.png";
    }

    getcomputerChoice();
    compare(playerchoice);
}

function timer(){
    let currTime = new Date().getTime();
    while(new Date().getTime() - currTime < 500){
    }
}

function finalDisplay() {
    let winner = (humanScore > computerScore) ? "Player" : "BOT";
    roundDisplay.textContent = `${winner} wins the game!`;
    roundwinner.textContent = "Game Ends!";
    userOption.src = "images/noun-rock-88661.png";
    botOption.src = "images/noun-rock-88661 - Copy.png";
}

function playerchoice() {

    document.querySelector("#rock").addEventListener("click", function () {
        playRound("rock");
    });

    document.querySelector("#paper").addEventListener("click", function () {
        playRound("paper");
    });

    document.querySelector("#scissors").addEventListener("click", function () {
        playRound("scissors");
    });

}


playerchoice();


btn.addEventListener("click" , function(){
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
    roundDisplay.textContent = "Let's begin!";
    playerScore.textContent = humanScore;
    botScore.textContent = computerScore;
    roundwinner.textContent = "";
    userOption.src = "images/noun-rock-88661.png";
    botOption.src = "images/noun-rock-88661 - Copy.png";
});

