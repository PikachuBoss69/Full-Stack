const result_display = document.getElementById("winner-display");
const userImg = document.querySelector("#user-display img");
const computerImg = document.querySelector("#computer-display img");
const userScore = document.getElementById("userScore");
const computerScore = document.getElementById("computerScore");
const choices = ["rock","paper","scissor"];
let updateUserScore = 0;
let updateComputerScore = 0;

function decideWinner(input){
        let computerChoice = choices[Math.floor(Math.random() * 3)];

        userImg.src = `images/${input}.png`;
        computerImg.src = `images/${computerChoice}.png`;

        if(computerChoice==input){
            result_display.textContent = "DRAW";
            result_display.style.color = "blue";
        }
        else{
            switch (true) {
                case computerChoice == "rock" :
                    if(input=="paper"){
                        result_display.textContent = "YOU WIN";
                        result_display.style.color = "green"

                        updateUserScore++;
                        userScore.textContent = `Score : ${updateUserScore}`; 

                    }   
                    else{
                        result_display.textContent = "YOU LOOSE"
                        result_display.style.color = "red" 
                        updateComputerScore++;
                        computerScore.textContent = `Score : ${updateComputerScore}`; 
                    } 
                    break;
            
                case computerChoice == "paper":
                    if(input=="scissor"){
                        result_display.textContent = "YOU WIN";
                        result_display.style.color = "green"
                        updateUserScore++;
                        userScore.textContent = `Score : ${updateUserScore}`; 
                    }   
                    else{
                        result_display.textContent = "YOU LOOSE"
                        result_display.style.color = "red" 
                        updateComputerScore++;
                        computerScore.textContent = `Score : ${updateComputerScore}`; 
                    } 
                break
                ;
                
                case computerChoice == "scissor":
                    if(input =="rock"){
                        result_display.textContent = "YOU WIN";
                        result_display.style.color = "green"
                        updateUserScore++;
                        userScore.textContent = `Score : ${updateUserScore}`; 
                    }   
                    else{
                        result_display.textContent = "YOU LOOSE"
                        result_display.style.color = "red" 
                        updateComputerScore++;
                        computerScore.textContent = `Score : ${updateComputerScore}`; 
                    } 
                    break;
                }
        }
}

function reset(){
    result_display.textContent = "SELECT OPTION TO PLAY"
    result_display.style.color = "white" 
    updateUserScore=0;
    userScore.textContent = `Score : ${updateUserScore}`; 
    updateComputerScore=0;
    computerScore.textContent = `Score : ${updateComputerScore}`; 
    userImg.src = `images/question-mark.png`;
    computerImg.src = `images/question-mark.png`;
}