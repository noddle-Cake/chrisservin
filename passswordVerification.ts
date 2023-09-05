const correctPassword = "Basquiat";

const passwordForm = document.getElementById("passwordForm") as HTMLFormElement;
const passwordInput = document.getElementById("passwordInput") as HTMLInputElement;

passwordForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const enteredPassword = passwordInput.value;

    if(enteredPassword === correctPassword) {
        window.location.href = "resume.html";
    } else {
        alert("INCORRECT PASSWORD");
        passwordInput.value = "";
    }
})