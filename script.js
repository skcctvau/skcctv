document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation and submission message (for GitHub Pages)
    // Note: This form won't actually send an email on GitHub Pages.
    // For a real website, you would need a backend script (e.g., PHP, serverless function) to handle form submissions.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            alert(`Thank you, ${name}! Your message has been received. We will contact you shortly at ${email}.`);

            // You can also clear the form fields after submission
            contactForm.reset();
        });
    }
});
