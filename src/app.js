function displayTemperature(response) {

    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;


}

let apiKey = "260b3388d943b5cf2930a0ff67e51fd7";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;

console.log(apiURL);

axios.get(apiURL).then(displayTemperature);