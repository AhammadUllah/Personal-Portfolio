
// menu

$(document).ready(function(){
    $("#menu_icon").click(function(){
      $(".navbar").slideToggle();
    });
});

// back to top

$(document).ready(function(){
  $(window).on('scroll', function(){
      var scroll = $(this).scrollTop();
      if(scroll > 500){
          $('.back-top').show(500);
      } else{
          $('.back-top').hide(500)
      }
  });
  $('.back-top').on('click', function(){
      $('html, body').animate({scrollTop:0}, )
  });
});

// scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-main, .portfolio-box, .contact form' , { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop: true
});





