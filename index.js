// Navbar Sticky Position

var nav = document.querySelector('nav');

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY > 100) {
        nav.style.position = 'fixed';
        nav.style.top = '0';
    }
    else {
        nav.style.position = 'static';
    }
})