
function refreshWeather(response) {
  let iconElement = document.querySelector("#weatherIcon");
  let tempElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let dateElement = document.querySelector("#date");
  let descriptionElement = document.querySelector("#description");

  let windElement = document.querySelector(".wind .value");
  let humidityElement = document.querySelector(".humidity .value");
  let pressureElement = document.querySelector(".pressure .value");

  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  tempElement.innerHTML = `${Math.round(response.data.temperature.current)}°`;
  cityElement.innerHTML = response.data.city;
  dateElement.innerHTML = formatDate(response.data.time * 1000);

  descriptionElement.innerHTML = response.data.condition.description;

  windElement.innerHTML = `${response.data.wind.speed} km/h`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  pressureElement.innerHTML = `${response.data.temperature.pressure} Pa`;
}

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}




function searchCity(city) {
let apiKey = "a8653dt9c848fab44feofb6cd970ad29";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
console.log(apiURL);
axios.get(apiURL).then(refreshWeather);

}


function handleSearchSubmit(event)
{
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input")
  let cityElement = document.querySelector("#city")

  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value)
  
}


function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml = 
      forecastHtml + 
      `
      <div class="row">
        <div class="col">
          <div class="card" style="width: 5rem;">
              <i class="fa-regular fa-sun sunny-time"></i>
              <div class="card-body">
                  <h3 class="card-title">7°</h3>
                  <p class="card-text">${day}</p>
              </div>
          </div>
        </div>
      </div>`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}



let searchFormElement = document.querySelector("#searchForm")
searchFormElement.addEventListener("submit", handleSearchSubmit); 


searchCity("Paris");
displayForecast();