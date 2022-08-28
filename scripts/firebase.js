"use strict";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { loginBox } from "./script.js";
const loginButton = document.querySelector(".login-button");
const loginBtn = document.querySelector(".login-btn");
const logoutBtn = document.querySelector(".logout-btn");
const logoutButton = document.querySelector(".logout-button");
const signupButton = document.querySelector(".signup-button");
const displayUser = document.querySelector(".display-user");
export const emailInput = document.querySelector(".username-input");
export const passwordInput = document.querySelector(".password-input");
export const wrongCred = document.querySelector(".wrong-credentials");

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
connectAuthEmulator(auth, "http://localhost:9090");

const loginEmailPassword = async () => {
  wrongCred.classList.add("hidden");
  const emailTxt = emailInput.value;
  const passwordTxt = passwordInput.value;

  const userCredential = await signInWithEmailAndPassword(
    auth,
    emailTxt,
    passwordTxt
  );
  console.log(userCredential.user);

  // try {
  //   const userCredential = await signInWithEmailAndPassword(
  //     auth,
  //     emailTxt,
  //     passwordTxt
  //   );
  //   console.log(userCredential.user);
  // } catch (err) {
  //   wrongCred.classList.remove("hidden");
  // }
};

loginButton.addEventListener("click", loginEmailPassword);

const createAccount = async () => {
  const emailTxt = emailInput.value;
  const passwordTxt = passwordInput.value;

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    emailTxt,
    passwordTxt
  );
  console.log(userCredential.user);

  // try {
  //   const userCredential = await signInWithEmailAndPassword(
  //     auth,
  //     emailTxt,
  //     passwordTxt
  //   );
  //   console.log(userCredential.user);
  // } catch (err) {
  //   wrongCred.classList.remove("hidden");
  // }
};

signupButton.addEventListener("click", createAccount);

const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loginBox.classList.add("hidden");
      loginBtn.classList.add("hidden");
      logoutBtn.classList.remove("hidden");
      console.log(auth.email);
      displayUser.textContent = `Welcome, ${
        user.email.charAt(0).toUpperCase() + user.email.slice(1, 5)
      }`;
    } else {
      // loginBox.classList.remove("hidden");
      loginBtn.classList.remove("hidden");
      logoutBtn.classList.add("hidden");
    }
  });
};
monitorAuthState();

const logout = async () => {
  await signOut(auth);
};

logoutBtn.addEventListener("click", logout);
