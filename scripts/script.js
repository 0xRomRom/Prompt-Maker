"use strict";

import {
  wrongCred,
  emailInput,
  passwordInput,
  signupBox,
  loginInputBox,
} from "./firebase.js";
import {
  totalCounter,
  subjectCounter,
  locationCounter,
  themesCounter,
  designCounter,
  lightningCounter,
  colorsCounter,
  cameraCounter,
  artistsCounter,
  imageCounter,
} from "./animate.js";

const promptString = document.querySelector(".prompt-string");
const copyPromptString = document.querySelector(".copy-prompt");

export const dot1 = document.querySelector(".dot-1");
export const dot2 = document.querySelector(".dot-2");
export const dot3 = document.querySelector(".dot-3");

const subjectMiniCounter = document.querySelector(".subjects-counter");
const locationMiniCounter = document.querySelector(".locations-counter");
const themeMiniCounter = document.querySelector(".themes-mini-counter");
const designMiniCounter = document.querySelector(".designs-counter");
const lightningMiniCounter = document.querySelector(".lightnings-counter");
const colorsMiniCounter = document.querySelector(".colors-mini-counter");
const cameraMiniCounter = document.querySelector(".cameras-counter");
const artistMiniCounter = document.querySelector(".artists-mini-counter");
const imageMiniCounter = document.querySelector(".imagess-counter");

export const loginBox = document.querySelector(".login-box");
const loginInnerBox = document.querySelector(".login-inputbox");
const loginNav = document.querySelector(".login-btn");
const hideLogin = document.querySelector(".hide-login");
const signupBack = document.querySelector(".signup-back");

//Init//
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
emailInput.value = "";
passwordInput.value = "";
////////

//Copy resulting query
copyPromptString.addEventListener("click", () => {
  promptString.select();
  document.execCommand("copy");
  alert("Query Copied!");
});

//Append selection to query
const appendToQuery = (string) => {
  promptString.value += `${string.charAt(0).toUpperCase() + string.slice(1)}, `;
};

//Subjects UI updater
let subjectPick = document.querySelectorAll(".box1");
subjectPick.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    console.log(item.dataset.id);
    subjectCount++;
    totalCount++;
    subjectCounter.textContent = subjectCount;
    subjectMiniCounter.textContent = subjectCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});

let locationPick = document.querySelectorAll(".box2");
locationPick.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    console.log(item.dataset.id);
    locationCount++;
    totalCount++;
    locationCounter.textContent = locationCount;
    locationMiniCounter.textContent = locationCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});

let themesPick = document.querySelectorAll(".box3");
themesPick.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    console.log(item.dataset.id);
    themesCount++;
    totalCount++;
    themesCounter.textContent = themesCount;
    themeMiniCounter.textContent = themesCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});

let designPick = document.querySelectorAll(".box4");
designPick.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    console.log(item.dataset.id);
    designCount++;
    totalCount++;
    designCounter.textContent = designCount;
    designMiniCounter.textContent = designCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});

let lightningPick = document.querySelectorAll(".box5");
lightningPick.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    console.log(item.dataset.id);
    lightningCount++;
    totalCount++;
    lightningCounter.textContent = lightningCount;
    lightningMiniCounter.textContent = lightningCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});

let colorsPick = document.querySelectorAll(".box6");
colorsPick.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    console.log(item.dataset.id);
    colorsCount++;
    totalCount++;
    colorsCounter.textContent = colorsCount;
    colorsMiniCounter.textContent = colorsCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});

let cameraPick = document.querySelectorAll(".box7");
cameraPick.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    console.log(item.dataset.id);
    cameraCount++;
    totalCount++;
    cameraCounter.textContent = cameraCount;
    cameraMiniCounter.textContent = cameraCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});

let artistsPick = document.querySelectorAll(".box8");
artistsPick.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    console.log(item.dataset.id);
    artistsCount++;
    totalCount++;
    artistsCounter.textContent = artistsCount;
    artistMiniCounter.textContent = artistsCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});

// Open/close login modal
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
