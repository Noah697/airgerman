document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".tm-navbar");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    });
  });
  