const navLinks = document.querySelectorAll(".header__link");

const menu = document.querySelector(".header__menu");

const checkbox = document.querySelector(".header__menu-btn");


navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        checkbox.checked = false;
    });
});