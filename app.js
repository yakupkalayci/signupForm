const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#confirmPass");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(checkPasswords()) {
        alert("You have signed in succesfully!");
        clearInputs();
    } else {
        alert("The passwords must be same. Please check it again!");
    }
});

function checkPasswords() {
    if(passwordInput.value === passwordConfirmInput.value) {
        return true;
    } else {
        return false;
    }
}

function clearInputs() {
    inputs.forEach(input => {
        input.value = "";
    });
}