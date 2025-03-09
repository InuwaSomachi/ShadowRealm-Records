document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('#newsletter-form input[type="email"]').value;
    
    // Formspree integration
    fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => {
        if (response.ok) {
            alert('Welcome to the Shadow Realm! You\'ll receive updates from the underground.');
            document.getElementById('newsletter-form').reset();
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went dark... Please try again later.');
    });
});
