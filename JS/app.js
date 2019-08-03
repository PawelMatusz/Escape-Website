const skills = document.querySelectorAll('.skills');
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar')

skills.forEach(function (skill) {
    skill.addEventListener('mouseover', function () {
        skill.classList.add('skill-hovered');
    })
    skill.addEventListener('mouseout', function () {
        skill.classList.remove('skill-hovered');
    })
})

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('navbar--responsive');
    console.log('cyk fuch')

})