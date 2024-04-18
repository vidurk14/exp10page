const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.getElementById('stripe-login');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  let isValid = true;

  // Email validation
  if (!emailInput.value.trim()) {
    alert('Please enter your email address.');
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    alert('Please enter a valid email address.');
    isValid = false;
  }

  // Password validation
  if (!passwordInput.value.trim()) {
    alert('Please enter your password.');
    isValid = false;
  }

  // Additional validations (optional)
  // - Minimum password length
  // - Password complexity (uppercase, lowercase, numbers, symbols)

  if (isValid) {
    // Form is valid, submit the form using AJAX or other methods
    console.log('Form submitted successfully!');
  }
});
