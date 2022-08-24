"use strict";

// const pagesArray = [subPage1, subPage2, subPage3];
const subjectBoxes = document.querySelector(".modal-boxes");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const promptString = document.querySelector(".prompt-string");
const copyPromptString = document.querySelector(".copy-prompt");

const sub1 = document.querySelector(".sub1");
const sub2 = document.querySelector(".sub2");
const sub3 = document.querySelector(".sub3");

const subjectCounter = document.querySelector(".subject-counter");
const subjectMiniCounter = document.querySelector(".subjects-counter");
const totalCounter = document.querySelector(".total-selection-counter");
//Init//
let subjectCount = 0;
let totalCount = 20;
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

const appendToQuery = (string) => {
  promptString.value += `${string.charAt(0).toUpperCase() + string.slice(1)}, `;
};

let allSubjects = document.querySelectorAll(".subjects-style");
allSubjects.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.dataset.id);
    appendToQuery(item.dataset.id);
    subjectCount++;
    totalCount++;
    subjectCounter.textContent = subjectCount;
    subjectMiniCounter.textContent = subjectCount;
    totalCounter.textContent = totalCount;
  });
  // console.log(item.dataset.id);
});

const subjects1 = document.querySelector(".subjects-1");
document.addEventListener("click", (e) => {
  console.log(subjects1);
});
