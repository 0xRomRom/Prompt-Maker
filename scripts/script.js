"use strict";

//Auth
const loginInputBox = document.querySelector(".login-inputbox");
const signupBox = document.querySelector(".signup-inputbox");
const resetPasswordBox = document.querySelector(".forgot-password-box");
const displayUser = document.querySelector(".display-user");
const emailInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const usernameRegister = document.querySelector(".username-register");
const passwordRegister = document.querySelector(".password-register");
const wrongCred = document.querySelector(".wrong-credentials");
const noUserText = document.querySelector(".no-user");
const passwordReset = document.querySelector(".password-reset");
const emailSentModal = document.querySelector(".email-sent-modal");
const loginBox = document.querySelector(".login-box");
const loginNav = document.querySelector(".login-btn");
const hideLogin = document.querySelector(".hide-login");
const signupBack = document.querySelector(".signup-back");
const resetBack = document.querySelector(".reset-back");
const resetBack2 = document.querySelector(".reset-back2");
const forgotPassBtn = document.querySelector(".forgot-pass-btn");

//Counters
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
//
const subjectMiniCounter = document.querySelector(".subjects-counter");
const locationMiniCounter = document.querySelector(".locations-counter");
const themeMiniCounter = document.querySelector(".themes-mini-counter");
const designMiniCounter = document.querySelector(".designs-counter");
const lightningMiniCounter = document.querySelector(".lightnings-counter");
const colorsMiniCounter = document.querySelector(".colors-mini-counter");
const cameraMiniCounter = document.querySelector(".cameras-counter");
const artistMiniCounter = document.querySelector(".artists-mini-counter");
const imageMiniCounter = document.querySelector(".imagess-counter");

//Result string
const promptString = document.querySelector(".prompt-string");
const copyPromptString = document.querySelector(".copy-prompt");

//Dot menu
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");

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
////////

//Copy resulting query
copyPromptString.addEventListener("click", () => {
  if (promptString.value < 3) return;
  if (promptString.value.endsWith(",")) {
    promptString.value = promptString.value.slice(0, -1);
  }
  copyPromptString.disabled = true;
  promptCopied.classList.remove("hidden");
  promptCopied.classList.add("dropdown");
  setTimeout(() => {
    copyPromptString.disabled = false;
    promptCopied.classList.add("hidden");
    promptCopied.classList.remove("dropdown");
  }, 2000);
  promptString.select();
  document.execCommand("copy");
});

//Open login modal
loginNav.addEventListener("click", () => {
  loginBox.classList.remove("hidden");
  loginInputBox.classList.remove("hidden");
});

//Close login modal
hideLogin.addEventListener("click", () => {
  loginBox.classList.add("hidden");
  wrongCred.classList.add("hidden");
  signupBox.classList.add("hidden");
  emailInput.value = "";
  passwordInput.value = "";
});

//Go back from signup page
signupBack.addEventListener("click", () => {
  signupBox.classList.add("hidden");
  resetPasswordBox.classList.add("hidden");
  loginInputBox.classList.remove("hidden");
});

//Reset password back
resetBack.addEventListener("click", () => {
  signupBox.classList.add("hidden");
  resetPasswordBox.classList.add("hidden");
  loginInputBox.classList.remove("hidden");
  noUserText.classList.add("hidden");
  passwordReset.value = "";
});

//Reset password back (modal2)
resetBack2.addEventListener("click", () => {
  signupBox.classList.add("hidden");
  resetPasswordBox.classList.add("hidden");
  noUserText.classList.add("hidden");
  emailSentModal.classList.add("hidden");
  loginInputBox.classList.remove("hidden");
});

//Open forgot password modal
forgotPassBtn.addEventListener("click", () => {
  signupBox.classList.add("hidden");
  resetPasswordBox.classList.remove("hidden");
  loginInputBox.classList.add("hidden");
});
