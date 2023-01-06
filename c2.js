let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
let mailfield = document.getElementById("mailfield");
let title = document.getElementById("title");

loginBtn.onclick = function(){
    mailfield.style.maxHeight = "0";
    title.innerHTML = "Log-In";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}
signupBtn.onclick = function(){
    mailfield.style.maxHeight = "65px";
    title.innerHTML = "Sign-Up";
    loginBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}