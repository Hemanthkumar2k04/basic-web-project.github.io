document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        window.location.href = 'about.html'; 
    } else  {
        alert("Incorrect Credentials");
    }
}); 