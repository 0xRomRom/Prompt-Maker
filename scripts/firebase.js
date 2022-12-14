"use strict";

import { initializeApp } from "firebase/app";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

import { animals, buildings } from "./catIndex.js";
import { targetCategory } from "./animate.js";

//Refference object for the render/fetch/loop function below
const indexObject = {
  animals: animals,
  buildings: buildings,
};

//Init
let stringArray = [];
let totalStringArray = [];
let refObject = {};
let intExpand = 0;
let totalCount = 0;
let subjectCount = 0;
let locationCount = 0;
let themesCount = 0;
let designCount = 0;
let lightningCount = 0;
let colorsCount = 0;
let cameraCount = 0;
let artistsCount = 0;
let imageCount = 0;

const totalCounter = document.querySelector(".total-selection-counter");
const subjectCounter = document.querySelector(".subject-counter");
const locationCounter = document.querySelector(".location-counter");
const themesCounter = document.querySelector(".themes-counter");
const designCounter = document.querySelector(".design-counter");
const lightningCounter = document.querySelector(".lightning-counter");
const colorsCounter = document.querySelector(".colors-counter");
const cameraCounter = document.querySelector(".camera-counter");
const artistsCounter = document.querySelector(".artists-counter");
const imageCounter = document.querySelector(".image-counter");

const subjectMiniCounter = document.querySelector(".subjects-counter");
const locationMiniCounter = document.querySelector(".locations-counter");
const themeMiniCounter = document.querySelector(".themes-mini-counter");
const designMiniCounter = document.querySelector(".designs-counter");
const lightningMiniCounter = document.querySelector(".lightnings-counter");
const colorsMiniCounter = document.querySelector(".colors-mini-counter");
const cameraMiniCounter = document.querySelector(".cameras-counter");
const artistMiniCounter = document.querySelector(".artists-mini-counter");
const imageMiniCounter = document.querySelector(".imagess-counter");

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
const passwordResetInput = document.querySelector(".password-reset");
const emailSentModal = document.querySelector(".email-sent-modal");
const wrongCred = document.querySelector(".wrong-credentials");
const lightboxDiv = document.querySelector(".outer-lightbox");
const lightboxShade = document.querySelector(".lightbox-shade");
const noUserText = document.querySelector(".no-user");
const lightboxParent = document.querySelector(".lightbox");
const outputText = document.querySelector(".output-txt");
const clearPromptIcon = document.querySelector(".fa-file");

const closeLightbox = document.querySelector(".close-lightbox");
const clearClose = document.querySelector(".clear-close");
const selectStyles = document.querySelector(".select-styles");
const passResetButton = document.querySelector(".reset-button");

//Load stored prompt on page load
const promptString = document.querySelector(".prompt-string");
const promptValue = localStorage.getItem("promptSave");
window.addEventListener("load", () => {
  if (promptValue === null) return;
  promptString.value = promptValue;
});

//Show Signup modal
signupForwards.addEventListener("click", (e) => {
  e.preventDefault();
  loginInputBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
});

//Firebase Logic
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
    console.log(userCredential.token);
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

//Reset password
const resetPassword = () => {
  const passInput = passwordResetInput.value;
  noUserText.classList.add("hidden");
  sendPasswordResetEmail(auth, passInput)
    .then(() => {
      passwordResetInput.value = "";
      emailSentModal.classList.remove("hidden");
      console.log("Reset email sent!");
    })
    .catch((error) => {
      noUserText.classList.remove("hidden");
      console.log(error);
    });
};
passResetButton.addEventListener("click", resetPassword);

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
///

//Function that is called in the loop below.
//Creates a new box for every keyword/image
//Will attach classes to refference/manipulate
const addtoDiv = (img, i) => {
  const selectedDivs = document.querySelectorAll(".lightbox-imgdiv");
  selectedDivs.forEach((item) => {
    item.className = "lightbox-imgdiv";
  });
  const lightbox = document.querySelector(".lightbox");
  const lightDiv = document.createElement("div");
  const newImg = document.createElement("img");
  const newPar = document.createElement("p");
  newPar.textContent = "";
  newPar.textContent = Object.values(refObject)[i];
  newImg.className = `lightbox-img ${"a" + i}`;
  lightDiv.className = `lightbox-imgdiv`;
  lightDiv.setAttribute("data-name", `${Object.values(refObject)[i]}`);
  newPar.className = "lightbox-txt";
  newImg.setAttribute("src", img);
  lightDiv.appendChild(newImg);
  lightDiv.appendChild(newPar);
  lightbox.appendChild(lightDiv);
  const selectedImg = document.querySelectorAll(".lightbox-imgdiv");
  selectedImg.forEach((item) => {
    totalStringArray.forEach((word) => {
      if (word.slice(1) === item.dataset.name) {
        item.classList.add("selected");
        outputText.textContent = totalStringArray.toString();
      }
    });
  });
  lightboxShade.classList.remove("hidden");
  lightboxDiv.classList.remove("hidden");
};

//Check for clicked submenu name.
//Compare submenu name with match in indexObject
//Loop over indexObject and fill temporary Object: refObject
//Access the right path in Firebase to render the right lightbox
const allSubs = document.querySelectorAll(".subjects-style");
allSubs.forEach((item) => {
  item.addEventListener("click", (e) => {
    for (let [key, value] of Object.entries(indexObject)) {
      if (e.target.offsetParent.dataset.id === key) {
        refObject = value;
      }
    }

    const storage = getStorage();
    intExpand = +Object.keys(refObject).length;

    for (let i = 0; i < intExpand; i++) {
      getDownloadURL(
        ref(storage, `/${targetCategory}/${item.dataset.id}/${i}.png`)
      )
        .then((url) => {
          addtoDiv(url, i);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
});

//Toggle between keywords
//Click to select, click again to deselect
lightboxParent.addEventListener("click", (e) => {
  if (e.target.classList[0] === "outer-lightbox") return;
  if (e.target.classList[0] === "lightbox-imgdiv") return;
  if (e.target.classList[0] === "lightbox") return;
  if (promptString.value.charAt(0) === ",") {
    promptString.value = promptString.value.slice(1);
  }
  if (e.target.offsetParent.classList.contains("selected")) {
    e.target.offsetParent.classList.remove("selected");

    const index = stringArray.indexOf(
      " " + e.target.offsetParent.lastChild.textContent
    );
    if (index !== -1) {
      stringArray.splice(index, 1);
    }
    const index2 = totalStringArray.indexOf(
      " " + e.target.offsetParent.lastChild.textContent
    );
    if (index2 !== -1) {
      totalStringArray.splice(index2, 1);
    }
    outputText.textContent = totalStringArray.toString();
    return;
  }
  e.target.offsetParent.classList.add("selected");
  stringArray.push(
    " " + Object.values(refObject)[+e.target.classList[1].slice(1)]
  );
  totalStringArray.push(
    " " + Object.values(refObject)[+e.target.classList[1].slice(1)]
  );
  outputText.textContent = totalStringArray.toString();
});

//Clear styles button
clearClose.addEventListener("click", () => {
  outputText.textContent = "";
  const selectedDivs = document.querySelectorAll(".lightbox-imgdiv");
  console.log(totalStringArray);
  selectedDivs.forEach((item) => {
    item.className = "lightbox-imgdiv";
    const index2 = totalStringArray.indexOf(" " + item.lastChild.textContent);
    if (index2 !== -1) {
      totalStringArray.splice(index2, 1);
    }
  });
  promptString.value = "";
  promptString.value = totalStringArray.toString();
  localStorage.setItem("promptSave", promptString.value);
  lightboxDiv.classList.add("hidden");
  lightboxShade.classList.add("hidden");
  lightboxParent.innerHTML = "";
});

//Apply styles button
selectStyles.addEventListener("click", () => {
  localStorage.setItem("promptSave", totalStringArray.toString());
  promptString.value = "";
  promptString.value = totalStringArray;
  lightboxDiv.classList.add("hidden");
  lightboxShade.classList.add("hidden");
  lightboxParent.innerHTML = "";
  const selectedDivs = document.querySelectorAll(".lightbox-imgdiv");
  selectedDivs.forEach((item) => {
    item.className = "lightbox-imgdiv";
  });
});

//Close lightbox button
closeLightbox.addEventListener("click", () => {
  lightboxDiv.classList.add("hidden");
  lightboxShade.classList.add("hidden");
  lightboxParent.innerHTML = "";
  outputText.textContent = "";
  const selectedDivs = document.querySelectorAll(".lightbox-imgdiv");
  selectedDivs.forEach((item) => {
    item.className = "lightbox-imgdiv";
  });
});

//Close lightbox by background click
lightboxShade.addEventListener("click", () => {
  lightboxDiv.classList.add("hidden");
  lightboxShade.classList.add("hidden");
  lightboxParent.innerHTML = "";
  outputText.textContent = "";
  const selectedDivs = document.querySelectorAll(".lightbox-imgdiv");
  selectedDivs.forEach((item) => {
    item.className = "lightbox-imgdiv";
  });
});

//Clear prompt
clearPromptIcon.addEventListener("click", () => {
  promptString.value = "";
  localStorage.setItem("promptSave", " ");
});
