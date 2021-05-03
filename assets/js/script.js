const weatherBoard = document.querySelector(".weather");
const fiveDayForecast = document.querySelector(".forecast");
var userSearch = document.querySelector(".search-bar").value;
const apiKey = "518e332496f9c7d64d9306fda13a1ae4";

//----Funcation to get Current Date ----
var currentDate = function() {
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
return today;
}

//---- Fetch weather Function ----
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
//----Function to Display Weather----
function displayWeather(data) {
  weatherBoard.classList.remove("hide");
  fiveDayForecast.classList.remove("hide");
  console.log(data);
  const { name } = data;
  var todayDate = currentDate();
  const { icon, description } = data.weather[0];
  const { temp } = data.main;
  const { humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerText = "Today is: " + todayDate + "\n" + "The weather in " + name + " looks like: ";
  document.querySelector(".icon").src =
    "http://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".temp").innerText = "Temp: " + temp + "° ";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind Speed: " + speed + " MPH";
}
//----Function to display the 5 Day Forecast----
function displayForecast(data) {
  console.log(data);
  let counter = 1;
  for (let i = 0; i < data.list.length; i += 8) {
    var { dt_txt } = data.list[i];
    dt_txt = moment(dt_txt).format("MM/DD/YYYY");
    var { icon } = data.list[i].weather[0];
    var { temp } = data.list[i].main;
    var { humidity } = data.list[i].main;
    var { speed } = data.list[i].wind;
    var iconImg = document.createElement("img");
    iconImg.src = "http://openweathermap.org/img/wn/" + icon + ".png";
    var forecastDiv = (document.createElement("div").innerText = dt_txt + "\n" + "Temp: " + temp + "\n" + "Humidity: " + humidity + "%" + "\n" + "Wind: " + speed + " MPH");
    var day = document.getElementById(counter);
    day.append(iconImg, forecastDiv);
    counter++;
  }
}
//----Function to Capture search input value after button click and runs fetch for weather----
var searchResult = function() {
  this.fetchWeather(document.querySelector(".search-bar").value);
}
document.querySelector("button").addEventListener("click", function () {
  var searchInput = $(".search-bar").val();
  if (searchInput != "") {
  $(".results").empty();
  searchResult();
  //-Create Previous Search Buttons-
  var searchedCity = document.querySelector(".search-bar").value;
  window.localStorage.setItem("cityName", JSON.stringify(searchedCity));
  var cityName = JSON.parse(window.localStorage.getItem("cityName"));
  console.log(cityName);
  var pastContainer = document.getElementById("past-search-buttons");
  var cityEl = document.createElement("button"); 
  cityEl.innerText = cityName;
  cityEl.classList.add ("past");
  cityEl.addEventListener("click", pastDisplay);
  pastContainer.append(cityEl);
//----Function to display previous cities----
  function pastDisplay() {
    $(".results").empty()
    fetchWeather(cityName)
  }
  } 
});


