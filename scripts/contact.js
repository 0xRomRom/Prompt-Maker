"use strict";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const loginInputBox = document.querySelector(".login-inputbox");
const signupBox = document.querySelector(".signup-inputbox");
const loginBox = document.querySelector(".login-box");
const loginNav = document.querySelector(".login-btn");
const loginButton = document.querySelector(".login-button");
const hideLogin = document.querySelector(".hide-login");
const signupBack = document.querySelector(".signup-back");
const emailInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const wrongCred = document.querySelector(".wrong-credentials");
const navBar = document.querySelector(".navclass");
const loginBtn = document.querySelector(".login-btn");
const logoutBtn = document.querySelector(".logout-btn");
const displayUser = document.querySelector(".display-user");
const signupButton = document.querySelector(".signup-button");
const usernameRegister = document.querySelector(".username-register");
const passwordRegister = document.querySelector(".password-register");

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA5SwOpU8KCIMaOEAcpgKSGCeJ5zGa4mYM",
  authDomain: "prompt-maker.firebaseapp.com",
  projectId: "prompt-maker",
  storageBucket: "prompt-maker.appspot.com",
  messagingSenderId: "449676529770",
  appId: "1:449676529770:web:470531242f944aa58dfa13",
  measurementId: "G-DWN7577Z1B",
});

const auth = getAuth(firebaseApp);

//Localstorage save
const promptString = document.querySelector(".prompt-string");
const loadStorage = localStorage.getItem("promptSave");
window.addEventListener("load", () => {
  if (loadStorage === null) return;
  promptString.value = loadStorage;
});

//Create Account
const createAccount = async () => {
  const emailTxt = usernameRegister.value;
  const passwordTxt = passwordRegister.value;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    emailTxt,
    passwordTxt
  );
  signupBox.classList.add("hidden");
  loginInputBox.classList.add("hidden");
  usernameRegister.value = "";
  passwordRegister.value = "";
  console.log(userCredential.user);
};
signupButton.addEventListener("click", createAccount);

//Login
const loginEmailPassword = async () => {
  wrongCred.classList.add("hidden");
  const emailTxt = emailInput.value;
  const passwordTxt = passwordInput.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailTxt,
      passwordTxt
    );
    navBar.classList.remove("hidden");
    console.log(userCredential.user);
  } catch (err) {
    wrongCred.classList.remove("hidden");
    console.log(err);
  }
};
loginButton.addEventListener("click", loginEmailPassword);

//Logout
const logout = async () => {
  await signOut(auth);
  displayUser.textContent = "";
  emailInput.value = "";
  passwordInput.value = "";
  wrongCred.classList.add("hidden");
  loginBox.classList.add("hidden");
  signupBox.classList.add("hidden");
  loginInputBox.classList.remove("hidden");
  navBar.classList.remove("hidden");
};
logoutBtn.addEventListener("click", logout);

//Check if user is logged in
const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loginBox.classList.add("hidden");
      loginBtn.classList.add("hidden");
      logoutBtn.classList.remove("hidden");
      displayUser.textContent = `Welcome`;
    } else {
      loginBtn.classList.remove("hidden");
      logoutBtn.classList.add("hidden");
    }
  });
};
monitorAuthState();

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
