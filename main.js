let searchBar = document.querySelector(".search-bar");
let weather = {
  apiKey: "38a054e76b974e897d35562a1e387af1",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind speed :" + speed + "km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search-btn").addEventListener("click", () => {
  weather.search();
  searchCity.style.display = "none";
});

let searchCity = document.querySelector(".search-city");

searchBar.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    weather.search();
    searchCity.style.display = "none";
  }
});
