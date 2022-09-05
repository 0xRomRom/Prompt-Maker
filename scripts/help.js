"use strict";

const loginInputBox = document.querySelector(".login-inputbox");
const signupBox = document.querySelector(".signup-inputbox");
const loginBox = document.querySelector(".login-box");
const loginNav = document.querySelector(".login-btn");
const hideLogin = document.querySelector(".hide-login");
const signupBack = document.querySelector(".signup-back");
const emailInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const wrongCred = document.querySelector(".wrong-credentials");

const promptString = document.querySelector(".prompt-string");
const loadStorage = localStorage.getItem("promptSave");
window.addEventListener("load", () => {
  if (loadStorage === null) return;
  promptString.value = loadStorage;
});

loginNav.addEventListener("click", () => {
  loginBox.classList.remove("hidden");
  loginInputBox.classList.remove("hidden");
});

hideLogin.addEventListener("click", () => {
  loginBox.classList.add("hidden");
  wrongCred.classList.add("hidden");
  signupBox.classList.add("hidden");
  emailInput.value = "";
  passwordInput.value = "";
});

signupBack.addEventListener("click", () => {
  signupBox.classList.add("hidden");
  loginInputBox.classList.remove("hidden");
});
