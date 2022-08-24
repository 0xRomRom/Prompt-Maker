"use strict";

import { subPage1, subPage2, subPage3 } from "./domMenusModule.js";
const pagesArray = [subPage1, subPage2, subPage3];
const subjectBoxes = document.querySelector(".modal-boxes");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const promptString = document.querySelector(".prompt-string");
const copyPromptString = document.querySelector(".copy-prompt");

//Init//
subjectBoxes.innerHTML = subPage1;
////////

promptString.value = "Humans, School, Carnival, Foggy";

copyPromptString.addEventListener("click", () => {
  promptString.select();
  document.execCommand("copy");
  alert("Query Copied!");
});

//Render right content according to button index
const dotArray = document.querySelectorAll(".dot");
dotArray.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    let dotIndex = +e.target.classList[0].slice(4) - 1;
    subjectBoxes.innerHTML = pagesArray[dotIndex];
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
  });
});
