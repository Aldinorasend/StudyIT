function submitLogin() {
    const email = $("#email").val();
    const password = $("#password").val();

    // Fetch the JSON file with credentials
    $.getJSON('/json/credentials.json')
        .done(credentials => {
            // Check if entered email and password match any credential in JSON
            const user = credentials.find(user => user.email === email && user.password === password);

            if (user) {
                // Redirect on successful login
                alert("Login successful! Redirecting...");
                window.location.href = '../page/homePage.html';
            } else {
                // Show error message if credentials do not match
                alert("Incorrect email or password.");
            }
        })
        .fail(error => {
            console.error("Error fetching credentials:", error);
            alert("There was an error with the login process.");
        });
}
