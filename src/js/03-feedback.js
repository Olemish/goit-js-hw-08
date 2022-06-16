import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".feedback-form input")
const message = document.querySelector(".feedback-form textarea")

const state = localStorage.getItem('feedback-form-state') ? JSON.parse(localStorage.getItem('feedback-form-state')) : {}

if (localStorage.getItem("feedback-form-state") !== null) {
    const { email, message } = JSON.parse(localStorage.getItem('feedback-form-state'))
    form.email.value = email ? email : '';
    form.message.value = message ? message : '';
}

email.addEventListener('input', throttle(e => handleInput(e),500))
message.addEventListener('input', throttle(e => handleInput(e),500))
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

