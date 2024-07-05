function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Username and Password cannot be empty';
        return false;
    }

    // Add any other validation logic here (e.g., length, special characters, etc.)

    errorMessage.textContent = '';
    alert('Login successful');
    return true;
}
