function getComputerChoice(){
    let x= Math.floor(Math.random() * (4 - 1) + 1);
    
    if (x==1){
        return "scissors"
    }else if(x==2){
        return "rock"
    }else{
        return "paper"
    }
    
}

function getHumanChoice(){
    let x= prompt("Please enter a number (rock, paper, scissors) : ")
    return x
}

function scores(winner){
    humanScore=0
    computerScore=0

   if (winner=="human"){
    humanScore+=1
   }else if(winner=="computer"){
    computerScore+=1
   }else{
    return `it's a draw !`
   }


   return `the score is ${humanScore} for you and ${computerScore} for the computer`
}


function playRound(humanChoice,computerChoice){
    
    if (humanChoice=="scissors"&&computerChoice=="paper"||humanChoice=="paper"&&computerChoice=="rock"||humanChoice=="rock"&&computerChoice=="scissors"){
        console.log(scores('human'))
    }else if(humanChoice==computerChoice){
        console.log(scores('draw'))
    }else{
        console.log(scores('computer'))
    }

    
}

const humanSelection = getHumanChoice()
const computerSelection= getComputerChoice()

playRound(humanSelection,computerSelection)