

document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.header .navbar');
    let menuBtn = document.querySelector('#menu-btn');
    let navCloseBtn = document.querySelector('#nav-close');
  
    if (menuBtn && navCloseBtn) {
      menuBtn.onclick = function () {
        navbar.classList.toggle('active');
      };
  
      navCloseBtn.onclick = function () {
        navbar.classList.remove('active');
      };
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    let searchForm = document.querySelector('.search-form');
    
    document.querySelector('#search-btn').onclick = function () {
      searchForm.classList.add('active');
    };
  
    document.querySelector('#close-search').onclick = function () {
      searchForm.classList.remove('active');
    };
  });

  const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.onscroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 400) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    lastScrollY = currentScrollY;
};

// Initial check on page load
if (window.scrollY > 400) {
    header.classList.add('active');
} else {
    header.classList.remove('active');
}

  var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
// discover container
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});



// about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

