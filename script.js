document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    shrinkHeader();
  }, 800);
});

function shrinkHeader() {
   const header = document.querySelector('.animated-header');

  header.style.padding = '10px';
  header.style.fontSize = '90px';
}

document.addEventListener("DOMContentLoaded", function () {
  const fadeInText = document.getElementById("fade-in-text");  
  setTimeout(function () {
    fadeInText.style.opacity = "1";
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  const slowFadeInText = document.getElementById("slow-fade-in-text");  
  setTimeout(function () {
    slowFadeInText.style.opacity = "1";
  }, 900);

});
