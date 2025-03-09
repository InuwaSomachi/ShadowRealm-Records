document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    // Add your newsletter service integration here
    alert('Welcome to the Shadow Realm!');
});
