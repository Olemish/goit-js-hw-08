import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input")
const message = document.querySelector(".feedback-form textarea")

const state = localStorage.getItem('feedback-form-state') ? JSON.parse(localStorage.getItem('feedback-form-state')) : {}

if (localStorage.getItem("feedback-form-state") !== null) {
    const { email, message } = JSON.parse(localStorage.getItem('feedback-form-state'))
    form.email.value = email;
    form.message.value = message;
}

email.addEventListener('input', e => handleInput(e))
message.addEventListener('input', e => handleInput(e))
form.addEventListener('submit', e => clearSubmitForm(e))

function handleInput(e) {
    state[e.target.name]= e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(state))
}

function clearSubmitForm(e){
    e.preventDefault()
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')))  
    localStorage.removeItem('feedback-form-state')
    form.email.value = "";
    form.message.value = "";
}

