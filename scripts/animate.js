"use strict";

export const subject = document.querySelector(".subject");
export const location = document.querySelector(".location");
export const themes = document.querySelector(".themes");
export const design = document.querySelector(".design");
export const lightning = document.querySelector(".lightning");
export const colors = document.querySelector(".colors");
export const camera = document.querySelector(".camera");
export const artists = document.querySelector(".artists");
export const image = document.querySelector(".image");

export const buttonBox = document.querySelector(".hover-buttons");

const optionBox1 = document.querySelector(".option-box1");
const optionBox2 = document.querySelector(".option-box2");
const optionBox3 = document.querySelector(".option-box3");
const optionBox4 = document.querySelector(".option-box4");
const optionBox5 = document.querySelector(".option-box5");
const optionBox6 = document.querySelector(".option-box6");
const optionBox7 = document.querySelector(".option-box7");
const optionBox8 = document.querySelector(".option-box8");
const optionBox9 = document.querySelector(".option-box9");

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

const sub1 = document.querySelector(".sub1");
const sub2 = document.querySelector(".sub2");
const sub3 = document.querySelector(".sub3");
const loc1 = document.querySelector(".loc1");
const loc2 = document.querySelector(".loc2");
const loc3 = document.querySelector(".loc3");
const the1 = document.querySelector(".the1");
const the2 = document.querySelector(".the2");
const the3 = document.querySelector(".the3");
const des1 = document.querySelector(".des1");
const des2 = document.querySelector(".des2");
const des3 = document.querySelector(".des3");
const lig1 = document.querySelector(".lig1");
const lig2 = document.querySelector(".lig2");
const lig3 = document.querySelector(".lig3");
const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");
const cam1 = document.querySelector(".cam1");
const cam2 = document.querySelector(".cam2");
const cam3 = document.querySelector(".cam3");
const art1 = document.querySelector(".art1");
const art2 = document.querySelector(".art2");
const art3 = document.querySelector(".art3");

export const mainProgram = document.querySelector(".main-program");
export const subjectBoxes = document.querySelector(".modal-boxes");

import { dot1, dot2, dot3 } from "./script.js";

let g = "rgb(40,37,38)";
let gb = "2px solid rgb(40,37,38)";
let w = "white";
let wb = "2px solid white";

optionBox2.style.color = g;
locationCounter.style.color = g;
locationCounter.style.border = gb;
optionBox3.style.color = g;
themesCounter.style.color = g;
themesCounter.style.border = gb;
optionBox4.style.color = g;
designCounter.style.color = g;
designCounter.style.border = gb;
optionBox5.style.color = g;
lightningCounter.style.color = g;
lightningCounter.style.border = gb;
optionBox6.style.color = g;
colorsCounter.style.color = g;
colorsCounter.style.border = gb;
optionBox7.style.color = g;
cameraCounter.style.color = g;
cameraCounter.style.border = gb;
optionBox8.style.color = g;
artistsCounter.style.color = g;
artistsCounter.style.border = gb;
optionBox9.style.color = g;
imageCounter.style.color = g;
imageCounter.style.border = gb;

const hide = (el) => {
  el.classList.add("hidden");
};

const show = (el) => {
  el.classList.remove("hidden");
};

const opacity = (i1, i2) => {
  i1.classList.add("fadeOpacity");
  i2.classList.add("fadeOpacity");
  setTimeout(() => {
    i1.classList.remove("fadeOpacity");
    i2.classList.remove("fadeOpacity");
  }, 500);
};

const resetDots = () => {
  dot1.style.border = "1px solid rgb(37, 49, 96)";
  dot1.style.backgroundColor = "rgb(37, 49, 96)";
  dot2.style.border = "1px solid rgb(37, 49, 96)";
  dot2.style.backgroundColor = "rgb(8, 11, 22)";
  dot3.style.border = "1px solid rgb(37, 49, 96)";
  dot3.style.backgroundColor = "rgb(8, 11, 22)";
};

optionBox1.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-1 d1 dot";
  dot2.className = "dot-2 d2 dot";
  dot3.className = "dot-3 d3 dot";

  show(sub1);
  show(subject);
  show(buttonBox);
  show(subjectBoxes);
  hide(location);
  hide(themes);
  hide(design);
  hide(lightning);
  hide(colors);
  hide(camera);
  hide(artists);
  hide(loc1);
  hide(loc2);
  hide(loc3);
  hide(the1);
  hide(the2);
  hide(the3);
  hide(des1);
  hide(des2);
  hide(des3);
  hide(lig1);
  hide(lig2);
  hide(lig3);
  hide(col1);
  hide(col2);
  hide(col3);
  hide(cam1);
  hide(cam2);
  hide(cam3);
  hide(art1);
  hide(art2);
  hide(art3);
  hide(image);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox4,
    designCounter,
    designCounter,
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox8,
    artistsCounter,
    artistsCounter,
    optionBox9,
    imageCounter,
    imageCounter
  );
});

optionBox2.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-4 d1 dot";
  dot2.className = "dot-5 d2 dot";
  dot3.className = "dot-6 d3 dot";

  show(loc1);
  show(location);
  show(buttonBox);
  show(subjectBoxes);
  hide(subject);
  hide(themes);
  hide(design);
  hide(lightning);
  hide(colors);
  hide(camera);
  hide(artists);
  hide(sub1);
  hide(sub2);
  hide(sub3);
  hide(the1);
  hide(the2);
  hide(the3);
  hide(des1);
  hide(des2);
  hide(des3);
  hide(lig1);
  hide(lig2);
  hide(lig3);
  hide(col1);
  hide(col2);
  hide(col3);
  hide(cam1);
  hide(cam2);
  hide(cam3);
  hide(art1);
  hide(art2);
  hide(art3);
  hide(image);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox4,
    designCounter,
    designCounter,
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox8,
    artistsCounter,
    artistsCounter,
    optionBox9,
    imageCounter,
    imageCounter
  );
});

optionBox3.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-7 d1 dot";
  dot2.className = "dot-8 d2 dot";
  dot3.className = "dot-9 d3 dot";

  show(the1);
  show(themes);
  show(buttonBox);
  show(subjectBoxes);
  hide(subject);
  hide(location);
  hide(design);
  hide(lightning);
  hide(colors);
  hide(camera);
  hide(artists);
  hide(sub1);
  hide(sub2);
  hide(sub3);
  hide(loc1);
  hide(loc2);
  hide(loc3);
  hide(des1);
  hide(des2);
  hide(des3);
  hide(lig1);
  hide(lig2);
  hide(lig3);
  hide(col1);
  hide(col2);
  hide(col3);
  hide(cam1);
  hide(cam2);
  hide(cam3);
  hide(art1);
  hide(art2);
  hide(art3);
  hide(image);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox4,
    designCounter,
    designCounter,
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox8,
    artistsCounter,
    artistsCounter,
    optionBox9,
    imageCounter,
    imageCounter
  );
});

optionBox4.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-10 d1 dot";
  dot2.className = "dot-11 d2 dot";
  dot3.className = "dot-12 d3 dot";

  show(des1);
  show(design);
  show(buttonBox);
  show(subjectBoxes);
  hide(themes);
  hide(subject);
  hide(location);
  hide(lightning);
  hide(colors);
  hide(camera);
  hide(artists);
  hide(sub1);
  hide(sub2);
  hide(sub3);
  hide(loc1);
  hide(loc2);
  hide(loc3);
  hide(the1);
  hide(the2);
  hide(the3);
  hide(lig1);
  hide(lig2);
  hide(lig3);
  hide(col1);
  hide(col2);
  hide(col3);
  hide(cam1);
  hide(cam2);
  hide(cam3);
  hide(art1);
  hide(art2);
  hide(art3);
  hide(image);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox4,
    designCounter,
    designCounter,
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox8,
    artistsCounter,
    artistsCounter,
    optionBox9,
    imageCounter,
    imageCounter
  );
});

optionBox5.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-13 d1 dot";
  dot2.className = "dot-14 d2 dot";
  dot3.className = "dot-15 d3 dot";

  show(lig1);
  show(lightning);
  show(buttonBox);
  show(subjectBoxes);
  hide(subject);
  hide(location);
  hide(themes);
  hide(design);
  hide(colors);
  hide(camera);
  hide(artists);
  hide(sub1);
  hide(sub2);
  hide(sub3);
  hide(loc1);
  hide(loc2);
  hide(loc3);
  hide(the1);
  hide(the2);
  hide(the3);
  hide(des1);
  hide(des2);
  hide(des3);
  hide(col1);
  hide(col2);
  hide(col3);
  hide(cam1);
  hide(cam2);
  hide(cam3);
  hide(art1);
  hide(art2);
  hide(art3);
  hide(image);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox4,
    designCounter,
    designCounter,
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox8,
    artistsCounter,
    artistsCounter,
    optionBox9,
    imageCounter,
    imageCounter
  );
});

optionBox6.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-16 d1 dot";
  dot2.className = "dot-17 d2 dot";
  dot3.className = "dot-18 d3 dot";

  show(col1);
  show(colors);
  show(buttonBox);
  show(subjectBoxes);
  hide(subject);
  hide(location);
  hide(themes);
  hide(design);
  hide(lightning);
  hide(camera);
  hide(artists);
  hide(sub1);
  hide(sub2);
  hide(sub3);
  hide(loc1);
  hide(loc2);
  hide(loc3);
  hide(the1);
  hide(the2);
  hide(the3);
  hide(des1);
  hide(des2);
  hide(des3);
  hide(lig1);
  hide(lig2);
  hide(lig3);
  hide(cam1);
  hide(cam2);
  hide(cam3);
  hide(art1);
  hide(art2);
  hide(art3);
  hide(image);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox4,
    designCounter,
    designCounter,
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox8,
    artistsCounter,
    artistsCounter,
    optionBox9,
    imageCounter,
    imageCounter
  );
});

optionBox7.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-19 d1 dot";
  dot2.className = "dot-20 d2 dot";
  dot3.className = "dot-21 d3 dot";

  show(cam1);
  show(camera);
  show(buttonBox);
  show(subjectBoxes);
  hide(subject);
  hide(location);
  hide(themes);
  hide(design);
  hide(lightning);
  hide(colors);
  hide(artists);
  hide(sub1);
  hide(sub2);
  hide(sub3);
  hide(loc1);
  hide(loc2);
  hide(loc3);
  hide(the1);
  hide(the2);
  hide(the3);
  hide(des1);
  hide(des2);
  hide(des3);
  hide(lig1);
  hide(lig2);
  hide(lig3);
  hide(col1);
  hide(col2);
  hide(col3);
  hide(art1);
  hide(art2);
  hide(art3);
  hide(image);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox4,
    designCounter,
    designCounter,
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox8,
    artistsCounter,
    artistsCounter,
    optionBox9,
    imageCounter,
    imageCounter
  );
});

optionBox8.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-22 d1 dot";
  dot2.className = "dot-23 d2 dot";
  dot3.className = "dot-24 d3 dot";

  show(art1);
  show(artists);
  show(buttonBox);
  show(subjectBoxes);
  hide(subject);
  hide(location);
  hide(themes);
  hide(design);
  hide(lightning);
  hide(colors);
  hide(camera);
  hide(sub1);
  hide(sub2);
  hide(sub3);
  hide(loc1);
  hide(loc2);
  hide(loc3);
  hide(the1);
  hide(the2);
  hide(the3);
  hide(des1);
  hide(des2);
  hide(des3);
  hide(lig1);
  hide(lig2);
  hide(lig3);
  hide(col1);
  hide(col2);
  hide(col3);
  hide(cam1);
  hide(cam2);
  hide(cam3);
  hide(image);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox8,
    artistsCounter,
    artistsCounter,
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox4,
    designCounter,
    designCounter,
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox9,
    imageCounter,
    imageCounter
  );
});

optionBox9.addEventListener("click", () => {
  resetDots();
  dot1.className = "dot-25 d1 dot";
  dot2.className = "dot-26 d2 dot";
  dot3.className = "dot-27 d3 dot";

  show(image);
  hide(subject);
  hide(location);
  hide(themes);
  hide(design);
  hide(lightning);
  hide(colors);
  hide(camera);
  hide(artists);
  hide(sub1);
  hide(sub2);
  hide(sub3);
  hide(loc1);
  hide(loc2);
  hide(loc3);
  hide(the1);
  hide(the2);
  hide(the3);
  hide(des1);
  hide(des2);
  hide(des3);
  hide(lig1);
  hide(lig2);
  hide(lig3);
  hide(col1);
  hide(col2);
  hide(col3);
  hide(cam1);
  hide(cam2);
  hide(cam3);
  hide(art1);
  hide(art2);
  hide(art3);
  hide(buttonBox);
  hide(subjectBoxes);

  opacity(mainProgram, subjectBoxes);
  styleReducer(
    optionBox9,
    imageCounter,
    imageCounter,
    optionBox5,
    lightningCounter,
    lightningCounter,
    optionBox4,
    designCounter,
    designCounter,
    optionBox3,
    themesCounter,
    themesCounter,
    optionBox2,
    locationCounter,
    locationCounter,
    optionBox1,
    subjectCounter,
    subjectCounter,
    optionBox6,
    colorsCounter,
    colorsCounter,
    optionBox7,
    cameraCounter,
    cameraCounter,
    optionBox8,
    artistsCounter,
    artistsCounter
  );
});

const styleReducer = (
  visible,
  counter,
  border,
  a1,
  a2,
  a3,
  b1,
  b2,
  b3,
  c1,
  c2,
  c3,
  d1,
  d2,
  d3,
  e1,
  e2,
  e3,
  f1,
  f2,
  f3,
  g1,
  g2,
  g3,
  h1,
  h2,
  h3
) => {
  visible.style.color = w;
  counter.style.color = w;
  border.style.border = wb;
  a1.style.color = g;
  a2.style.color = g;
  a3.style.border = gb;
  b1.style.color = g;
  b2.style.color = g;
  b3.style.border = gb;
  c1.style.color = g;
  c2.style.color = g;
  c3.style.border = gb;
  d1.style.color = g;
  d2.style.color = g;
  d3.style.border = gb;
  e1.style.color = g;
  e2.style.color = g;
  e3.style.border = gb;
  f1.style.color = g;
  f2.style.color = g;
  f3.style.border = gb;
  g1.style.color = g;
  g2.style.color = g;
  g3.style.border = gb;
  h1.style.color = g;
  h2.style.color = g;
  h3.style.border = gb;
};

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
