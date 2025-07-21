const BtnJs = document.getElementById("btnjs");

// window.addEventListener("scroll", () => {
//   const scrollValue = document.scrollingElement.scrollTop;
//   if (scrollValue >= 600) {
//     BtnJs.style.display = "inline";
//   } else {
//     BtnJs.style.display = "none";
//   }
// });

const closeButton = document.getElementById("closeBtn");

closeBtn.addEventListener("click", () => {
  BtnJs.style.display = "none";
});
