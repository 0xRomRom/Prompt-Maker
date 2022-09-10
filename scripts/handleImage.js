"use strict";

const version = document.querySelector(".version");
const versionMenu = document.querySelector(".version-ratio-select");
const aspectRatio = document.querySelector(".aspect-ratio");
const aspectMenu = document.querySelector(".aspect-ratio-select");
const quality = document.querySelector(".quality");
const qualityMenu = document.querySelector(".quality-select");
const stylize = document.querySelector(".stylize");
const stylizeMenu = document.querySelector(".stylize-select");
const chaos = document.querySelector(".chaos");
const chaosMenu = document.querySelector(".chaos-select");
const parameters = document.querySelector(".parameters");
const parametersMenu = document.querySelector(".parameters-select");

const selectBox = document.querySelector(".select-style");
const promptString = document.querySelector(".prompt-string");

const dataList1 = document.querySelectorAll(".data-li1");
const dataList2 = document.querySelectorAll(".data-li2");
const dataList3 = document.querySelectorAll(".data-li3");
const dataList4 = document.querySelectorAll(".data-li4");
const dataList5 = document.querySelectorAll(".data-li5");
const dataList6 = document.querySelectorAll(".data-li6");

let promptCache = "";

const imageMenu = document.querySelector(".option-box9");
imageMenu.addEventListener("click", () => {
  promptCache = `${promptString.value}, `;
  console.log(promptCache);
});

let imageArray = [[""], [""], [""], [""], [""], [""]];

//Version
version.addEventListener("click", (e) => {
  versionMenu.style.zIndex = "50";
  versionMenu.classList.remove("hidden");
  aspectMenu.classList.add("hidden");
  qualityMenu.classList.add("hidden");
  chaosMenu.classList.add("hidden");
  stylizeMenu.classList.add("hidden");
  parametersMenu.classList.add("hidden");
});

dataList1.forEach((item) => {
  item.addEventListener("click", (e) => {
    imageArray[0] = [`${e.target.dataset.value}`];
    promptString.value = "";
    promptString.value = promptCache + imageArray.join("").toString();
    versionMenu.classList.add("hidden");
  });
});

//Aspect Ratio
aspectRatio.addEventListener("click", () => {
  aspectMenu.classList.remove("hidden");
  versionMenu.classList.add("hidden");
  qualityMenu.classList.add("hidden");
  stylizeMenu.classList.add("hidden");
  chaosMenu.classList.add("hidden");
  parametersMenu.classList.add("hidden");
});

dataList2.forEach((item) => {
  item.addEventListener("click", (e) => {
    imageArray[1] = [`${e.target.dataset.value}`];
    promptString.value = "";
    promptString.value = promptCache + imageArray.join("").toString();
    aspectMenu.classList.add("hidden");
  });
});

//Quality
quality.addEventListener("click", () => {
  qualityMenu.classList.remove("hidden");
  versionMenu.classList.add("hidden");
  aspectMenu.classList.add("hidden");
  stylizeMenu.classList.add("hidden");
  chaosMenu.classList.add("hidden");
  parametersMenu.classList.add("hidden");
});

dataList3.forEach((item) => {
  item.addEventListener("click", (e) => {
    imageArray[2] = [`${e.target.dataset.value}`];
    promptString.value = "";
    promptString.value = promptCache + imageArray.join("").toString();
    qualityMenu.classList.add("hidden");
  });
});

//Stylize
stylize.addEventListener("click", () => {
  stylizeMenu.classList.remove("hidden");
  versionMenu.classList.add("hidden");
  aspectMenu.classList.add("hidden");
  qualityMenu.classList.add("hidden");
  chaosMenu.classList.add("hidden");
  parametersMenu.classList.add("hidden");
});

dataList4.forEach((item) => {
  item.addEventListener("click", (e) => {
    imageArray[3] = [`${e.target.dataset.value}`];
    promptString.value = "";
    promptString.value = promptCache + imageArray.join("").toString();
    stylizeMenu.classList.add("hidden");
  });
});

//Chaos
chaos.addEventListener("click", () => {
  chaosMenu.classList.remove("hidden");
  versionMenu.classList.add("hidden");
  aspectMenu.classList.add("hidden");
  qualityMenu.classList.add("hidden");
  stylizeMenu.classList.add("hidden");
  parametersMenu.classList.add("hidden");
});

dataList5.forEach((item) => {
  item.addEventListener("click", (e) => {
    imageArray[4] = [`${e.target.dataset.value}`];
    promptString.value = "";
    promptString.value = promptCache + imageArray.join("").toString();
    chaosMenu.classList.add("hidden");
  });
});

//Parameters
parameters.addEventListener("click", () => {
  parametersMenu.classList.remove("hidden");
  versionMenu.classList.add("hidden");
  aspectMenu.classList.add("hidden");
  qualityMenu.classList.add("hidden");
  stylizeMenu.classList.add("hidden");
  chaosMenu.classList.add("hidden");
});

dataList6.forEach((item) => {
  item.addEventListener("click", (e) => {
    imageArray[5] = [`${e.target.dataset.value}`];
    promptString.value = "";
    promptString.value = promptCache + imageArray.join("").toString();
    parametersMenu.classList.add("hidden");
  });
});
