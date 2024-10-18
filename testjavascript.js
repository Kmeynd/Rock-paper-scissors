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

function playRound(humanChoice,computerChoice){
    
    if (humanChoice=="scissors"&&computerChoice=="paper"||humanChoice=="paper"&&computerChoice=="rock"||humanChoice=="rock"&&computerChoice=="scissors"){
        return 'human'
    }else if(humanChoice==computerChoice){
        return 'draw'
    }else{
       return 'computer'
    } 
}



function playGame(choice,humanScore,computerScore){
        
    const humanSelection = choice
    const computerSelection= getComputerChoice()
    winner=playRound(humanSelection,computerSelection)

    if (winner=="human"){
    humanScore+=1
    }else if(winner=="computer"){
    computerScore+=1
    }else{
    return `it's a draw !`
    }
    return `the score is ${humanScore} for you and ${computerScore} for the computer` 
}



const btns = document.querySelectorAll('button')

const div1= document.querySelector('div')
let div = document.createElement('div')
div.textContent="Start to play!"
div1.appendChild(div)
humanScore=0
computerScore=0
clicked=0

btns.forEach(function(item){
    item.addEventListener("click",()=>{
        if (humanScore<5 && computerScore<5){
        str=playGame(item.value,humanScore,computerScore)
        div.textContent=str
            if (str!="it's a draw !"){  
            humanScore=Number(str[13])
            computerScore=Number(str[27])
            }else{
                humanScore=humanScore
                computerScore=computerScore
            }
        div1.appendChild(div)
        }if((humanScore==5 || computerScore==5)&& clicked==0 ){
            clicked=1
            div.textContent=`Final score ${humanScore} | ${computerScore}`
            div1.appendChild(div)
            let p=document.createElement("p")
            if (humanScore>computerScore){
                p.textContent="You Won!"
            }else{
                p.textContent="You Lose!"
            }
            div1.appendChild(p)
            let but=document.createElement("button")
            but.textContent="restart"
            div1.append(but)
            but.addEventListener("click",()=>{
                clicked=0
                humanScore=0
                computerScore=0
                div1.removeChild(but)
                div1.removeChild(p)
                div.textContent="Start to play!"

            })
        }
    })
})