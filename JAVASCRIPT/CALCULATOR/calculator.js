const display = document.getElementById("display");

function isOperator(char){
    return ["+","-","*","/"].includes(char);
}
function addToDisplay(input){
    try{
       let lastInputElement = display.value.slice(-1);
        if(isOperator(lastInputElement) && isOperator(input)){
            throw new Error; 
        }
        if(isOperator(input) && display.value === ""){
            throw new Error;
        }
        display.value += input;
    }
    catch{
        alert("ERROR")
    }

}

function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{

        display.value = eval(display.value);

    }
    catch{
        display.value = "ERROR";
    }
}