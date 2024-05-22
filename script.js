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

// section 1
gsap.to(".s-1-arrow",{
    x: 40,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".s-1-arrow",
        start: "top 30%",
        end: "cneter 20%",
        // markers: true,
        toggleClass: "red",
    }
})

gsap.to(".s-two-img-0",{
    y: -80,
    duration: 3,
})
gsap.to(".s-two-img-1",{
    x: 30,
    y: -60,
    duration: 3,
})
gsap.to(".s-two-img-2",{
    x: -20,
    y: -50,
    duration: 3,
})