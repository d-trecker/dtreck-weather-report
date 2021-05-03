const weatherBoard = document.querySelector(".weather");
const fiveDayForecast = document.querySelector(".forecast");
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
//----Function to Display Weather and Forecast----
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
  // const { uv } = data.
  console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerText = "Weather in " + name + " " + " on " + todayDate;
  document.querySelector(".icon").src =
    "http://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".temp").innerText = "Temp: " + temp + "° ";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText = "Wind Speed: " + speed + " MPH";
}
//----Function to display the 5 Day Forecast----
function displayForecast(data) {
  console.log(data);
  let pointer = 1;
  for (let i = 0; i < data.list.length; i += 8) {
    const { dt_txt } = data.list[i];
    const { icon } = data.list[i].weather[0];
    const { temp } = data.list[i].main;
    const { humidity } = data.list[i].main;
    const { speed } = data.list[i].wind;
    const dateDiv = (document.createElement("div").innerText = dt_txt);
    const tempDiv = (document.createElement("div").innerText = "Temp: " + temp);
    const iconImg = document.createElement("img");
    iconImg.src = "http://openweathermap.org/img/wn/" + icon + ".png";
    const humidityDiv = (document.createElement("div").innerText = "Humidity: " + humidity + "%");
    const speedDiv = (document.createElement("div").innerText = "Wind: " + speed + " MPH");
    const day = document.getElementById(pointer);
    day.append(iconImg, dateDiv, "\n", tempDiv, "\n", humidityDiv, "\n", speedDiv);
    pointer++;
  }
}
//----Function to Capture search input value after button click and runs fetch for weather----
var searchResult = function() {
  this.fetchWeather(document.querySelector(".search-bar").value);
}
document.querySelector("button").addEventListener("click", function () {
  // debugger;
  searchResult();
  var searchedCity = document.querySelector(".search-bar").value;
  window.localStorage.setItem("cityName", JSON.stringify(searchedCity));
  var cityName = JSON.parse(window.localStorage.getItem("cityName"));
  console.log(cityName);
  var pastContainer = document.getElementById("past-search-buttons");
  var cityEl = document.createElement("button"); 
  cityEl.innerText = cityName;
  cityEl.classList = "flex-column align-center";
  cityEl.setAttribute = "key, value";
  pastContainer.append(cityEl);
  
});
//  $(".current").empty()

// removeAllChildNodes(fiveDayForecast);


//----Method 1
function removeAllChildNodes(fiveDayForecast) {
  while (fiveDayForecast.firstChild) {
      fiveDayForecast.removeChild(fiveDayForecast.firstChild);
  }
}
 

//----Method 2
function clearBox(fiveDayForecast) {
  var div = document.getElementById(fiveDayForecast);
    
  while(div.firstChild) {
      div.removeChild(div.firstChild);
  }
}


//----Method 3
function clearcontent(fiveDayForecast) {
fiveDayForecast.innerHTML = "";
}