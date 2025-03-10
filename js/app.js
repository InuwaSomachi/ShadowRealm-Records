// Initialize cursor effect
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.className = 'shadow-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

// Artist card animations
document.querySelectorAll('.artist-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const x = e.pageX - card.offsetLeft;
        const y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});

// Add scroll animations
window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty(
        '--scroll',
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
}, false);
