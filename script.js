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

const leaf = document.querySelector(".leaf");
const back = document.querySelector(".back");
const nonVegan = document.querySelector(".non--vegan");
const vegan = document.querySelector(".vegan");

const menuHeadline = document.querySelector(".menu--headline");
const menuHeadlineVegan = document.querySelector(".menu--headline--vegan");

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("mouseenter", function () {
    circle.style.transform = "translateY(-20px)";
  });
  circle.addEventListener("mouseleave", function () {
    circle.style.transform = "translateY(0)";
  });
});

// Menu switch
menuHeadlineVegan.addEventListener("click", function () {
  nonVegan.style.opacity = "0";
  nonVegan.style.pointerEvents = "none";
  vegan.style.opacity = "1";
  menuHeadlineVegan.style.opacity = "1";
  menuHeadline.style.opacity = "0.5";
});

menuHeadline.addEventListener("click", function () {
  vegan.style.opacity = "0";
  vegan.style.pointerEvents = "none";
  nonVegan.style.opacity = "1";
  menuHeadlineVegan.style.opacity = "0.5";
  menuHeadline.style.opacity = "1";
});

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
