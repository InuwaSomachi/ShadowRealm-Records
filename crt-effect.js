// Add CRT screen effect
document.addEventListener('DOMContentLoaded', () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*';
    
    function glitchText() {
        document.querySelectorAll('.glitch').forEach(element => {
            const originalText = element.innerText;
            let glitchText = '';
            
            for(let i = 0; i < originalText.length; i++) {
                glitchText += Math.random() > 0.9 
                    ? chars[Math.floor(Math.random() * chars.length)]
                    : originalText[i];
            }
            
            element.setAttribute('data-text', glitchText);
        });
        
        requestAnimationFrame(glitchText);
    }
    
    glitchText();
});
