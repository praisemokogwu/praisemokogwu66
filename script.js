// script.js - JavaScript for Resume Website

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-about');
    const aboutSection = document.getElementById('about');

    toggleButton.addEventListener('click', function() {
        if (aboutSection.style.display === 'none') {
            aboutSection.style.display = 'block';
            toggleButton.textContent = 'Hide About Section';
        } else {
            aboutSection.style.display = 'none';
            toggleButton.textContent = 'Show About Section';
        }
    });

    // Add some animation to skills list
    const skillsList = document.querySelector('#skills ul');
    const skills = skillsList.querySelectorAll('li');

    skills.forEach((skill, index) => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(20px)';
        setTimeout(() => {
            skill.style.transition = 'opacity 0.5s, transform 0.5s';
            skill.style.opacity = '1';
            skill.style.transform = 'translateY(0)';
        }, index * 200);
    });

    console.log('Resume website JavaScript loaded successfully!');
});