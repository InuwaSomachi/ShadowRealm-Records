// Newsletter Form Handling
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Replace with your Formspree endpoint
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
            alert('Welcome to the Shadow Network. Expect our whispers...');
        }
    })
    .catch(error => {
        console.error('Shadow Error:', error);
        alert('The void rejected your signal. Try again.');
    });
});
