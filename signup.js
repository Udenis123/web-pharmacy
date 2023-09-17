function showForm(formId) {
    document.getElementById('form1').style.display = (formId === 'form1') ? 'block' : 'none';
    document.getElementById('form2').style.display = (formId === 'form2') ? 'block' : 'none';

}
    // Function to validate the customer form
    function validateCustomerForm() {
        // Get form elements by their IDs
        var email = document.getElementById("customer-email").value;
        var password = document.getElementById("customer-password").value;
        var repassword = document.getElementById("repassword").value;
        var emailError = document.getElementById("customer-email-error");
        var passwordError = document.getElementById("customer-password-error");

        // Reset error messages
        emailError.textContent = "";
        passwordError.textContent = "";

        // Validate email format (you can improve this regex for stricter validation)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailRegex)) {
            emailError.textContent = "Invalid email format";
            return false;
        }

        // Validate password length
        if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long";
            return false;
        }

        // Check if the passwords match
        if (password !== repassword) {
            passwordError.textContent = "Passwords do not match";
            return false;
        }

        // Form is valid
        return true;
    }
 // Function to validate the owner form
 function validateCustomerForm2() {
    // Get form elements by their IDs
    var email = document.getElementById("owner-email").value;
    var password = document.getElementById("owner-password").value;
    var repassword = document.getElementById("repasswordo").value;
    var emailError = document.getElementById("owner-email-error");
    var passwordError = document.getElementById("owner-password-error");

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validate email format (you can improve this regex for stricter validation)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        emailError.textContent = "Invalid email format";
        return false;
    }

    // Validate password length
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        return false;
    }

    // Check if the passwords match
    if (password !== repassword) {
        passwordError.textContent = "Passwords do not match";
        return false;
    }

    // Form is valid
    return true;
}

