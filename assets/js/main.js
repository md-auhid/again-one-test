// for navigation menu
function myFunction(x) {
  x.classList.toggle("change");
}

// for slider

$('.main-slider').owlCarousel({
	loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    mouseDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// for TESTIMONIAL slider

$('.testimonial-slider').owlCarousel({
	loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    mouseDrag: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// FOR CLIENTS SLIDER

$('.client-slider').owlCarousel({
	loop:true,
    margin:50,
    nav:false,
    autoplay: true,
    mouseDrag: true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

// navbar stick

var header = $("#navbar");
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= window.innerHeight) {
    header.addClass("fixed");
  } else {
    header.removeClass("fixed");
  }
});

// FOW WOW
new WOW().init();


//for counter
jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});