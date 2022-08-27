"use strict";

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

import {
  optionBox1,
  optionBox2,
  optionBox3,
  optionBox4,
  optionBox5,
  optionBox6,
  optionBox7,
  optionBox8,
  optionBox9,
} from "./animate.js";

import { sub1, sub2, sub3, loc1, loc2, loc3 } from "./animate.js";
import { subjectBoxes } from "./animate.js";

const promptString = document.querySelector(".prompt-string");
const copyPromptString = document.querySelector(".copy-prompt");

export const dot1 = document.querySelector(".dot-1");
export const dot2 = document.querySelector(".dot-2");
export const dot3 = document.querySelector(".dot-3");

const subjectMiniCounter = document.querySelector(".subjects-counter");
const locationMiniCounter = document.querySelector(".locations-counter");
const themeMiniCounter = document.querySelector(".themes-counter");
const designMiniCounter = document.querySelector(".designs-counter");
const lightningMiniCounter = document.querySelector(".lightnings-counter");
const colorsMiniCounter = document.querySelector(".colors-counter");
const cameraMiniCounter = document.querySelector(".cameras-counter");
const artistMiniCounter = document.querySelector(".artists-counter");
const imageMiniCounter = document.querySelector(".imagess-counter");

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
    console.log(dotIndex);
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
    if (dotIndex === 3) {
      sub3.classList.add("hidden");
      loc1.classList.remove("hidden");
      loc2.classList.add("hidden");
      loc3.classList.add("hidden");
    }
    if (dotIndex === 4) {
      loc1.classList.add("hidden");
      loc2.classList.remove("hidden");
      loc3.classList.add("hidden");
      sub3.classList.add("hidden");
    }
    if (dotIndex === 5) {
      sub3.classList.add("hidden");
      loc1.classList.add("hidden");
      loc2.classList.add("hidden");
      loc3.classList.remove("hidden");
    }
    console.log(dotIndex);
    menuTransitions(e);
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
