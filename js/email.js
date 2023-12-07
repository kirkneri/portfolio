document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = {
        contactName: this.contactName.value,
        contactEmail: this.contactEmail.value,
        contactSubject: this.contactSubject.value,
        contactMessage: this.contactMessage.value
    };

    emailjs.send('service_8xc7d08', 'template_ni2gc9u', formData)
    .then(function(response) {
        console.log('Auto-response sent:', response);
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        setTimeout(function() {
            document.getElementById('successMessage').style.display = 'none';
        }, 3000); // Hide after 3 seconds (3000 milliseconds)
    })
    .catch(function(error) {
        console.error('Auto-response sending failed:', error);
        // Show error message
        document.getElementById('errorMessage').style.display = 'block';
        setTimeout(function() {
            document.getElementById('errorMessage').style.display = 'none';
        }, 3000); // Hide after 3 seconds (3000 milliseconds)
    });
});


