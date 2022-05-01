// ? Targeting the needed elements.
const featuresBtn = document.querySelector(".features-btn");
const companyBtn = document.querySelector(".company-btn");
const featuresMenu = document.querySelector(".features-menu");
const companyMenu = document.querySelector(".company-menu");
const arrowDownOne = document.getElementsByClassName("arrow-down")[0];
const arrowDownTwo = document.getElementsByClassName("arrow-down")[1];
const arrowUpOne = document.getElementsByClassName("arrow-up")[0];
const arrowUpTwo = document.getElementsByClassName("arrow-up")[1];
const burgerBtn = document.querySelector(".burger-menu");
const sections = document.querySelector(".sections");
const closeMenu = document.querySelector(".close-menu");
const wrapperDiv = document.querySelector(".wrapper");
const links = document.querySelector(".links");
const linksImgs = document.querySelectorAll(".links img");

// ? Creating an array of links to use it in the images loop.

const linksArray = [
  "https://www.databizsolutions.ie/",
  "https://www.audiophile.ph/",
  "https://meet.google.com/",
  "https://www.maker.co/",
];

// ? Adding the event listeners to the elements when click occurs.

arrowDownOne.addEventListener("click", (e) => {
  featuresMenu.style.display = "flex";
  arrowDownOne.style.display = "none";
  arrowUpOne.style.display = "block";
});

arrowDownTwo.addEventListener("click", (e) => {
  companyMenu.style.display = "flex";
  arrowDownTwo.style.display = "none";
  arrowUpTwo.style.display = "block";
});

arrowUpOne.addEventListener("click", (e) => {
  featuresMenu.style.display = "none";
  arrowUpOne.style.display = "none";
  arrowDownOne.style.display = "block";
});

arrowUpTwo.addEventListener("click", (e) => {
  companyMenu.style.display = "none";
  arrowUpTwo.style.display = "none";
  arrowDownTwo.style.display = "block";
});

burgerBtn.onclick = function () {
  sections.style.display = "flex";
  burgerBtn.style.display = "none";
  closeMenu.style.display = "block";
  wrapperDiv.style.display = "block";
};

closeMenu.onclick = () => {
  closeMenu.style.display = "none";
  sections.style.display = "none";
  burgerBtn.style.display = "block";
  wrapperDiv.style.display = "none";
};

// ? looping over the linksImgs to and add links from array.

links.onclick = (e) => {
  linksImgs.forEach((image, ind) => {
    if (e.target === image) {
      window.open(linksArray[ind], "_blank");
    }
  });
};
