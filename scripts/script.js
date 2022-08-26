"use strict";

const promptString = document.querySelector(".prompt-string");
const copyPromptString = document.querySelector(".copy-prompt");
const subjectBoxes = document.querySelector(".modal-boxes");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");

const sub1 = document.querySelector(".sub1");
const sub2 = document.querySelector(".sub2");
const sub3 = document.querySelector(".sub3");

export const totalCounter = document.querySelector(".total-selection-counter");
export const subjectCounter = document.querySelector(".subject-counter");
export const locationCounter = document.querySelector(".location-counter");
export const themesCounter = document.querySelector(".themes-counter");
export const designCounter = document.querySelector(".design-counter");
export const lightningCounter = document.querySelector(".lightning-counter");
export const colorsCounter = document.querySelector(".colors-counter");
export const cameraCounter = document.querySelector(".camera-counter");
export const artistsCounter = document.querySelector(".artists-counter");
export const imageCounter = document.querySelector(".image-counter");

const subjectMiniCounter = document.querySelector(".subjects-counter");
const locationMiniCounter = document.querySelector(".locations-counter");
const themeMiniCounter = document.querySelector(".themes-counter");
const designMiniCounter = document.querySelector(".designs-counter");
const lightningMiniCounter = document.querySelector(".lightnings-counter");
const colorsMiniCounter = document.querySelector(".colors-counter");
const cameraMiniCounter = document.querySelector(".cameras-counter");
const artistMiniCounter = document.querySelector(".artists-counter");
const imageMiniCounter = document.querySelector(".imagess-counter");

export const optionBox1 = document.querySelector(".option-box1");
export const optionBox2 = document.querySelector(".option-box2");
export const optionBox3 = document.querySelector(".option-box3");
export const optionBox4 = document.querySelector(".option-box4");
export const optionBox5 = document.querySelector(".option-box5");
export const optionBox6 = document.querySelector(".option-box6");
export const optionBox7 = document.querySelector(".option-box7");
export const optionBox8 = document.querySelector(".option-box8");
export const optionBox9 = document.querySelector(".option-box9");

//Init//
let totalCount = 0;
let subjectCount = 0;
////////

//Copy resulting query
copyPromptString.addEventListener("click", () => {
  promptString.select();
  document.execCommand("copy");
  alert("Query Copied!");
});

//Render right content according to button index
const dotArray = document.querySelectorAll(".dot");
dotArray.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    if (e.target.style.backgroundColor === "rgb(37, 49, 96)") return;
    let dotIndex = +e.target.classList[0].slice(4) - 1;
    menuTransitions(e);
    if (dotIndex === 0) {
      sub1.classList.remove("hidden");
      sub2.classList.add("hidden");
      sub3.classList.add("hidden");
    }
    if (dotIndex === 1) {
      sub1.classList.add("hidden");
      sub2.classList.remove("hidden");
      sub3.classList.add("hidden");
    }
    if (dotIndex === 2) {
      sub1.classList.add("hidden");
      sub2.classList.add("hidden");
      sub3.classList.remove("hidden");
    }
  });
});

const menuTransitions = (e) => {
  subjectBoxes.classList.add("fadeOut");
  setTimeout(() => {
    subjectBoxes.classList.remove("fadeOut");
  }, 500);
  if (e.target.classList.contains("d1")) {
    dot1.style.backgroundColor = "rgb(37, 49, 96)";
    dot2.style.backgroundColor = "rgb(8, 11, 22)";
    dot3.style.backgroundColor = "rgb(8, 11, 22)";
  }
  if (e.target.classList.contains("d2")) {
    dot1.style.backgroundColor = "rgb(8, 11, 22)";
    dot2.style.backgroundColor = "rgb(37, 49, 96)";
    dot3.style.backgroundColor = "rgb(8, 11, 22)";
  }
  if (e.target.classList.contains("d3")) {
    dot1.style.backgroundColor = "rgb(8, 11, 22)";
    dot2.style.backgroundColor = "rgb(8, 11, 22)";
    dot3.style.backgroundColor = "rgb(37, 49, 96)";
  }
};

//Append selection to query
const appendToQuery = (string) => {
  promptString.value += `${string.charAt(0).toUpperCase() + string.slice(1)}, `;
};

//Subjects UI updater
let allSubjects = document.querySelectorAll(".subjects-style");
allSubjects.forEach((item) => {
  item.addEventListener("click", () => {
    appendToQuery(item.dataset.id);
    subjectCount++;
    totalCount++;
    subjectCounter.textContent = subjectCount;
    subjectMiniCounter.textContent = subjectCount;
    totalCounter.textContent = totalCount;
    promptString.focus();
  });
});
