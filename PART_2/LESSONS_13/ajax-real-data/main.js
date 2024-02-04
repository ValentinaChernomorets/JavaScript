// HW1:  create input < city
// HW2:  onclick -> timer (update data with timer)
// HW3*: last request -> minim interval 15min < localStorage

// CONST //
const API_KEY = "767c16607c32b08f53cb7d1ff7061560";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function setCityValue - set city and load weather data.
function setCityValue() {
    var inputValue = document.getElementById("city").value
    let city = "Chisinau"
    if (inputValue != '') {
        city = inputValue
    }
    let url = generateWeatherAPIUrl(city)
    loadWeatherData(url, city)
}

// Function generateWeatherAPIUrl - generate url.
function generateWeatherAPIUrl (city) {
    return `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
}

// Function loadWeatherData - load weather data with two method first- through Local Storage, second - through ajax.
function loadWeatherData(url, city) {
    // Get data from Local Storage //
    let loadWeatherLS = localStorage.getItem(`weather- ${city}`)
    let weatherData = ''
    if (loadWeatherLS != null) {
        weatherData = JSON.parse(loadWeatherLS)
        let dateLoadWeather = new Date(weatherData.lastDate)
        let currentDate = new Date()
        let fifteenMinLater = new Date(dateLoadWeather.getTime() + 15 * 60 * 1000);
        if (currentDate <= fifteenMinLater) {
            displayWeather(weatherData, city)
        } else {
            ajaxData(url, city)
        }
    } else {
        ajaxData(url, city)
    }
}

// Function ajaxData - get data through ajax and save to Local Storage and display weather.
function ajaxData (url, city) {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.onload = function () {        
        let data =  JSON.parse(xhr.responseText)
        // Save data to localStorage //
        data.lastDate = new Date()
        localStorage.setItem(`weather- ${city}`, JSON.stringify(data))
        // Display weather //
        displayWeather (data, city)
    }
    xhr.send()
}

// Function displayWeather - display all data about weather.
function displayWeather (data, city) {
    let temp = data.main.temp
    let wind = data.wind.speed
    let description = data.weather[0].description
    let icon = data.weather[0].icon
    document.querySelector('.weather').innerHTML = "";
    let html = document.createElement('div')
    let title = document.createElement('title')
    title.classList = 'city'
    title.innerText = `City: ${city}`
    let h1 = document.createElement('h1')
    h1.innerText = "Temperature:" + temp + "C"
    let h2 = document.createElement('h2')
    h2.innerText = description
    let p = document.createElement('p')
    p.innerText = "wind speed: " + wind + "m/s"
    let img = document.createElement('img')
    img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    html.appendChild(title)
    html.appendChild(h1)
    html.appendChild(h2)
    html.appendChild(p)
    html.appendChild(img)
    document.querySelector('.weather').appendChild(html)
}
function say () {
    alert("Hi")
}
// Reload each 20 minutes
// 1200000 milliseconds = 20 minutes
setInterval(setCityValue,  1200000);
