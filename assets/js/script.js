document.addEventListener('DOMContentLoaded', () => {
    // Handle artist card clicks
    document.querySelectorAll('.artist-card').forEach(card => {
        card.addEventListener('click', () => {
        const artist = card.dataset.artist;
        window.location.href = `artists/${artist}.html`; // Add directory reference
    });

    // Add hover effect
    const cards = document.querySelectorAll('.artist-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
});
