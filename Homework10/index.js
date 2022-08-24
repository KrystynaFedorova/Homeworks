let today = new Date();
document.getElementById('time').innerHTML = today;


fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then((response) => response.json())
    .then((json) => {
        const {main} = json;
        console.log(main)
        document.querySelector('#temp').innerHTML = main.temp;
        document.querySelector('#pressure').innerHTML = main.pressure;
        document.querySelector('#humidity').innerHTML = main.humidity;

    });
fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then((response) => response.json())
    .then((json) => {
        const {wind} = json;
        console.log(wind)
        document.querySelector('#speed').innerHTML = wind.speed;
        document.querySelector('#deg').innerHTML = wind.deg;
    });

fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then((response) => response.json())
    .then((json) => {
        const {weather} = json;
        console.log(weather)
        document.querySelector('#description').innerHTML = weather[0].description;
        document.querySelector('#icon').innerHTML = weather[0].icon;
        icons(weather[0].description)
    });

function icons(desc) {
    let parentEl = document.getElementById("zwei");
    img = document.createElement("img");
    if (desc === 'clear sky') {
        img.src = "icons/01d@2x.png";
    } else if (desc === 'few clouds') {
        img.src = "icons/02d@2x.png";

    } else if (desc === 'scattered clouds') {
        img.src = "icons/03d@2x.png";

    } else if (desc === 'broken clouds') {
        img.src = "icons/04d@2x.png";

    } else if (desc === 'shower rain') {
        img.src = "icons/09d@2x.png";

    } else if (desc === 'rain') {
        img.src = "icons/10d@2x.png";

    } else if (desc === 'thunderstorm') {
        img.src = "icons/11d@2x.png";

    } else if (desc === 'snow') {
        img.src = "icons/13d@2x.png";

    } else if (desc === 'mist') {
        img.src = "icons/50d@2x.png";

    }
    parentEl.appendChild(img);

}
















