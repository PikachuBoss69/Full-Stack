const number = document.getElementById("num");
const fehrenheit = document.getElementById("feh");
const celcius = document.getElementById("cel");
const para = document.getElementById("para");

function convert(){
    let value = parseFloat(number.value);

    if (isNaN(value)) {
        para.textContent = "Enter a valid number";
        return;
    }

    if(celcius.checked){
        let feh = (value * 1.8) + 32;
        para.textContent = `${feh.toFixed(2)} °F`;
    }
    else if(fehrenheit.checked){
        let cel = (value - 32) / 1.8;
        para.textContent = `${cel.toFixed(2)} °C`;
    }
    else{
        para.textContent = `Select a Type Conversion`;
    }
}