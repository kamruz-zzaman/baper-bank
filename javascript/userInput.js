const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {
    const givenEmail = userEmail.value;
    const givenPassword = userPassword.value;
    console.log(givenEmail, givenPassword);
    if (givenEmail == 'kamruz.zaman8991@gmail.com' && givenPassword == 'LoveShanta123@') {
        window.location.href = 'banking.html';
    }
})