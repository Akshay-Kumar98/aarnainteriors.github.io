var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


/**
 * Testimonials slider
 */
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

$(document).ready(function () {

  $('.brand-logo').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      },

    ]
  });

});


function moveto() {
  window.scrollTo(0, 0)
}

$(document).ready(function () {

  $(".scroll_top").hide(0);

  $(window).scroll(function () {
    // if ($(window).scrollTop()) {
    //     $('.scroll_top').addClass('active');
    // }
    // else {
    //     $('.scroll_top').removeClass('active');
    // }

    $(window).scroll(function () {
      if ($(window).scrollTop()) {
        $(".scroll_top").show(500);
      } else {
        $(".scroll_top").hide(500);
      }
    });
  });

});

$(document).ready(function () {

  $("a[href^='#']").click(function (e) {
    e.preventDefault();


    var position = $($(this).attr("href")).offset().top;

    var mypos = position - 100;
    $("body, html").animate({
      scrollTop: mypos

    }, 100);



  });

});




