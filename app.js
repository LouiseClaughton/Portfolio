// Animation Toggler on Viewport

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Light/ Dark Mode Toggler

document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });
});