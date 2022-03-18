const API_KEY = "92806bfdea6fb89e5c4679d4b54acd23";

function onGeoOk(position) {
    //openweathermap.org 웹 사이트에서 API 확인
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

        })
}

function onGeoError() {
    alert("error!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);