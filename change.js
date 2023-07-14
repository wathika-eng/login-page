let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");
var names = document.getElementById("names");
var num = document.getElementById("num");
var mail = document.getElementById("mail");
let title = document.getElementById("title");


loginBtn.onclick = function(){
    document.getElementById("names").style.display = "none";
    document.getElementById("num").style.display = "none";
    document.getElementById("mail").style.display = "none";
    
    title.innerHTML = "Log-In";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    document.getElementById("names").style.display = "flex";
    document.getElementById("mail").style.display = "flex";
    document.getElementById("num").style.display = "flex";
    
    title.innerHTML = "Sign-Up";
    loginBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
}

