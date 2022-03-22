const search = document.querySelector(".search-bar");
const btn = document.querySelector(".search-btn");
const cityDisplay = document.querySelector(".name");
const tempDisplay = document.querySelector(".temperature-2");
const typeDisplay = document.querySelector(".type");
const minDisplay = document.querySelector(".min");
const maxDisplay = document.querySelector(".max");

const unit = 'metric'
let cityName;

let weather = {
  apiKey: "797d4f413a2cef34d9e9684eeaf85e1d",
  fetchWeather: function(cityName){
    fetch(
      "https://api.openweathermap.org/geo/1.0/direct?q=" 
      + cityName 
      + "&limit=1&appid=" 
      + this.apiKey
    )
      .then(response1 => response1.json())
      .then((data1) => this.displayCoordinates(data1))
  },
  displayCoordinates: function(data1){
    const { lat } = data1[0];
    const { lon } = data1[0];
    console.log(lon, lat)
    this.fetchWeatherInfo(lat, lon);
  },
  fetchWeatherInfo: function(lat, lon){
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" 
      + lat 
      + "&lon=" 
      + lon
      + "&appid="
      + this.apiKey
      + "&units="
      + unit
    )
      .then(response2 => response2.json())
      .then((data2) => this.displayWeather(data2))
  },
  displayWeather: function(data2){
    const { name } = data2;
    const { id, description } = data2['weather'][0];
    const { temp } = data2['main'];
    const { feels_like, temp_min, temp_max, humidity } = data2['main'];
    console.log(name, id, description, temp, feels_like, temp_min, temp_max, humidity);
    cityDisplay.innerHTML = name;
    tempDisplay.innerHTML = temp;
    typeDisplay.innerHTML = description;
    minDisplay.innerHTML = temp_min;
    maxDisplay.innerHTML = temp_max;
  }
};

weather.fetchWeather("Rome");

btn.addEventListener("click", function(){
  cityName = search.value;
  search.value = '';
  weather.fetchWeather(cityName);
})

search.addEventListener("keydown", function(e){
  if(e.keyCode === 13){
    cityName = search.value;
    search.value = '';
    weather.fetchWeather(cityName);
  }
})