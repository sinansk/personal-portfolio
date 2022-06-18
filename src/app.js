/**HEADING ANIMATION***/

const typing = document.querySelector(".typing");
const texts = ["Frontend Developer", "Mechanical Engineer", "lifelong learner"];
let word = 0;
let letterIndex = 0;
let currentText = "";
let letter = "";

(function type() {
  if (word == texts.length) {
    word = 0;
  }

  currentText = texts[word];
  letter = currentText.slice(0, ++letterIndex);
  typing.textContent = letter;

  if (letter.length == currentText.length) {
    word++;
    letterIndex = 0;
  }

  setTimeout(type, 300);
})();

///// ASIDE NAV////
const asideMenu = document.querySelector(".hamburger-menu");
const asideLinks = asideMenu.querySelectorAll("a");
const hamburgerInput = document.querySelector(".menu-btn");

function closeAside() {
  hamburgerInput.checked = false;
  body.classList.remove("lock-scroll");
}

function lockScroll() {
  if (hamburgerInput.checked === true) {
    console.log("here");
    body.classList.add("lock-scroll");
  } else {
    closeAside();
  }
}

asideLinks.forEach((link) => link.addEventListener("click", closeAside));
window.addEventListener("click", (e) => {
  if (!asideMenu.contains(e.target)) {
    closeAside();
  }
});
hamburgerInput.addEventListener("input", lockScroll);
/**SHOW SCROLL BUTTON**/
const scrollBtn = document.querySelector(".scroll-btn");

function showScroll() {
  if (document.documentElement.scrollTop > 150) {
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}
/**SCROLL TO TOP**/

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

scrollBtn.addEventListener("click", backToTop);
window.onscroll = function () {
  showScroll();
};

/*DARK MODE */

let lightMode = localStorage.getItem("light-mode");
const darkBtn = document.querySelector(".darkbtn");
const body = document.getElementById("body");
const modeCheckBox = document.getElementById("mode-checkbox");

const enableLightMode = () => {
  body.classList.add("light");
  localStorage.setItem("light-mode", "enabled");
};

const disableLightMode = () => {
  body.classList.remove("light");
  localStorage.setItem("light-mode", "disabled");
};

if (lightMode === "enabled") {
  enableLightMode();
  modeCheckBox.checked = true;
  console.log(modeCheckBox);
}

darkBtn.addEventListener("input", (e) => {
  let lightMode = localStorage.getItem("light-mode");
  console.log(e.target);
  if (lightMode !== "enabled" && e.target.checked === true) {
    enableLightMode();
  } else {
    disableLightMode();
  }
});

//////////////////////
//HIDING HALF LENGHT BORDERS AROUND PROJECTS, ON SAFARI. BC IT'S DISPLAYING LIKE SQARE//////////
const borders = document.querySelectorAll(".project-container");

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
  console.log("first");
  borders.forEach((border) => border.style.setProperty("--hide", "none"));
}
