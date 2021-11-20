subscribeField = document.body.querySelector('#newsletter-email');

subscribeField.addEventListener('keyup', function() {
    emailInput = subscribeField.value;
    // console.log(emailInput);

    // Will fire an alert if the input is greater than 100, which shouldn't be normal
    if (emailInput.length > 50) {
        
        // makes sure no alert pops if the user presses a key that isn't a character after the string is greater than 100 (e.g backspace, arrow key)
        if (String.fromCharCode(event.keyCode).match(/(\w|\s)/g)) {
            alert('Are you sure this is an email address?');
        }
    }
})