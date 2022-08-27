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

import {
  sub1,
  sub2,
  sub3,
  loc1,
  loc2,
  loc3,
  the1,
  the2,
  the3,
  des1,
  des2,
  des3,
  lig1,
  lig2,
  lig3,
  col1,
  col2,
  col3,
  cam1,
  cam2,
  cam3,
  art1,
  art2,
  art3,
} from "./animate.js";
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
    } //
    if (dotIndex === 3) {
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
    } //
    if (dotIndex === 6) {
      the1.classList.remove("hidden");
      the2.classList.add("hidden");
      the3.classList.add("hidden");
    }
    if (dotIndex === 7) {
      the2.classList.remove("hidden");
      the1.classList.add("hidden");
      the3.classList.add("hidden");
    }
    if (dotIndex === 8) {
      the1.classList.add("hidden");
      the2.classList.add("hidden");
      the3.classList.remove("hidden");
    } //
    if (dotIndex === 9) {
      des1.classList.remove("hidden");
      des2.classList.add("hidden");
      des3.classList.add("hidden");
    }
    if (dotIndex === 10) {
      des2.classList.remove("hidden");
      des1.classList.add("hidden");
      des3.classList.add("hidden");
    }
    if (dotIndex === 11) {
      des1.classList.add("hidden");
      des2.classList.add("hidden");
      des3.classList.remove("hidden");
    } //
    if (dotIndex === 12) {
      lig1.classList.remove("hidden");
      lig2.classList.add("hidden");
      lig3.classList.add("hidden");
    }
    if (dotIndex === 13) {
      lig2.classList.remove("hidden");
      lig1.classList.add("hidden");
      lig3.classList.add("hidden");
    }
    if (dotIndex === 14) {
      lig1.classList.add("hidden");
      lig2.classList.add("hidden");
      lig3.classList.remove("hidden");
    } //
    if (dotIndex === 15) {
      col1.classList.remove("hidden");
      col2.classList.add("hidden");
      col3.classList.add("hidden");
    }
    if (dotIndex === 16) {
      col2.classList.remove("hidden");
      col1.classList.add("hidden");
      col3.classList.add("hidden");
    }
    if (dotIndex === 17) {
      col1.classList.add("hidden");
      col2.classList.add("hidden");
      col3.classList.remove("hidden");
    } //
    if (dotIndex === 18) {
      cam1.classList.remove("hidden");
      cam2.classList.add("hidden");
      cam3.classList.add("hidden");
    }
    if (dotIndex === 19) {
      cam2.classList.remove("hidden");
      cam1.classList.add("hidden");
      cam3.classList.add("hidden");
    }
    if (dotIndex === 20) {
      cam1.classList.add("hidden");
      cam2.classList.add("hidden");
      cam3.classList.remove("hidden");
    } //
    if (dotIndex === 21) {
      art1.classList.remove("hidden");
      art2.classList.add("hidden");
      art3.classList.add("hidden");
    }
    if (dotIndex === 22) {
      art2.classList.remove("hidden");
      art1.classList.add("hidden");
      art3.classList.add("hidden");
    }
    if (dotIndex === 23) {
      art1.classList.add("hidden");
      art2.classList.add("hidden");
      art3.classList.remove("hidden");
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
