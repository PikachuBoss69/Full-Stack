const guess = document.getElementById("guess");
const rules = document.getElementById("rules");
const numberInt = document.getElementById("number");
let randomNumber;
let max = 100;
let min = 0;
let attempt = 0;

const TOTAL_ATTEMPTS = 6; 

randomNumber = Math.floor(Math.random()* max) + min;

guess.onclick = function(){

        let number = Number(numberInt.value); 
        
        if(attempt>TOTAL_ATTEMPTS){
            alert("EXCEDED THE ATTEMPS , FAILED");
        }
        else if(number < min || number > max){
            alert(`Enter the Number Between ${min} and ${max} :`);
        }
        else{
            attempt++;
            if(number > randomNumber){
                alert("Guess a smaller number");
            }
            else if(number < randomNumber){
                alert("Guess a bigger number")
            }
            else{
                alert("YOU WIN THE GAME you guess correct")
                attempt = 0;
                randomNumber = Math.floor(Math.random()* max) + min;
            }
        }
    }








