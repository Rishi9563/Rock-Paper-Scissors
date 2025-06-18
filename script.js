let humanSelection;
let computerSelection;
let humanScore;
let computerScore;

function gethumanChoice(){
    let humanChoice=prompt("Enter your choice(Rock/Paper/Scissors)");
    humanSelection=humanChoice.toLowerCase();
}

function getcomputerChoice(){
    let random=Math.random()*100;

    if(random<35){
        computerSelection="rock";
    }

    else if(random<69){
        computerSelection="paper";
    }

    else {
        computerSelection="scissors";
    }
}

function playRound(){
    gethumanChoice();
    getcomputerChoice();

    if(humanSelection==computerSelection){
        console.log("Draw");
    }

    else if(humanSelection=="paper" && computerSelection=="rock"){
        console.log("You win!");
        computerScore++;
    }

    else if(humanSelection=="rock" && computerSelection=="scissors"){
        console.log("You win!");
        humanScore++;
    }

    else if(humanSelection=="scissors" && computerSelection=="paper"){
        console.log("You win!");
        humanScore++;
    }

    else if(humanSelection=="rock" && computerSelection=="paper"){
        console.log("Computer wins!");
        computerScore++;
    }

    else if(humanSelection=="paper" && computerSelection=="scissors"){
        console.log("Computer wins!");
        computerScore++;
    }

    else if(humanSelection=="scissors" && computerSelection=="rock"){
        console.log("Computer wins!");
        computerScore++;
    }

    else {
        console.log("Sommething went wrong!");
    }
}

