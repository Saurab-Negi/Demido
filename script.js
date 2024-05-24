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
            duration: 1,
        });
    }
});

//Navbar
var menu= document.querySelector(".menu a")
var close= document.querySelector(".nav-left a")


var t0= gsap.timeline()
t0.to(".nav",{
  top: 0,
  duration: 1,
})

t0.pause()

menu.addEventListener("click", function(){
  t0.play()
  
})

close.addEventListener("click", function(){
  t0.reverse()
})
// var menu = document.querySelector(".menu a");
// var close = document.querySelector(".nav-left a");
// var nav = document.querySelector(".nav");

// var t0 = gsap.timeline({ paused: true });

// t0.to(".nav", {
//     top: 0,
//     duration: 1,
//     onStart: function() {
//         nav.style.display = "block"; // Show navbar when animation starts
//     },
//     onReverseComplete: function() {
//         nav.style.display = "none"; // Hide navbar when animation completes
//     }
// });

// menu.addEventListener("click", function() {
//     t0.play();
// });

// close.addEventListener("click", function() {
//     t0.reverse();
// });

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


//Section-1 slider using Slik
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

//Section-1 animation using AOS
AOS.init({
  offset: 120,
  duration: 1000,
  easing: 'ease',
});


// Section-2 GSAP Animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".s-2-img-0",{
  y: -80,
  duration: 3,
  scrollTrigger: ".s-2-img-0",
})

//s-2-img-1 animation
let tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".s-2-img-1",
      scroller: "body",
      // markers: true,
      start: "top 90%",
      end: "top 15%",
      scrub: 3,
  }
});
tl.to(".s-2-img-1", { x: 15, duration: 3, ease: "power1.inOut" })
.to(".s-2-img-1", { y: -100, duration: 6, ease: "power1.inOut" })
.to(".s-2-img-1", { x: 5, duration: 1, ease: "power1.inOut" });

//s-2-img-2 animation
let t2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".s-2-img-2",
      scroller: "body",
      // markers: true,
      start: "top 60%",
      end: "top 20%",
      scrub: 3,
  }
});
t2.to(".s-2-img-2", { x: -10, duration: 3, ease: "power1.inOut" })
.to(".s-2-img-2", { y: -100, duration: 6, ease: "power1.inOut" })
.to(".s-2-img-2", { rotate: 1, duration: 5, ease: "power1.inOut" });


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


  //Secton 5
  let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".bottle-1",
        scroller: "body",
        markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3,
        // pin: true,
    }
  });
  t4
  .to(".bottle-1", { y: -500, duration: 3, ease: "power1.inOut" })
  .to(".bottle-1", { rotate: -20, duration: 3, ease: "power1.inOut" })
  .to(".bottle-1", { x: -130, duration: 3, ease: "power1.inOut" })
  

  let t5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".bottle-2",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3,
        // pin: true,
    }
  });
  t5.to(".bottle-2", { y: -500, duration: 3, ease: "power1.inOut" })
  .to(".bottle-2", { rotate: 0, duration: 3, ease: "power1.inOut" })
  .to(".bottle-2", { x: 0, duration: 3, ease: "power1.inOut" })


  let t6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".bottle-3",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3,
        // pin: true,
    }
  });
  t6.to(".bottle-3", { y: -500, duration: 3, ease: "power1.inOut" })
  .to(".bottle-3", { rotate: 20, duration: 3, ease: "power1.inOut" })
  .to(".bottle-3", { x: 130, duration: 3, ease: "power1.inOut" })

//Moving Text

function breakTheText(){
  //var h1Text= document.querySelector("h1").textContent  {Short hand property}

  var h1= document.querySelector("h1")
  var h1Text= h1.textContent //It gives the text which is inside the h1
  var splittedText= h1Text.split("") //Breaks the string into individual chars
  var clutter= ""

  splittedText.forEach(function(char){
    clutter+= `<span>${char}</span>` //chars will be stored in individual spans 
  })
  h1.innerHTML= clutter
}

breakTheText() //Calling the above function

// GSAP Marquee and Wave Animation
gsap.timeline()
  .fromTo("h1 span", 
    { 
      x: "95vw" 
    }, 
    { 
      x: "-90vw", 
      duration: 10, 
      speed: 5,
      ease: "power1.inOut", 
      repeat: -1 
    }
  );

gsap.fromTo("h1 span", 
  { 
    y: 20
  }, 
  { 
    y: -20, 
    duration: 1.5, 
    ease: "power1.inOut", 
    repeat: -1, 
    yoyo: true, 
    stagger: {
      each: 0.3, 
      repeat: -1
    }
  }
);