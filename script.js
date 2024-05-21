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



// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

//Preloader
var loader= document.getElementById("preloader");
    window.addEventListener("load", function(){
    loader.style.display="none";
})