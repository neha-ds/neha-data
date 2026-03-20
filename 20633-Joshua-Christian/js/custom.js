var swiper = new Swiper(".category-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Add this for better mobile support
  grabCursor: true,
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  }
});
var swiper = new Swiper(".popular-tutors-slider", {
  slidesPerView: 5,
  spaceBetween: 30,  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Add this for better mobile support
    grabCursor: true,
    breakpoints: {
      1100: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    }
});
var swiper = new Swiper(".eachother-slider", {
  slidesPerView: 7,
  spaceBetween: 30,  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Add this for better mobile support
    grabCursor: true,
    breakpoints: {
      1199: {
        slidesPerView: 8,
      },
      768: {
        slidesPerView: 4,
      },
      480: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    }
});

 function toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("show");
    }
