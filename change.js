let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");


loginBtn.onclick = function(){
    namefield.style.maxHeight = "0px";
    title.innerHTML = "Log-In";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    namefield.style.maxHeight = "60px";
    title.innerHTML = "Sign-Up";
    loginBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}

