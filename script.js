//Element Selectors

//Elements by 'ID'
const section1 = document.getElementById("section--1");
const logo = document.getElementById("logo");
const main = document.getElementById("main");
const mainBefore = window.getComputedStyle(main, "::before");

//Links by 'ID'
const dateLink = document.getElementById("dateLink");
const mapLink = document.getElementById("mapLink");
const transportLink = document.getElementById("transportLink");
const programLink = document.getElementById("programLink");
const dressLink = document.getElementById("dressLink");
const menuLink = document.getElementById("menuLink");
const darkyLink = document.getElementById("darkyLink");
const kontaktLink = document.getElementById("kontakLink");

//Elements by 'class'
const page1 = document.querySelector(".main--page");
const burger = document.querySelector(".icon");
const links = document.querySelector(".nav--links");
const navContainer = document.querySelector(".nav--container");
// Pop in test
const tests = document.querySelectorAll(".test");
const fadeSection = document.querySelector(".fade--section");

//Photo stretch
// const panels = document.querySelectorAll(".panel");
// const body = document.querySelector("body");

// // panel.addEventListener("click", function () {
// // });

// panels.forEach((panel) =>
//   panel.addEventListener("click", function () {
//     removeStretch();
//     panel.classList.add("stretch");
//   })
// );

// const removeStretch = function () {
//   panels.forEach((panel) => panel.classList.remove("stretch"));
// };

//Leaflet map render
const map = L.map("map").setView([48.9137943572544, 15.98245985382479], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const marker = L.marker([48.9137943572544, 15.98245985382479]).addTo(map);

//Show nav bar
burger.addEventListener("click", function () {
  links.classList.toggle("hider");
  logo.classList.toggle("bg--hider");
});

//Navbar default state after clicking a link
links.addEventListener("click", function () {
  links.classList.remove("hider");
  logo.classList.remove("bg--hider");
});

//Section pop in
// let triggerBottom = (window.innerHeight / 6) * 5;

// window.addEventListener("scroll", textPop);

// textPop();

// function textPop() {
//   tests.forEach((test) => {
//     const testTop = test.getBoundingClientRect().top;
//     if (testTop < triggerBottom) {
//       test.classList.add("show");
//     } else {
//       test.classList.remove("show");
//     }
//   });
// }

// // When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };

// // Get the offset position of the navbar
// const sticky = section1.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navContainer.classList.add("sticky");
//   } else {
//     navContainer.classList.remove("sticky");
//   }
// }
