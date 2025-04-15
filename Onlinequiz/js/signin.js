function redirectToVerification() {
    // Get user email and password from the form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save to localStorage (for demo only)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration successful! Redirecting to email verification...");

    // Redirect to verification page
    window.location.href = "email_verification.html";