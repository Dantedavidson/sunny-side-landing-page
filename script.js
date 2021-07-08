const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

//Mobile nav toggle
hamburger.addEventListener("click", () => {
  if (!hamburger.classList.contains("open")) {
    hamburger.classList.add("open");
    mobileMenu.classList.remove("fade-out");
    mobileMenu.classList.add("fade-in");
  } else {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("fade-in");
    mobileMenu.classList.add("fade-out");
  }
});
