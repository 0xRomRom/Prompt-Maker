"use strict";const loginInputBox=document.querySelector(".login-inputbox"),signupBox=document.querySelector(".signup-inputbox"),loginBox=document.querySelector(".login-box"),loginNav=document.querySelector(".login-btn"),hideLogin=document.querySelector(".hide-login"),signupBack=document.querySelector(".signup-back"),emailInput=document.querySelector(".username-input"),passwordInput=document.querySelector(".password-input"),wrongCred=document.querySelector(".wrong-credentials");loginNav.addEventListener("click",(()=>{loginBox.classList.remove("hidden"),loginInputBox.classList.remove("hidden")})),hideLogin.addEventListener("click",(()=>{loginBox.classList.add("hidden"),wrongCred.classList.add("hidden"),signupBox.classList.add("hidden"),emailInput.value="",passwordInput.value=""})),signupBack.addEventListener("click",(()=>{signupBox.classList.add("hidden"),loginInputBox.classList.remove("hidden")}));
//# sourceMappingURL=help.68e011c5.js.map