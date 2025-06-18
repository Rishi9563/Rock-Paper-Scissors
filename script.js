let humanSelection;
let computerSelection;

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

getcomputerChoice();
alert(computerSelection);