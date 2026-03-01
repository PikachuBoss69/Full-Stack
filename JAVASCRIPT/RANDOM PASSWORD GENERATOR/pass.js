
const generate = document.getElementById("button");

generate.onclick = function(){

    const length = Number(document.getElementById("len").value) ; 
    const includeLowerCase = document.getElementById("s_alpha");
    const includeUpperCase = document.getElementById("alpha");
    const includeNumbers = document.getElementById("num");
    const includeSymbols = document.getElementById("symb");
    const phrase = document.getElementById("phrase");

    const num = "0123456789";
    const smallAlpha = "abcdefghijklmnopqrstuvwxyz";
    const capitalAlpha ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const sym = "!@#$%^&*()_+-"

    let allowedChars = "";
    let password ="";

    allowedChars += includeNumbers.checked ? num :"";
    allowedChars += includeUpperCase.checked ? smallAlpha :"";
    allowedChars += includeLowerCase.checked ? capitalAlpha :"";
    allowedChars += includeSymbols.checked ? sym :"";

    if(length <= 0 || length >12){
        alert("Enter the length In between 1-12");
        return;
    }
    if(isNaN(length)){
        alert("Enter the length");
        return;
    }
    if(allowedChars.length == 0){
        alert("at least select 1 checkbox");
        return;
    }
    for(let i = 0;i<length;i++){
        let randomNum = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomNum];
    }
    phrase.textContent = password;

}