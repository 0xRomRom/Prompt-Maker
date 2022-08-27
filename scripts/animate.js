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

export const optionBox1 = document.querySelector(".option-box1");
export const optionBox2 = document.querySelector(".option-box2");
export const optionBox3 = document.querySelector(".option-box3");
export const optionBox4 = document.querySelector(".option-box4");
export const optionBox5 = document.querySelector(".option-box5");
export const optionBox6 = document.querySelector(".option-box6");
export const optionBox7 = document.querySelector(".option-box7");
export const optionBox8 = document.querySelector(".option-box8");
export const optionBox9 = document.querySelector(".option-box9");

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

export const sub1 = document.querySelector(".sub1");
export const sub2 = document.querySelector(".sub2");
export const sub3 = document.querySelector(".sub3");
export const loc1 = document.querySelector(".loc1");
export const loc2 = document.querySelector(".loc2");
export const loc3 = document.querySelector(".loc3");

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
  subject.classList.remove("hidden");
  location.classList.add("hidden");
  sub1.classList.remove("hidden");
  loc1.classList.add("hidden");
  loc2.classList.add("hidden");
  loc3.classList.add("hidden");
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
  opacity(mainProgram, subjectBoxes);
  dot1.className = "dot-4 d1 dot";
  dot2.className = "dot-5 d2 dot";
  dot3.className = "dot-6 d3 dot";
  subject.classList.add("hidden");
  location.classList.remove("hidden");
  sub1.classList.add("hidden");
  sub2.classList.add("hidden");
  sub3.classList.add("hidden");
  loc1.classList.remove("hidden");
  mainProgram.classList.add("fadeOpacity");
  subjectBoxes.classList.add("fadeOpacity");
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
