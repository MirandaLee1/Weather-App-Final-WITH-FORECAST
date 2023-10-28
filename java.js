function formatDate(timestamp){
    let date = new Date (timestamp);
    let hours = date.getHours();
        if (hours < 10) {
          hours = `0${minutes}`;
        }
    let minutes = date.getMinutes();
        if (minutes <10) {
        minutes = `0${minutes}`;
        }
    let days = 
    ["Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"]

    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`;
}



function displayTemperature(response) {


let tempElement = document.querySelector("#temp")
let cityElement = document.querySelector("#city")
let dateElement = document.querySelector ("#date")
let descriptionElement = document.querySelector("#description")

let windElement = document.querySelector(".wind .value");
let humidityElement=document.querySelector(".humidity .value");
let pressureElement = document.querySelector(".pressure .value")


tempElement.innerHTML = `${Math.round(response.data.temperature.current)}°`;
cityElement.innerHTML= (response.data.city);
dateElement.innerHTML= formatDate(response.data.time *1000);

descriptionElement.innerHTML = (response.data.condition.description);

windElement.innerHTML = `${(response.data.wind.speed)} km/h`;
humidityElement.innerHTML = `${(response.data.temperature.humidity)}%`;
pressureElement.innerHTML = `${(response.data.temperature.pressure)} Pa`;
}


let apiKey = "a8653dt9c848fab44feofb6cd970ad29";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=Berlin&key=${apiKey}&units=metric`;
console.log(apiURL)
axios.get(apiURL).then(displayTemperature);


