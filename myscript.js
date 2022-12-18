document.getElementById('login-link')
.addEventListener('click', function(event) {
    event.preventDefault(); // prevent navigating to URL
    document.getElementById('login-form').style.display
    = 'flex'; // display the login form as flex
    document.getElementById('login-form').style.flexDirection = 'row';
    document.getElementById('login-form').style.marginBottom = '10px';
    document.getElementById('login-form').style.gap = '5px';
})