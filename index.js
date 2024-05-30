let toggle = document.querySelector(".toggle");
let navbar = document.querySelector(".navbar");
let nav = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-link");

function toggleNav() {
  toggle.addEventListener("click", function() {
    nav.classList.toggle("display");
    nav.classList.toggle("displayBlock");
    navbar.classList.toggle("displayBlock");
  });
}

toggleNav();


// Typing effect for main header
const typedText = document.querySelector('#main h1');
const textArray = ['Hello, my name is Luka Susha', 'Welcome to my website'];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textIndex].length) {
    typedText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  typedText.textContent = ''; // Ensure header is empty before typing starts
  if (textArray.length) setTimeout(type, 500);
});
