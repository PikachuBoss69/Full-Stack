const res = document.getElementById("res")
const dec = document.getElementById("dec")
const inc = document.getElementById("inc")
const label = document.getElementById("cnt")

let count = 0;

inc.onclick = function(){
    count++;
    label.textContent = count
}
dec.onclick = function(){
    count--;
    label.textContent = count
}
res.onclick = function(){
    count = 0;
    label.textContent = count
}