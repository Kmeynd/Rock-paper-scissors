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

function playRound(humanChoice,computerChoice){
    
    if (humanChoice=="scissors"&&computerChoice=="paper"||humanChoice=="paper"&&computerChoice=="rock"||humanChoice=="rock"&&computerChoice=="scissors"){
        return 'human'
    }else if(humanChoice==computerChoice){
        return 'draw'
    }else{
       return 'computer'
    } 
}



function playGame(){
    humanScore=0
    computerScore=0

    for (let i=0;i<5;i++){
        const humanSelection = getHumanChoice()
        const computerSelection= getComputerChoice()
        winner=playRound(humanSelection,computerSelection)

       if (winner=="human"){
        humanScore+=1
       }else if(winner=="computer"){
        computerScore+=1
       }else{
        console.log(`it's a draw !`)
       }
       console.log(`the score is ${humanScore} for you and ${computerScore} for the computer`) 
} }

console.log(playGame())