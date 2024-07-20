/* TOGGLE ICON NAVBAR */
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/* SCROLL SECTION ACTIVATION LINK */
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    SpeechRecognitionResult.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let  id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/* STICKY NAVBAR */
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY>100);

/* REMOVE TOGGLE ICON AND NAVBAR WHEN NAVBAR CLICKED */
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


/* SCROLL REVEAL ANIMATION */
ScrollReveal({
    //reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


/* TYPE TEXT ANIMATION */
var typed = new Typed('.multiple-text', {
    strings: ["FullStack Webdeveloper", "Competitive Programmer", "Open Source Contributor", "Tech Content Writer", "Game Developer Unity"],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });