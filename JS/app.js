const skills = document.querySelectorAll('.skills');
const menuIcon = document.querySelector('.nav__icon');
const navbar = document.querySelector('.navbar--mobile')

skills.forEach(function (skill) {
    skill.addEventListener('mouseover', function () {
        skills.forEach(item => item.classList.add('is-opacified'));
        this.classList.remove('is-opacified');
    })
    skill.addEventListener('mouseout', function () {
        skills.forEach(item => item.classList.remove('is-opacified'));
    })
})

menuIcon.addEventListener('click', function () {
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }

})