var correctPassword = "Basquiat";
var passwordForm = document.getElementById("passwordForm");
var passwordInput = document.getElementById("passwordInput");
passwordForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
        window.location.href = "resume.html";
    }
    else {
        alert("INCORRECT PASSWORD");
        passwordInput.value = "";
    }
});
