let hamburgerBtn = document.querySelector('.c-nav__hamburger');

hamburgerBtn.addEventListener('click', () => {
    let navigation = document.querySelector('.c-nav__navigation');
    let hamburgerLine = document.querySelector('.c-nav__hamburger');
    navigation.classList.toggle('c-nav__active');
    hamburgerLine.classList.toggle('c-nav__change');
});