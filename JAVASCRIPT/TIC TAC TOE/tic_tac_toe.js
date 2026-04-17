const cell = document.querySelectorAll(".cell");
const resetButton = document.getElementById("reset-button");
const statusText = document.getElementById("status-text");
 const line = document.querySelector('.line');
let gameRunning = false;
let playerTurn = 'X';
let Winnerdecide = false;

const winConditions = [
    [0,1,2,0,-70,0],
    [3,4,5,0,50,0],
    [6,7,8,0,180,0],
    [0,3,6,-130,60,90],
    [1,4,7,0,60,90],
    [2,5,8,130,60,90],
    [0,4,8,0,60,45],
    [2,4,6,0,60,-45]
];

let options =["","","","","","","","",""];

initializeGame();

function initializeGame(){
    Array.from(cell).forEach(cell =>{
        cell.addEventListener('click',updateCell);
    });
    resetButton.addEventListener('click',restartGame);
    statusText.textContent = `${playerTurn}'s Turn`;
    gameRunning=true;

}

function updateCell(){
    const cellText = this.querySelector(".cell-text");
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex]!="" || !gameRunning){
        return;
    }
    options[cellIndex] = playerTurn;
    cellText.textContent = playerTurn;
    if(playerTurn === "X"){
        cellText.style.color = "red";
    } else {
        cellText.style.color = "blue";
    }

    checkWinner();
    if(gameRunning){
    changePlayer();
    }
}

function changePlayer(){
    playerTurn = playerTurn=='X'?'O':'X';
    statusText.textContent = `${playerTurn}'s Turn`;
}

function restartGame(){
    const cellText = document.querySelectorAll(".cell-text");
    Array.from(cellText).forEach(cellText=>{
        cellText.textContent = "";
    });
    options =["","","","","","","","",""];
    playerTurn ='X';
    statusText.textContent = `${playerTurn}'s Turn`;
    gameRunning = true;
    Winnerdecide = false;
    line.style.display = "none";
}

function checkWinner(){

    for(let i = 0;i<winConditions.length;i++){
        let container = winConditions[i];
        const cellA = options[container[0]];
        const cellB = options[container[1]];
        const cellC = options[container[2]];

        if(cellA==""||cellB==""||cellC==""){
            continue;
        }
        if(cellA == cellB && cellB == cellC && cellA!=""){
            Winnerdecide = true;
            updateLine(container);
            break;
        }
    }
        if(Winnerdecide){
            statusText.textContent = `${playerTurn}'s WON The Game`;
            gameRunning = false;
        }
        else if(!options.includes("")){
            statusText.textContent = "Game is Draw";
            gameRunning =false;
        }
}
function updateLine(container){
    line.style.display = "block";
    line.style.transform = `translate(${container[3]}px, ${container[4]}px) rotate(${container[5]}deg)`;
}