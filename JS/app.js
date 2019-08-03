const skills = document.querySelectorAll('.skills');

skills.forEach(function (skill) {
    skill.addEventListener('mouseover', function () {
        skill.classList.add('skill-hovered');
    })
    skill.addEventListener('mouseout', function () {
        skill.classList.remove('skill-hovered');
    })
})