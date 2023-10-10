const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email;
    const password = form.elements.password;
    
    if (!email.value || !password.value) {
        alert('Please fill in all the fields of the form');
    } 
    const loginFormElm = {
        email : email.value,
        password : password.value
    };
    console.log(loginFormElm);
    loginForm.reset();
});