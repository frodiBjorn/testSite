const burgerMenuBtn = document.querySelector('.burger');
const navMenu = document.querySelector('.navigation');
const cross = document.querySelector('.cross');
function openNav() {
  navMenu.classList.add('active');
}
function closeNav() {
  navMenu.classList.remove('active');
}

burgerMenuBtn.addEventListener('click', openNav);
cross.addEventListener('click', closeNav);