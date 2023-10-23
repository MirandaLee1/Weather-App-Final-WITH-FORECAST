function displayTemperature(response) {


let tempElement = document.querySelector("#temp")
let cityElement = document.querySelector("#city")
let descriptionElement = document.querySelector("#description")

tempElement.innerHTML = Math.round(response.data.temperature.current);
cityElement.innerHTML= (response.data.city);
descriptionElement.innerHTML = (response.data.condition.description);
}

let apiKey = "a8653dt9c848fab44feofb6cd970ad29";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=Berlin&key=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
