const input = document.getElementById("input-block");
const card = document.querySelector(".card");
const apiKey = "5541486ea74ac0b783a6dcc6255a2dbf";

input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        getWeatherDetails();
    }
});

async function getWeatherDetails(){

    const city = input.value;
    if(city){
        try{
            const weatherData = await updateWeatherDetails(city);
            displayWeatherData(weatherData);
        }
        catch(error){
            console.error(error);
            showError(error);
        }
    }
    else{
        showError("Enter The City To Continue ........");
    }
}
async function updateWeatherDetails(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    
    if(!response.ok){
        throw new Error("city not found");
    }
    else{
        return response.json();
    }
}
function displayWeatherData(data){
    console.log(data);

    const city = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const id = data.weather[0].id; 

    console.log(city);
    //Used fragment here which is a lightweight DOM, for better performance but for this code neglegiable advantage is given
    let fragment = document.createDocumentFragment();

    card.textContent = "";
    card.style.display ="flex";
    const time1 = performance.now();
    const cityName = document.createElement("h3");
    const temperature = document.createElement("p");
    const desc = document.createElement("p");
    
    cityName.textContent = city;
    temperature.textContent = `${temp}°C`;
    desc.textContent = description;

    fragment.appendChild(cityName);
    fragment.appendChild(temperature);
    fragment.appendChild(desc);

    card.appendChild(fragment);

    //                  OR  (But Performance Heavy not too much but with another example cases can be reversed)

    // card.innerHTML = `
    // <h3>${city}</h3>
    // <p>${temp} °C</p>
    // <p>${description}</p>
    // `;
   
    displayWeatherImages(id);

}
// Weather ID	Condition
// 200–299	Thunderstorm
// 300–399	Drizzle
// 500–599	Rain
// 600–699	Snow
// 700–799	Atmosphere (fog)
// 800	Clear
// 801–804	Clouds

function displayWeatherImages(id){
    if (id>=200 && id<300){
        card.style.backgroundImage = "url('images/thunderstorm.jpg')";
    }
    else if (id>=300 && id<400) {
        card.style.backgroundImage = "url('images/rain.jpg')";
    }
    else if (id>=500 && id<600) {
        card.style.backgroundImage = "url('images/rain.jpg')";
    }
    else if (id>=600 && id<700) {
        card.style.backgroundImage = "url('images/cold.jpg')";
    }
    else if (id>=700 && id<800) {
        card.style.backgroundImage = "url('images/fog.jpg')";
    }
    else if (id==800) {
        card.style.backgroundImage = "url('images/sun.jpg')";
    }
    else if (id>=801 && id<=804) {
        card.style.backgroundImage = "url('images/cloud.jpg')";
    }
}


function showError(message){
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    
    card.textContent = "";
    card.style.display = "flex";
    card.style.backgroundImage = "none";
    errorMessage.style.color = "white";
    card.appendChild(errorMessage);
}