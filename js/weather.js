// api key
// 240c72ebc0638e50fea0623c4d5ee678
const API_KEY = "240c72ebc0638e50fea0623c4d5ee678";
function onGeoOk(position){
    // 위도
    const lat = position.coords.latitude;
    // 경도
    const lon = position.coords.longitude;
    // units=metric : 섭씨온도로 바꿔줌
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // js에서 url 부르기
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:nth-child(2)");
            const temp = document.querySelector("#weather span:nth-child(4)")
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            temp.innerText = `${data.main.temp}°C`;
            weather.innerText = `${data.weather[0].main}`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

// 위치 좌표 
// getCurrentPosition() : 실행에 성공했을 때와 실패했을 때 함수가 필요함
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
