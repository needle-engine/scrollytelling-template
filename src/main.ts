import("@needle-tools/engine") /* async import of needle engine */;

// Fade in sections when they become visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });    
});
