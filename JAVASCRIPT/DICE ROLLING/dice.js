const roll = document.getElementById("roll");
const diceNumber = document.getElementById("diceNumber");
const diceValue = document.getElementById("diceValue");
const dice = document.getElementById("dice");
const imgArr=[];
const diceArr = [];

function RollDice(){
    diceArr.length = 0;
    imgArr.length = 0;

    let finalValue = Number(diceNumber.value);
    for(let i = 1 ; i<=finalValue ; i++){
        let randomNumber = Math.floor(Math.random()*6 ) + 1;
        diceArr.push(randomNumber);
        imgArr.push(`<img src="images/${randomNumber}.png">`);
        
    }
    diceValue.textContent = `DICE : ${diceArr.join(', ')}`;
    dice.innerHTML = imgArr.join(' ');
}