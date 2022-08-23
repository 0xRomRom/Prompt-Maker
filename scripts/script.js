"use strict";

const subjectBoxes = document.querySelector(".modal-boxes");
const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");

//Init//

////////

import { subPage1, subPage2, subPage3 } from "./domMenusModule.js";
subjectBoxes.innerHTML = subPage1;
const pagesArray = [subPage1, subPage2, subPage3];
let dotArray = document.querySelectorAll(".dot");
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

// dot1.addEventListener("click", () => {
//   if (dot1.style.backgroundColor === "rgb(37, 49, 96)") return;
//   dot1.style.backgroundColor = "rgb(37, 49, 96)";
//   dot2.style.backgroundColor = "rgb(8, 11, 22)";
//   dot3.style.backgroundColor = "rgb(8, 11, 22)";
//   subjectBoxes.innerHTML = subPage1;
//   subjectBoxes.classList.add("fadeOut");
//   setTimeout(() => {
//     subjectBoxes.classList.remove("fadeOut");
//   }, 500);
// });

// dot2.addEventListener("click", () => {
//   if (dot2.style.backgroundColor === "rgb(37, 49, 96)") return;
//   dot1.style.backgroundColor = "rgb(8, 11, 22)";
//   dot2.style.backgroundColor = "rgb(37, 49, 96)";
//   dot3.style.backgroundColor = "rgb(8, 11, 22)";
//   subjectBoxes.innerHTML = subPage2;
//   subjectBoxes.classList.add("fadeOut");
//   setTimeout(() => {
//     subjectBoxes.classList.remove("fadeOut");
//   }, 500);
// });

// dot3.addEventListener("click", () => {
//   if (dot3.style.backgroundColor === "rgb(37, 49, 96)") return;
//   dot1.style.backgroundColor = "rgb(8, 11, 22)";
//   dot2.style.backgroundColor = "rgb(8, 11, 22)";
//   dot3.style.backgroundColor = "rgb(37, 49, 96)";
//   subjectBoxes.innerHTML = subPage3;
//   subjectBoxes.classList.add("fadeOut");
//   setTimeout(() => {
//     subjectBoxes.classList.remove("fadeOut");
//   }, 500);
// });
