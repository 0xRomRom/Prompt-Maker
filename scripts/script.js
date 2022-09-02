"use strict";

const loginInputBox = document.querySelector(".login-inputbox");
const signupBox = document.querySelector(".signup-inputbox");
const displayUser = document.querySelector(".display-user");
const emailInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const usernameRegister = document.querySelector(".username-register");
const passwordRegister = document.querySelector(".password-register");
const wrongCred = document.querySelector(".wrong-credentials");

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

const promptString = document.querySelector(".prompt-string");
const copyPromptString = document.querySelector(".copy-prompt");

const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");

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
const loginNav = document.querySelector(".login-btn");
const hideLogin = document.querySelector(".hide-login");
const signupBack = document.querySelector(".signup-back");

const lightbox = document.querySelector(".outer-lightbox");
const lightboxContent = document.querySelector(".lightbox");
const closeLightbox = document.querySelector(".close-lightbox");
const lightboxShade = document.querySelector(".lightbox-shade");
const newPar = document.querySelector(".lightbox-txt");
const promptCopied = document.querySelector(".prompt-copied");

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
  if (promptString.value < 3) return;
  promptString.select();
  document.execCommand("copy");
  promptCopied.classList.remove("hidden");
  promptCopied.classList.add("dropdown");
  setTimeout(() => {
    promptCopied.classList.add("hidden");
    promptCopied.classList.remove("dropdown");
  }, 2000);
});

// Open/close login modal/lightbox
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
