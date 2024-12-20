// Global variables
const apiKey = "e1c7a95bd1a8dd478f721f0332399f17";
const weatherForm = document.querySelector(".weather-form");
const inputCity = document.querySelector(".input-city");
const weatherCard = document.querySelector(".weather-card");

// By default fetch and display weather for Stockholm
window.onload = async () => {
    try {
        const weatherData = await getWeatherData("Stockholm");
        displayWeather(weatherData);
    } catch (error) {
        console.error(error);
        displayError(error);
    }
};

// Handles input (city) from user
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = inputCity.value;
    
    if(city){
        try {
            const weatherData = await getWeatherData(city);
            displayWeather(weatherData);
        } catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Ange en stad");
    }
});

// Retrieve weather data from external API based on input city
async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Det gick inte att hämta vädret")
    }
    return await response.json();
}

// Display weather data
function displayWeather(data){

    const city = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;

    weatherCard.textContent = "";
    weatherCard.style.display = "flex";

    const cityDisplay = document.createElement("h3");
    const tempDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${temp.toFixed(1)}°C`; 
    descDisplay.textContent = description;

    cityDisplay.classList.add("weather-city")
    tempDisplay.classList.add("weather-temp")
    descDisplay.classList.add("weather-desc")

    weatherCard.appendChild(cityDisplay);
    weatherCard.appendChild(tempDisplay);
    weatherCard.appendChild(descDisplay);
}

// Display error message
function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("weather-error");

    weatherCard.textContent = "";
    weatherCard.style.display = "flex";
    weatherCard.appendChild(errorDisplay);
}