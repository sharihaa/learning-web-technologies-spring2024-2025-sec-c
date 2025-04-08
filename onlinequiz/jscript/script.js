document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Simple mock validation (you can replace this with real backend logic)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or perform some other logic
        // window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
});
