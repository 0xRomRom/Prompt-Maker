"use strict";

import { initializeApp } from "firebase/app";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { subAnimals, subBuildings } from "./catIndex.js";

const loginBox = document.querySelector(".login-box");
const loginButton = document.querySelector(".login-button");
const loginBtn = document.querySelector(".login-btn");
const logoutBtn = document.querySelector(".logout-btn");
const signupButton = document.querySelector(".signup-button");
const signupForwards = document.querySelector(".signup-forwards");
const loginInputBox = document.querySelector(".login-inputbox");
const signupBox = document.querySelector(".signup-inputbox");
const displayUser = document.querySelector(".display-user");
const emailInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const usernameRegister = document.querySelector(".username-register");
const passwordRegister = document.querySelector(".password-register");
const wrongCred = document.querySelector(".wrong-credentials");
const lightboxDiv = document.querySelector(".outer-lightbox");
const lightboxShade = document.querySelector(".lightbox-shade");
const lightboxImgDiv = document.querySelector(".lightbox-imgdiv");
const lightboxParent = document.querySelector(".lightbox");

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyA5SwOpU8KCIMaOEAcpgKSGCeJ5zGa4mYM",
  authDomain: "prompt-maker.firebaseapp.com",
  projectId: "prompt-maker",
  storageBucket: "prompt-maker.appspot.com",
  messagingSenderId: "449676529770",
  appId: "1:449676529770:web:470531242f944aa58dfa13",
  measurementId: "G-DWN7577Z1B",
});

const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:9090");

//Show Signup modal
signupForwards.addEventListener("click", (e) => {
  e.preventDefault();
  loginInputBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
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
};
logoutBtn.addEventListener("click", logout);

//Check if user is logged in
const monitorAuthState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loginBox.classList.add("hidden");
      loginBtn.classList.add("hidden");
      logoutBtn.classList.remove("hidden");
      console.log(user.email);
      displayUser.textContent = `Welcome`;
    } else {
      loginBtn.classList.remove("hidden");
      logoutBtn.classList.add("hidden");
    }
  });
};
monitorAuthState();

// firebase emulators:start --only auth

const addtoDiv = (img, i) => {
  const lightbox = document.querySelector(".lightbox");
  const lightDiv = document.createElement("div");
  const newImg = document.createElement("img");
  const newPar = document.createElement("p");
  newPar.textContent = Object.values(subAnimals)[i];
  newImg.className = `lightbox-img ${"a" + i}`;
  lightDiv.className = `lightbox-imgdiv`;
  newPar.className = "lightbox-txt";
  newImg.setAttribute("src", img);
  lightDiv.appendChild(newImg);
  lightDiv.appendChild(newPar);
  lightbox.appendChild(lightDiv);
  lightboxShade.classList.remove("hidden");
  lightboxDiv.classList.remove("hidden");
};

const allSubs = document.querySelectorAll(".subjects-style");
allSubs.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e);
    const storage = getStorage();
    const iLen = Object.keys(subAnimals).length;
    for (let i = 0; i < iLen; i++) {
      getDownloadURL(ref(storage, `/subject/${item.dataset.id}/${i}.png`))
        .then((url) => {
          addtoDiv(url, i);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

//Toggle between borders
let borderBool = false;
lightboxParent.addEventListener("click", (e) => {
  console.log(e.target.classList[1].slice(1));
  console.log(e.target.offsetParent.firstChild.classList[1].slice(1));
  if (e.target.offsetParent.style.border === "4px solid rgb(0, 228, 225)") {
    e.target.offsetParent.style.border = "initial";
    borderBool = true;
    return;
  }
  e.target.offsetParent.style.border = "4px solid rgb(0, 228, 225)";
  borderBool = false;
});

lightboxParent.addEventListener("mouseover", (e) => {
  if (!borderBool) return;
  e.target.offsetParent.style.border = "3px solid rgb(35, 42, 99)";
});
lightboxParent.addEventListener("mouseout", (e) => {
  if (!borderBool) return;
  e.target.offsetParent.style.border = "3px solid transparent";
});
