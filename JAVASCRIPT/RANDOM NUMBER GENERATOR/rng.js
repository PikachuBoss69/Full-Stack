const button = document.getElementById("but");
const number = document.getElementById("num");
let min = 0;
let max = 10;
let randomNumber;

button.onclick = function(){
    randomNumber = Math.floor(Math.random()*max) + min;
    number.textContent = randomNumber;
}