const skills = document.querySelectorAll('.skills');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar')

skills.forEach(function (skill) {
    skill.addEventListener('mouseover', function () {
        skills.forEach(item => item.classList.add('is-opacified'));
        this.classList.remove('is-opacified');
    })
    skill.addEventListener('mouseout', function () {
        skills.forEach(item => item.classList.remove('is-opacified'));
    })
})

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('navbar--responsive');
    console.log('cyk fuch')

})