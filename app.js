const form = document.getElementById("form");
const full_name = document.getElementById("full_name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const full_name_value = full_name.value.trim();
    const email_value = email.value.trim();
    const password_value = password.value.trim();

    if (full_name_value === "") {
        setError(full_name, "Full Name is required");
    } else {
        setSuccess(full_name);
    }

    if (email_value === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(email_value)) {
        setError(email, "Povide a valid email address")
    } else {
        setSuccess(email);
    }

    if (password_value === "") {
        setError(password, "Password is required");
    } else if (password_value.length < 6) {
        setError(password, "Password must be at least 6 characters.")
    } else {
        setSuccess(password);
    }
};


