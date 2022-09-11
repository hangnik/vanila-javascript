const clock = document.querySelector("h2#clock");
const days = document.querySelector("#clock-div span");

function sayHello(){
    //console.log("hello");
}

// setInterval(함수명, 시간(ms)) : 지정한 시간마다 함수를 반복적으로 호출 
// setInterval(sayHello, 5000);

// setTimeout(함수명, 시간(ms)) : 지정한 시간 후에 함수를 실행
// (sayHello, 5000);

// 현재 시간 출력하기
function getClock(){
    // 시간과 관련된 함수 : Date()
    const date = new Date();
    // 한자리 수인 숫자는 앞에 0붙여서 표기하기
    // padStart(String 길이, "추가할 문자") : String 앞자리에 지정한 string 길이만큼 문자를 추가해줌
    // 단, String에만 추가해줄 수 있음!
    // number -> String : String(number);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date .getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    days.innerText = `${year}년 ${month}월 ${day}일`;
}
// website가 로딩되자마자 getClock() 실행 후 1초마다 다시 실행
getClock();
setInterval(getClock, 1000);
