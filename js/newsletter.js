// newsletter.js
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            this.reset();
            alert('Welcome to the Shadow Realm! You will now receive whispers from the void.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('The shadows reject your submission...try again.');
    });
});
