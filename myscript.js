document.getElementById('login-link')
.addEventListener('click', function(event) {
    event.preventDefault(); // prevent navigating to URL
    document.getElementById('login-form').style.display
    = 'block'; // display the login form as a block
})