// const skills = document.querySelectorAll('.skills'),
//   menuIcon = document.querySelector('.nav__icon'),
//   navbar = document.querySelector('.navbar--mobile'),
//   menuItem = document.querySelectorAll('.navbar__item--mobile '),
//   headerLogo = document.querySelector('.header__logo'),
//   headerNav = document.querySelector('.navbar__list'),
//   home = document.querySelector('.home'),
//   homeButton = document.querySelector('.home__button'),
//   homeHeader = document.querySelector('.home__head'),
//   homeHeaderBig = document.querySelector('.home__head-big'),
//   scrollTriggerElements = document.querySelectorAll('[data-scroll]');

// skills.forEach(skill => {
//   skill.addEventListener('mouseover', function() {
//     skills.forEach(item => item.classList.add('is-opacified'));
//     this.classList.remove('is-opacified');
//   });
//   skill.addEventListener('mouseout', () => {
//     skills.forEach(item => item.classList.remove('is-opacified'));
//   });
// });

// const openMenu = function() {
//   this.classList.toggle('open');
//   if (this.classList.contains('open')) {
//     navbar.style.display = 'block';
//   } else {
//     navbar.style.display = 'none';
//   }
// };

// menuItem.forEach(item => {
//   item.addEventListener('click', () => {
//     navbar.style.display = 'none';
//     menuIcon.classList.remove('open');
//   });
// });

// const scroller = () => {
//   scrollTriggerElements.forEach(element => {
//     const elementOffsetTop =
//       element.offsetTop + element.clientHeight - window.innerHeight;

//     console.table(elementOffsetTop);

//     if (window.scrollY > elementOffsetTop) {
//       element.classList.add('is-scroll');
//     } else {
//       element.classList.remove('is-scroll');
//     }
//   });
// };

// menuIcon.addEventListener('click', openMenu);
// window.addEventListener('scroll', scroller);
// window.addEventListener('load', () => {
//   headerLogo.classList.add('is-loaded');
//   homeButton.classList.add('is-loaded');
//   homeHeader.classList.add('is-loaded');
//   homeHeaderBig.classList.add('is-loaded');
//   headerNav.classList.add('is-loaded');
// });
