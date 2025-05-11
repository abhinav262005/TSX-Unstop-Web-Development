document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const alertBox = document.getElementById('formAlert');
  alertBox.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
  this.reset();
});