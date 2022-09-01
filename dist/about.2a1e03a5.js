"use strict";
const loginInputBox = document.querySelector(".login-inputbox");
const signupBox = document.querySelector(".signup-inputbox");
const loginBox = document.querySelector(".login-box");
const loginNav = document.querySelector(".login-btn");
const hideLogin = document.querySelector(".hide-login");
const signupBack = document.querySelector(".signup-back");
loginNav.addEventListener("click", ()=>{
    console.log("hi");
    loginBox.classList.remove("hidden");
    loginInputBox.classList.remove("hidden");
});
hideLogin.addEventListener("click", ()=>{
    loginBox.classList.add("hidden");
    wrongCred.classList.add("hidden");
    signupBox.classList.add("hidden");
    emailInput.value = "";
    passwordInput.value = "";
});
signupBack.addEventListener("click", ()=>{
    signupBox.classList.add("hidden");
    loginInputBox.classList.remove("hidden");
});

//# sourceMappingURL=about.2a1e03a5.js.map
