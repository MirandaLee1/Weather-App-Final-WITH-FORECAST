let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getMinutes();

let dayandtime = document.querySelector("h2");
dayandtime.innerHTML = `${day} ${hours}:${minutes}`;

function show(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h3").innerHTML = `${Math.round(
    response.data.main.temp
  )}°`;
  document.querySelector(".country").innerHTML = response.data.sys.country;
}

function search(event) {
  event.preventDefault();
  let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let city = document.querySelector("#location").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(show);
}

let form = document.querySelector("#cityForm");
form.addEventListener("submit", search);

