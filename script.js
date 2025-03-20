const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 80);
});


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header__navbar');
let navLinks = document.querySelectorAll('.header__navbar-link');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open');
    document.body.classList.toggle('menu-open'); 
};


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('open');
        document.body.classList.remove('menu-open');
    });
});


window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section, div[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});