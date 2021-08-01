const male = document.querySelector("#male");
const female = document.querySelector("#female");
const secret = document.querySelector("#secret");

male.addEventListener('click', function(){
    if(male.checked){
        const btn = document.querySelectorAll(".btn");
        btn[0].classList.add("selected");
        btn[1].classList.remove("selected");
        btn[2].classList.remove("selected");
    }
});

female.addEventListener('click', function(){
    if(female.checked){
        const btn = document.querySelectorAll(".btn");
        btn[0].classList.remove("selected");
        btn[1].classList.add("selected");
        btn[2].classList.remove("selected");
    }
});

secret.addEventListener('click', function(){
    if(secret.checked){
        const btn = document.querySelectorAll(".btn");
        btn[0].classList.remove("selected");
        btn[1].classList.remove("selected");
        btn[2].classList.add("selected");
    }
});

const register = document.querySelector("#reg-btn");
register.addEventListener('click', ()=> {
    const name = document.querySelector("input[name='name']");
    const email = document.querySelector("input[name='email']");
    const position = document.querySelector("input[name='position']");
    const password = document.querySelector("input[name='password']");
    if(!name.value){
        const span = document.querySelector("#name-err");
        span.innerText = "Please Enter Your Name";
    }
    if(!email.value){
        const span = document.querySelector("#email-err");
        span.innerText = "Please Enter Your Email";
    }
    if(!position){
        const span = document.querySelector("#pos-err");
        span.innerText = "Please Select Your Position";
    }
    if(!password.value){
        const span = document.querySelector("#pas-err");
        span.innerText = "Please Enter Password";
    }
})