$('.carousel1').owlCarousel({
    loop:true,
    nav:false,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2,
            margin:15
        },
        992:{
            items:2
        }
    }
});

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    // Autoplay
    autoplay: {
        delay: 2000,
      },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        425: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView:3,
          spaceBetween: 50,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }
    
    
  });
