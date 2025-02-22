document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Паролі не співпадають!";
    } else {
        message.style.color = "green";
        message.textContent = "Реєстрація успішна!";
        setTimeout(() => {
            message.textContent = "";
            document.getElementById("registrationForm").reset();
            window.location.href = "music.html";
        }, 2000);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in");
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = this.href;
        }, 500);
    });
});



