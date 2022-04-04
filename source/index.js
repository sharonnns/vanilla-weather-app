function displayTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "7e7b47dc873e07bb66aa8220960dcb79";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Hong Kong&appid=${apiKey}&units=metric`;

console.log(apiURL);

axios.get(apiURL).then(displayTemperature);
