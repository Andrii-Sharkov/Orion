// Getting Current Year
function getCurrentYear(){
  const year = document.querySelector('.year');
  const currentYear = new Date().getFullYear();
  year.textContent = currentYear;
}
getCurrentYear();

// Nav Bar
const burgerMenu = document.querySelector('.fa-bars');
const buttonClose = document.querySelector('.btn-close');
burgerMenu.addEventListener('click', function () {
  const navBar = document.querySelector('.nav-bar');
  navBar.style.width = '250px';
});

buttonClose.addEventListener('click', function () {
  const navBar = document.querySelector('.nav-bar');
  navBar.style.width = '0px';
});

// Modal Form
const btnClose = document.querySelector('.close');
const btnSign = document.querySelector('.btn-sign');
btnSign.addEventListener('click', function () {
  const modalForm = document.querySelector('#modal');
  modalForm.style.display = 'block';
});

btnClose.addEventListener('click', function () {
  const modalForm = document.querySelector('#modal');
  modalForm.style.display = 'none';
});

// Stick Side Nav Bar
// window.addEventListener('scroll', function () {
//   const navBar = document.querySelector('.nav-bar');
//   scrollY > 500 ? navBar.style.width = '250px' : navBar.style.width = '0px';
// });



