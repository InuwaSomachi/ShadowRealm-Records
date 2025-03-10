// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    setTimeout(() => {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
    }, 50);
});

// Hover Effects
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover-active');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover-active');
    });
});

// Audio Preview on Artist Hover
document.querySelectorAll('.artist-card').forEach(card => {
    const audio = card.querySelector('audio');
    
    card.addEventListener('mouseenter', () => {
        audio.currentTime = 0;
        audio.play();
    });
    
    card.addEventListener('mouseleave', () => {
        audio.pause();
    });
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Modal Interactions
const modal = document.querySelector('.modal-overlay');
document.querySelector('.nav-logo').addEventListener('click', () => {
    modal.style.display = 'flex';
});

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Dark Mode Toggle (Bonus)
const darkModeToggle = document.createElement('div');
darkModeToggle.className = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});
