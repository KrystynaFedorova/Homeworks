let today = new Date();
document.getElementById('time').innerHTML = today;


// fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
//     .then((response) => response.json())
//     .then((json) => {
//         const {main} = json;
//         console.log(main)
//         document.querySelector('#temp').innerHTML = main.temp;
//         document.querySelector('#pressure').innerHTML = main.pressure;
//         document.querySelector('#humidity').innerHTML = main.humidity;
//
//     });
// fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
//     .then((response) => response.json())
//     .then((json) => {
//         const {wind} = json;
//         console.log(wind)
//         document.querySelector('#speed').innerHTML = wind.speed;
//         document.querySelector('#deg').innerHTML = wind.deg;
//     });
//
// fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
//     .then((response) => response.json())
//     .then((json) => {
//         const {weather} = json;
//         console.log(weather)
//         document.querySelector('#description').innerHTML = weather[0].description;
//         document.querySelector('#icon').innerHTML = weather[0].icon;
//         icons(weather[0].description)
//     });

fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then((response) => response.json())
    .then(function (data) {
        document.querySelector('#temp').innerHTML = data.main.temp;
        document.querySelector('#pressure').innerHTML = data.main.pressure;
        document.querySelector('#humidity').innerHTML = data.main.humidity;
        document.querySelector('#speed').innerHTML = data.wind.speed;
        document.querySelector('#deg').innerHTML = data.wind.deg;
        document.querySelector('#description').innerHTML = data.weather[0].description;
        document.querySelector('#icon').innerHTML = data.weather[0].icon;
        icons(data.weather[0].description)
    })

function icons(desc) {
    let parentEl = document.getElementById("zwei");
    img = document.createElement("img");
    switch (desc) {
        case('clear sky'):
            img.src = "icons/01d@2x.png";
            break
        case('few clouds'):
            img.src = img.src = "icons/02d@2x.png";
            break
        case('scattered clouds'):
            img.src = img.src = "icons/03d@2x.png";
            break
        case('broken clouds'):
            img.src = img.src = "icons/04d@2x.png";
            break
        case('shower'):
            img.src = img.src = "icons/09d@2x.png";
            break
        case('rain'):
            img.src = img.src = "icons/10d@2x.png";
            break
        case('thunderstorm'):
            img.src = img.src = "icons/11d@2x.png";
            break
        case('snow'):
            img.src = img.src = "icons/13d@2x.png";
            break
        case('mist'):
            img.src = img.src = "icons/50d@2x.png";
            break

    }

    parentEl.appendChild(img);

}
















