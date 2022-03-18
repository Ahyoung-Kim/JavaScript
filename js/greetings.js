const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1");

function onLoginSubmit(event){
    event.preventDefault();

    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);

    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove("hidden");
    greeting.innerText="Hello "+username;
}

const savedUsername=localStorage.getItem("username");

if(savedUsername===null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}