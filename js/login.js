document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const isPasswordVisible = passwordField.type === "password";

    passwordField.type = isPasswordVisible ? "text" : "password";
    this.textContent = isPasswordVisible ? "visibility_off" : "visibility";
});
