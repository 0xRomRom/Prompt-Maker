"use strict";

//Menu 1: Subject

const subjectBoxes = document.querySelector(".modal-boxes");
const dot1 = document.querySelector(".d1");
const dot2 = document.querySelector(".d2");
const dot3 = document.querySelector(".d3");

const subPage1 = `<div class="subjects-1 subjects-style">
<div class="modal-name-style">Humans</div>
<img src="img/index/Humans.png" class="modal-img-style" />
</div>
<div class="subjects-2 subjects-style">
<div class="modal-name-style">Animals</div>
<img src="img/index/Animals.png" class="modal-img-style" />
</div>
<div class="subjects-3 subjects-style">
<div class="modal-name-style">Creatures</div>
<img src="img/index/Alien.png" class="modal-img-style" />
</div>
<div class="subjects-4 subjects-style">
<div class="modal-name-style">Buildings</div>
<img src="img/index/Buildings.png" class="modal-img-style" />
</div>
<div class="subjects-5 subjects-style">
<div class="modal-name-style">Items</div>
<img src="img/index/Items.png" class="modal-img-style" />
</div>
<div class="subjects-6 subjects-style">
<div class="modal-name-style">Nature</div>
<img src="img/index/Nature.png" class="modal-img-style" />
</div>
<div class="subjects-7 subjects-style">
<div class="modal-name-style">Animals</div>
<img src="img/index/Animals.png" class="modal-img-style" />
</div>
<div class="subjects-8 subjects-style">
<div class="modal-name-style">Humans</div>
<img src="img/index/Humans.png" class="modal-img-style" />
</div>`;
subjectBoxes.innerHTML = subPage1;

const subPage2 = `<div class="subjects-5 subjects-style">
<div class="modal-name-style">Items</div>
<img src="img/index/Items.png" class="modal-img-style" />
</div>
<div class="subjects-6 subjects-style">
<div class="modal-name-style">Nature</div>
<img src="img/index/Nature.png" class="modal-img-style" />
</div>
<div class="subjects-7 subjects-style">
<div class="modal-name-style">Animals</div>
<img src="img/index/Animals.png" class="modal-img-style" />
</div>
<div class="subjects-8 subjects-style">
<div class="modal-name-style">Humans</div>
<img src="img/index/Humans.png" class="modal-img-style" />
</div><div class="subjects-1 subjects-style">
<div class="modal-name-style">Humans</div>
<img src="img/index/Humans.png" class="modal-img-style" />
</div>
<div class="subjects-2 subjects-style">
<div class="modal-name-style">Animals</div>
<img src="img/index/Animals.png" class="modal-img-style" />
</div>
<div class="subjects-3 subjects-style">
<div class="modal-name-style">Creatures</div>
<img src="img/index/Alien.png" class="modal-img-style" />
</div>
<div class="subjects-4 subjects-style">
<div class="modal-name-style">Buildings</div>
<img src="img/index/Buildings.png" class="modal-img-style" />
</div>`;

const subPage3 = `<div class="subjects-2 subjects-style">
<div class="modal-name-style">Animals</div>
<img src="img/index/Animals.png" class="modal-img-style" />
</div>
<div class="subjects-3 subjects-style">
<div class="modal-name-style">Creatures</div>
<img src="img/index/Alien.png" class="modal-img-style" />
</div>
<div class="subjects-1 subjects-style">
<div class="modal-name-style">Humans</div>
<img src="img/index/Humans.png" class="modal-img-style" />
</div><div class="subjects-5 subjects-style">
<div class="modal-name-style">Items</div>
<img src="img/index/Items.png" class="modal-img-style" />
</div>
<div class="subjects-4 subjects-style">
<div class="modal-name-style">Buildings</div>
<img src="img/index/Buildings.png" class="modal-img-style" />
</div><div class="subjects-8 subjects-style">
<div class="modal-name-style">Humans</div>
<img src="img/index/Humans.png" class="modal-img-style" />
</div>
<div class="subjects-6 subjects-style">
<div class="modal-name-style">Nature</div>
<img src="img/index/Nature.png" class="modal-img-style" />
</div>
<div class="subjects-7 subjects-style">
<div class="modal-name-style">Animals</div>
<img src="img/index/Animals.png" class="modal-img-style" />
</div>`;

dot1.addEventListener("click", () => {
  dot1.style.backgroundColor = "rgb(37, 49, 96)";
  dot2.style.backgroundColor = "rgb(8, 11, 22)";
  dot3.style.backgroundColor = "rgb(8, 11, 22)";
  subjectBoxes.innerHTML = subPage1;
  subjectBoxes.classList.add("fadeOut");
  setTimeout(() => {
    subjectBoxes.classList.remove("fadeOut");
  }, 500);
});

dot2.addEventListener("click", () => {
  dot1.style.backgroundColor = "rgb(8, 11, 22)";
  dot2.style.backgroundColor = "rgb(37, 49, 96)";
  dot3.style.backgroundColor = "rgb(8, 11, 22)";
  subjectBoxes.innerHTML = subPage2;
  subjectBoxes.classList.add("fadeOut");
  setTimeout(() => {
    subjectBoxes.classList.remove("fadeOut");
  }, 500);
});

dot3.addEventListener("click", () => {
  dot1.style.backgroundColor = "rgb(8, 11, 22)";
  dot2.style.backgroundColor = "rgb(8, 11, 22)";
  dot3.style.backgroundColor = "rgb(37, 49, 96)";
  subjectBoxes.innerHTML = subPage3;
  subjectBoxes.classList.add("fadeOut");
  setTimeout(() => {
    subjectBoxes.classList.remove("fadeOut");
  }, 500);
});
