document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      e.preventDefault();
    } else {
      alert('Thank you for your message!');
    }
  });
  