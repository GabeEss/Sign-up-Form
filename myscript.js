// If the login-link element is clicked, it enables the login form and styles it.
document.getElementById('login-link')
.addEventListener('click', function(event) {
    event.preventDefault(); // prevent navigating to URL
    document.getElementById('login-form').style.display
    = 'flex'; // display the login form as flex
    document.getElementById('login-form').style.flexDirection = 'row';
    document.getElementById('login-form').style.marginBottom = '10px';
    document.getElementById('login-form').style.gap = '5px';
});

const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirm-password');
const requirementsDiv = document.getElementById('password-requirements');
const confirmDiv = document.getElementById('confirm-requirements');

// Test password input. If valid, the inner text changes.
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length >= 8
    && isValidPassword(passwordInput.value)) {
    requirementsDiv.innerText = 'Password meets requirements';
    } else {
    requirementsDiv.innerText = 'Password must be at least 8 characters long and contain one capital letter and one number';
    }
});


// Check if the password contains at least one capital letter and one number
function isValidPassword(password) {
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    return hasCapitalLetter && hasNumber;
    }

// Test confirm password.
confirmInput.addEventListener('input', () => {
    if(passwordInput.value == confirmInput.value)
        confirmDiv.innerText = 'Password confirmed.';
        else
            confirmDiv.innerText = 'Confirm Password must be the same as Password.';
});

