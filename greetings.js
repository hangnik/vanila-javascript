const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// 일반적으로 string만 포함된 변수는 대문자로 표기
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    // event 관련 function에는 보통 argument를 event로 작성하는게 관행
    // input에 입력한 value 값 가져오기
    // console.log(loginInput.value);
    const username = loginInput.value;
    
    // username 유효성 검사
    /* if(username === ""){
        alert("Please write your name");
    }else if(username.length > 15){
        alert("Your name is too long.");
    } */
    // 위처럼 자바스크립트로 유효성 검사를 할 수도 있지만, html로 구현할 수 있는 기능이라면 최대한 html 속성 사용하기!

    // preventDefault() : 어떤 event의 기본 행동을 막아줌
    // 지금은 submit의 기본 동작인 새로고침 하는 것을 막아줌
    event.preventDefault();

    // form 제출 후에 form 감추기
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //console.log(username);

    // 감춰둔 h1에 입력한 username값 표기하고 hidden 없애기
    // 변수와 String을 합치는 방법 두가지
    //greeting.innerText = "Hello " + username;
    // 아래의 방법이 더 새로운 방식. 따움표가 아닌 백틱(``) 안에 ${변수명}을 입력하면 됨
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

    // value값(username) 저장하기 : "localStorage" 라는 API 사용
    // localStorage.setItem("key", "value");
    // 저장한 값은 개발자도구 -> Application -> Local Storage에서 볼 수 있음
    // 저장한 값 불러오기 : localStorage.getItem("key");
    // 값 삭제하기 : localStorage.removeItem("key");
}

// button click말고 submit 사용하기
// submit : 엔터를 누르거나 버튼을 클릭하면 이벤트 실행 
loginForm.addEventListener("submit", onLoginSubmit);

// 여기서 가장 중요한건 addEventListener 안에 있는 함수는 직접 실행하지 않는다는 것!! -> 브라우저가 실행하는것.

// 중복되는 코드는 function으로 만들기
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 최종적으로 하고싶은 것.. -> localStorage에 유저정보가 있으면 form 감추기, 없으면 form 보여주기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // 유저정보가 null이면 hidden class 제거 후 form 보여주기 form submit
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    // 유저정보가 저장돼있으면 h1에 username 추가 후 hidden class 제거
    paintGreetings(savedUsername);
}
