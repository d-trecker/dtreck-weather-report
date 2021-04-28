const apiKey = "518e332496f9c7d64d9306fda13a1ae4";
//Fetch weather
function fetchWeather(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data));
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=" +
      apiKey
  )
    .then((response) => response.json())
    .then((data) => displayForecast(data));
}
//----Function to Display Weather and Forecast----
function displayWeather(data) {
  console.log(data);
  const { name } = data;
  //const { dt_txt } = data;
  const { icon, description } = data.weather[0];
  const { temp } = data.main;
  const { humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerText = "Weather in " + name; //+ " " + dt_txt;
  document.querySelector(".icon").src =
    "http://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".temp").innerText = "Temp: " + temp + " &deg;F ";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
}
function displayForecast(data) {
  console.log(data);
  let pointer = 1;
  for (let i = 0; i < data.list.length; i += 8) {
    const { dt_txt } = data.list[i];
    const { icon } = data.list[i].weather[0];
    const { temp } = data.list[i].main;
    const { humidity } = data.list[i].main;
    const { speed } = data.list[i].wind;
    const tempDiv = (document.createElement("div").innerText =
      dt_txt + " " + temp);
    const iconImg = document.createElement("img");
    iconImg.src = "http://openweathermap.org/img/wn/" + icon + ".png";
    const humidityDiv = (document.createElement("div").innerText = humidity);
    const speedDiv = (document.createElement("div").innerText = speed);
    const day = document.getElementById(pointer);
    day.append(tempDiv, iconImg, humidityDiv, speedDiv);
    pointer++;
  }
}
//----Function to Capture search input value after button click and runs fetch for weather----
function search() {
  this.fetchWeather(document.querySelector(".search-bar").value);
}
document.querySelector("button").addEventListener("click", function () {
  search();
});
