header = document.body.querySelector('#header');
hero = document.body.querySelector('#hero');

// BACK TO TOP BUTTON
backToTop = document.body.querySelector('#back-to-top');

// Header Background Transition
window.onscroll = function() {
    if (document.body.scrollTop > (window.innerHeight / 10) || document.documentElement.scrollTop > (window.innerHeight / 10)) {
        header.style.background = "#11245A";

        // displaying the button
        backToTop.style.opacity = 1;
      } else {
        header.style.background = "transparent";

        // hiding the button
        backToTop.style.opacity = 0;
      }
}


// toggling the nav on mobile screens
menuToggler = header.querySelector('#menu-toggler');
navBar = header.querySelector('nav')

menuToggler.addEventListener('click', function() {
  navBar.classList.toggle('open')
  hero.classList.toggle('dropdown')
})

// Back to Top Functionalities
backToTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});