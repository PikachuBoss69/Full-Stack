

function display() {

    const dates = new Date();
    let hours = dates.getHours();
    const meredian = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12 ;
    hours = dates.getHours().toString().padStart(2,0);
    const Seconds = dates.getSeconds().toString().padStart(2,0);
    const minutes = dates.getMinutes().toString().padStart(2,0);
    document.getElementById("clock").textContent = `${hours}:${minutes}:${Seconds} ${meredian}`;
}
display();
setInterval(display,1000);