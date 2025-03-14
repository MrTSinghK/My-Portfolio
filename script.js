// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const navbar = document.getElementById('navbar');
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
toggleButton.classList.add('navbar-toggle');
navbar.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
