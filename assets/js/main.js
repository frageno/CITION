const hamburgerBtn = document.querySelector(".c-nav__hamburger");
hamburgerBtn.addEventListener("click", () => {
    const e = document.querySelector(".c-nav__navigation"),
        c = document.querySelector(".c-nav__hamburger");
    e.classList.toggle("c-nav__active"), c.classList.toggle("c-nav__change");
});
const dropdownArrow = document.querySelectorAll(".c-nav__item-has-children");
dropdownArrow.forEach(function (e) {
    e.addEventListener("click", function () {
       e.classList.toggle("c-nav__show-idicator");
       e.children[1].classList.toggle("c-nav__show-submenu");
    });
});


