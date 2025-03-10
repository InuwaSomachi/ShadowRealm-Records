document.addEventListener('DOMContentLoaded', () => {
    // CRT scanline animation
    const crtEffect = () => {
        const crt = document.querySelector('.crt');
        if (crt) {
            crt.style.animation = 'scanline 6s linear infinite';
        }
    };

    // Glitch effect initialization
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.animation = 'glitch 1s infinite';
        });
        element.addEventListener('mouseout', () => {
            element.style.animation = '';
        });
    });

    // Pixel button effects
    document.querySelectorAll('.pixel-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            button.style.transform = 'translate(3px, 3px)';
            setTimeout(() => {
                button.style.transform = 'translate(0, 0)';
            }, 200);
        });
    });

    crtEffect();
});

// Scanline animation
const style = document.createElement('style');
style.textContent = `
@keyframes scanline {
    0% { background-position: 0 0; }
    100% { background-position: 0 100vh; }
}
`;
document.head.appendChild(style);
