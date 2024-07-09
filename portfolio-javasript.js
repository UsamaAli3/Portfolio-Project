function myFunction(x) {
  x.classList.toggle("change");
}

var typed = new Typed(".auto-type", {
  strings: ["DEVELOPER", "DESIGER", "USAMA"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

let slideIndex = 0;

slides[slideIndex].classList.add("active");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function prevSlide() {
  slides[slideIndex].classList.remove("active");

  slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
  slides[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slides[slideIndex].classList.remove("active");

  slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
  slides[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

const scrollTop = document.querySelector(".for-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const navColorChange = document.querySelector(".navbar-one");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 10) {
    navColorChange.style.backgroundColor = "white";
  } else {
    navColorChange.style.backgroundColor = "#fdbb2e";
  }
});
const bouningIn = document.querySelector(".bounce-in-js");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    bouningIn.classList.add("bounce-in");
  } else if (window.pageYOffset < 500) {
    bouningIn.classList.remove("bounce-in");
  }
});
