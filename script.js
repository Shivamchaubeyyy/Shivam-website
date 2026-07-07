/* ===========================
   SHIVAMMINSIGHTS
   SCRIPT.JS PART 1
=========================== */

// Typing Animation

const words = [
"Hotel Management Student",
"Content Creator",
"Future Entrepreneur",
"Hospitality Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect(){

if(!typingText) return;

let current = words[wordIndex];

if(!deleting){

typingText.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typingText.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 50 : 90);

}

typeEffect();


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
/* ===========================
   SCRIPT.JS PART 2
=========================== */

// Active Navbar Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop-150;
const sectionHeight = section.clientHeight;

if(pageYOffset>=sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Scroll Reveal Animation

const revealElements=document.querySelectorAll(
".about,.journey,.skills,.achievements,.contact,.social,.timeline-item,.skill-card,.achievement-card,.contact-box"
);

function reveal(){

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;
const visible=window.innerHeight-120;

if(top<visible){

el.style.opacity="1";
el.style.transform="translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(60px)";
el.style.transition="all .8s ease";

});

window.addEventListener("scroll",reveal);

reveal();
/* ===========================
MOBILE MENU
=========================== */

const menuToggle=document.getElementById("menu-toggle");
const nav=document.getElementById("nav-links");

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});