// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;

//     if (username === 'Admin' && password === 'Password') {
//         alert('Login Sucessful.');
//     } else {
//         alert('Invalid username or password.')
//     }
    
// });


// document.getElementById('registrationForm').addEventListener('submit', function(event) {
// event.preventDefault();
//     const username = document.getElementById('regUsername').value;
//     const email = document.getElementById('regEmail').value;
//     const password = document.getElementById('regPassword').value;
//     const confirmPassword = document.getElementById('regConfirmPassword').value;
    
//     if (username && email && password && confirmPassword) {
//         if(password === confirmPassword) {
//             alert('Registration complete.');
//             document.getElementById('registrationForm').reset();
//         } else {
//             alert('Passwords does not match.');
//         }
//     } else {
//         alert('Fill in missing fields.');
//     }
// });




















document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    //Check to see if username and password are valid
    if (username === 'admin' && password === 'password') {
        //Valid login
        alert('Login Successful');
    } else {
        //Invalid login
        alert('Invalid Username or Password');
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
     const username = document.getElementById('regUsername').value;
     const email = document.getElementById('regEmail').value;
     const password = document.getElementById('regPassword').value;
     const confirmPassword = document.getElementById('regConfirmPassword').value;

     //Check to see if fields are filled
    if (username && email && password && confirmPassword) {
        //Check to see if passwords match
        if (password === confirmPassword) {
            //Successful registration
            alert('Registration Success!');
            //Reset the form
            document.getElementById('registrationForm').reset();
        } else {
            //Passwords don't match
            alert('Passwords do not match');
        }       
    } else { 
        //Missing fields 
        alert('Please fill in all fields');
    }
});