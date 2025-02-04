document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic validation
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      // Clear form
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  