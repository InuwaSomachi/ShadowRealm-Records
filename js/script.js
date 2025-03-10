document.addEventListener('DOMContentLoaded', () => {
    // Scroll effect for main logo
    const mainLogo = document.querySelector('.main-logo');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        mainLogo.style.transform = `scale(${1 + scrolled * 0.0005})`;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
