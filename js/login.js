function submitLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Fetch the JSON file with credentials
    fetch('/json/credentials.json')
        .then(response => response.json())
        .then(credentials => {
            // Check if entered email and password match any credential in JSON
            const user = credentials.find(user => user.email === email && user.password === password);

            if (user) {
                // Redirect on successful login
                alert("Login successful! Redirecting...");
                window.location.href = 'homePage.html';
            } else {
                // Show error message if credentials do not match
                alert("Incorrect email or password.");
            }
        })
        .catch(error => {
            console.error("Error fetching credentials:", error);
            alert("There was an error with the login process.");
        });
}
