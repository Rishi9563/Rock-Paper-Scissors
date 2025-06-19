let humanSelection;
let computerSelection;
let humanScore=0;
let computerScore=0;

playGame();

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
    
    console.log("You chose : %s  ||   Computer chose : %s",humanSelection,computerSelection);

    if(humanSelection==computerSelection){
        console.log("Round Draw!");
    }

    else if(humanSelection=="paper" && computerSelection=="rock"){
        console.log("You win!");
        humanScore++;
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

    console.log("You : %d                  Computer : %d",humanScore,computerScore);
    console.log("\n");

}

function playGame(){
    for(let i=1;i<=5;i++){
        console.log("Round - %d\n",i);
        playRound();
    }

    if(humanScore==computerScore){
        console.log("Game Draw!");
    }

    else if(humanScore>computerScore){
        console.log("You win the game!");
    }

    else {
        console.log("Computer wins the game!");
    }
}

