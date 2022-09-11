const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// to do array
let toDos = [];
// localStorage todo key값
const TODOS_KEY = "todos";

function saveToDos(){
    // JSON.stringify() : js object나 array 등을 string으로 변환해줌
    // 왜? 배열을 localStorage에 저장하면 array로 저장이 안되기 때문에 string으로 변환 후 이를 다시 js object로 변환해야 함
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDO(event){
    // button 마다의 li 찾기
    // parentElemet : 클릭된 element의 부모
    const li = event.target.parentElement;
    li.remove();

    // 배열.filter(함수명) : 함수가 true를 리턴해야 해당 배열의 item이 유지됨. false면 삭제!
    // 즉, 클릭한 toDo의 id와 클릭한 li의 id값이 다르면 유지, 같으면 삭제 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDO);
    // li 태그 안에 span, button을 자식 태그로 넣기
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    // ul 태그 안에 li를 자식 태그로 넣기
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    // input의 값을 newTodo에 저장 후 input 값은 다시 빈칸으로
    const newTodo = toDoInput.value;    
    toDoInput.value = "";

    // toDo의 text만 저장하는게 아니라 id값도 부여해서 object로 저장하기!
    // id값을 지정하는 이유? li를 id값으로 구분하기 위해서
    const newTodoObj = {
        text: newTodo,
        // Date.now() : 현재 시간을 ms로 변환해서 리턴 
        id: Date.now()
    }

    // toDos 배열에 push 후 화면에 출력 후 localStorage에 저장
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* function sayHello(item){
    console.log("this is turn of", item)
} */

// 저장한 todos를 배열로 변환 후 화면에 출력하기
const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos != null){
    // localStoragy가 null이 아니면 js object로 변환하기
    // JSON.parse() : string을 js object로 변환해줌
    const parsedToDos = JSON.parse(savedTodos);
    // localStoragy에 저장된 배열에 새로운 toDos value 넣기
    toDos = parsedToDos;
    // array의 각각 item에 대해 function 실행하기 : forEach 사용
    // 각 item이 어떤건지 알려면, 따로 function을 만들고 argument에 item을 추가해도 되지만, 아래와 같이 함수를 간단하게 생성할 수 있음
    // => : arrow function
    // parsedToDos.forEach((item) => console.log("this is turn of", item));
    parsedToDos.forEach(paintToDo);
}


