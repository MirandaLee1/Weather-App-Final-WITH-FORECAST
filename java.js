function displayTemperature(response) {


let tempElement = document.querySelector("#temp")
let cityElement = document.querySelector("#city")
let descriptionElement = document.querySelector("#description")

let windElement = document.querySelector(".wind .value");
let humidityElement=document.querySelector(".humidity .value");
let pressureElement = document.querySelector(".pressure .value")





tempElement.innerHTML = `${Math.round(response.data.temperature.current)}°`;
cityElement.innerHTML= (response.data.city);
descriptionElement.innerHTML = (response.data.condition.description);
windElement.innerHTML = `${(response.data.wind.speed)} km/h`;
humidityElement.innerHTML = `${(response.data.temperature.humidity)}%`;
pressureElement.innerHTML = `${(response.data.temperature.pressure)} Pa`;
}

let apiKey = "a8653dt9c848fab44feofb6cd970ad29";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=Berlin&key=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);

