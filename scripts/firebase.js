"use strict";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "firebase/auth";
const loginButton = document.querySelector(".login-button");
const signupButton = document.querySelector(".signup-button");
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

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailTxt,
      passwordTxt
    );
    console.log(userCredential.user);
  } catch (err) {
    wrongCred.classList.remove("hidden");
  }
};

loginButton.addEventListener("click", loginEmailPassword);
