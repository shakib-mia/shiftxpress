// Importing Lenis and Swiper
// import Lenis from "lenis";

// DOMContentLoaded to ensure the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
// Initialize Lenis for smooth scrolling
const lenis = new Lenis();

// Lenis scroll event listener (you can extend it with more logic if needed)
lenis.on("scroll", (e) => {
  // console.log("Lenis scroll:", e);
});

// Request animation frame to keep Lenis updating
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Navbar scroll direction tracking logic
const navbar = document.getElementById("navbar");
navbar.style.position = "fixed";
navbar.style.top = `${document.getElementById("social").clientHeight}px`;

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = lenis.scroll || window.pageYOffset; // Using Lenis scroll

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;

    // Hide navbar on scroll down
    if (scrollDirection === "down") {
      navbar.style.top = "-10rem";
      navbar.style.transition = "all 0.5s ease";
    } else {
      if (currentScrollY > document.getElementById("social").clientHeight) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `${document.getElementById("social").clientHeight}px`;
        navbar.style.transition = "all 0.5s ease";
      }
    }

    // Box shadow and fixed position on scroll
    if (currentScrollY > 0) {
      navbar.style.boxShadow = "0 0 20px 0 #2B245D21";
      navbar.style.position = "fixed";
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.top = `${document.getElementById("social").clientHeight}px`;
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();
// }

var swiper = new Swiper(".mySwiper", {
  loop: true, // Optional: Enables continuous loop mode
  // slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Enables pagination to be clickable
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Slide every 3 seconds
  },

  // autoplay: false,

  breakpoints: {
    640: {
      slidesPerView: 1,
      // spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
});
