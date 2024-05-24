//Preloader JS
$(window).on('load', function() {
    setTimeout(function() {
        $('#pre').addClass('slide-up');
        $('#content').fadeIn();
    }, 5000); // Display preloader for 4 seconds
});

//GSAP Animation
gsap.registerPlugin(ScrollTrigger);

//Preloader Animation
gsap.to(".loading-img1",{
    delay: 1,
    duration: 1,
    display: "none",
})

// Hide the image initially
gsap.set(".loading-img2", { autoAlpha: 0 });

// Animate the image to appear after 2 seconds, move upwards and then downwards
gsap.fromTo(".loading-img2", {
    autoAlpha: 0,
    y: 0
}, {
    display: 'flex',
    autoAlpha: 1,
    y: -50,
    duration: .3,
    delay: 3,
    onComplete: function() {
        gsap.to(".loading-img2", {
            y: 0,
            duration: .3,
        });
    }
});

//Slick 
$(document).ready(function(){
    $('.carousel-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true
    });
});


// // Function to show/hide the navigation bar
// function ShowNavbar() {
//     const navbar = document.querySelector('.navbar');
//     const isNavVisible = navbar.style.display === 'block';
//     navbar.style.display = isNavVisible ? 'none' : 'block';
// }

// // Event listener for the "MENU" button
// document.querySelector('.menu p').addEventListener('click', ShowNavbar);

// // Initial state: hide the navbar
// document.addEventListener('DOMContentLoaded', () => {
//     const navbar = document.querySelector('.navbar');
//     navbar.style.display = 'none';
// });


//Section-2 GSAP Animation
gsap.to(".s-2-img-0",{
    y: -80,
    duration: 3,
})
gsap.to(".s-2-img-1",{
    x: 30,
    y: -60,
    duration: 3,
})
gsap.to(".s-2-img-2",{
    x: -20,
    y: -50,
    duration: 3,
})

$(document).ready(function(){
  $('.s-1-carousel').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1, // Change to 1 to scroll one slide at a time
    autoplaySpeed: 3000, // Set autoplay speed to 2 seconds
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//Section-4 slider using Slik
$(document).ready(function(){
    $('.s-4-slider').slick({
      arrow: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1, // Change to 1 to scroll one slide at a time
      autoplaySpeed: 2000, // Set autoplay speed to 2 seconds
      speed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });  


//Section-1 animation using AOS
AOS.init({
    offset: 120,
    duration: 1000,
    easing: 'ease',
});