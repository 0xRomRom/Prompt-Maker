"use strict";

import Masonry from "masonry-layout";

window.addEventListener("load", () => {
  const grid = document.querySelector(".grid");

  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
  });
});
