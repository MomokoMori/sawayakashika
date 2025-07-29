const NavJs = document.getElementById("main-nav");
const BtnJs = document.getElementById("btn-js");
const closeButton = document.getElementById("closeBtn");

window.addEventListener("scroll", () => {
  const scrollValue = document.scrollingElement.scrollTop;
  if (scrollValue >= 820) {
    NavJs.style.position = "fixed";
    NavJs.style.top = "0px";
  } else {
    NavJs.style.position = "absolute";
    NavJs.style.top = "96px";
  }
});

let scrollTimeout;

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    BtnJs.style.display = "block";
  }, 8000);
});

function closeMyFunction() {
  BtnJs.style.display = "none";
}

closeButton.addEventListener("click", closeMyFunction);

// スライダー

const slide = document.getElementById("slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const indicator = document.getElementById("indicator");
const lists = document.querySelectorAll(".list");
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;
function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor =
      i === count % totalSlides ? "#2b51b3" : "rgba(255, 255, 255, 0.6)";
  }
}
function nextClick() {
  slide.classList.remove(`slide${(count % totalSlides) + 1}`);
  count++;
  slide.classList.add(`slide${(count % totalSlides) + 1}`);
  updateListBackground();
}
function prevClick() {
  slide.classList.remove(`slide${(count % totalSlides) + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${(count % totalSlides) + 1}`);
  updateListBackground();
}

// ↓自動再生を開始する関数
function startAutoPlay() {
  autoPlayInterval = setInterval(nextClick, 5000);
}

// ↓自動再生をリセットする関数
function resetAutoPlayInterval() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// ↓クリックイベントのリスナーを登録

next.addEventListener("click", () => {
  nextClick();
  resetAutoPlayInterval();
});
prev.addEventListener("click", () => {
  prevClick();
  resetAutoPlayInterval();
});

indicator.addEventListener("click", (event) => {
  if (event.target.classList.contains("list")) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${(count % totalSlides) + 1}`);
    count = index;
    slide.classList.add(`slide${(count % totalSlides) + 1}`);
    updateListBackground();
    resetAutoPlayInterval();
  }
});

startAutoPlay();

// スライダー2

const slideB = document.getElementById("slideB");
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");
const indicator2 = document.getElementById("indicator2");
const list2s = document.querySelectorAll(".list2");
const totalSlidesB = list2s.length;
let countB = 0;
let autoPlayInterval2;
function updateListBackground2() {
  for (let i = 0; i < list2s.length; i++) {
    list2s[i].style.backgroundColor =
      i === countB % totalSlidesB ? "#2b51b3" : "rgba(255, 255, 255, 0.6)";
  }
}
function nextClick2() {
  slideB.classList.remove(`slide${(countB % totalSlidesB) + 1}`);
  countB++;
  slideB.classList.add(`slide${(countB % totalSlidesB) + 1}`);
  updateListBackground2();
}
function prevClick2() {
  slideB.classList.remove(`slide${(countB % totalSlidesB) + 1}`);
  countB--;
  if (countB < 0) countB = totalSlidesB - 1;
  slideB.classList.add(`slide${(countB % totalSlidesB) + 1}`);
  updateListBackground2();
}

function startAutoPlay2() {
  autoPlayInterval2 = setInterval(nextClick2, 5000);
}

function resetAutoPlayInterval2() {
  clearInterval(autoPlayInterval2);
  startAutoPlay2();
}

next2.addEventListener("click", () => {
  nextClick2();
  resetAutoPlayInterval2();
});
prev2.addEventListener("click", () => {
  prevClick2();
  resetAutoPlayInterval2();
});

indicator2.addEventListener("click", (event) => {
  if (event.target.classList.contains("list2")) {
    const index = Array.from(list2s).indexOf(event.target);
    slideB.classList.remove(`slide${(countB % totalSlidesB) + 1}`);
    countB = index;
    slideB.classList.add(`slide${(countB % totalSlidesB) + 1}`);
    updateListBackground2();
    resetAutoPlayInterval2();
  }
});

startAutoPlay2();

const HamburgerButton = document.getElementById("nav-sp");
const navSp = document.getElementById("hamburger");

HamburgerButton.addEventListener("click", function () {
  HamburgerButton.classList.toggle("open");
  navSp.classList.toggle("open");
});
