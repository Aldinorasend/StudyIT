function submitRegister() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("newPass").value;
    const confPassword = document.getElementById("confNewPass").value;

    const numberPattern = /\d/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const userData = {
        name: name,
        email: email,
        newPassword: newPassword,
        confPassword: confPassword
    };

    // Test the input string for digits
    if (numberPattern.test(name)) {
        alert("Name Cannot Contain Numbers");
    } else {
        if (!passwordPattern.test(newPassword) && !passwordPattern.test(confPassword)){
            alert("Password must be at least 8 characters long and contain letters, numbers, and special characters.");
        }
        if (newPassword != confPassword) {
            alert("Passwords do not match");
        } else {
            // Mengubah objek menjadi string JSON
            const jsonData = JSON.stringify(userData);

            // Menampilkan data JSON (Anda bisa menyimpannya atau mengirimnya ke server)
            console.log(jsonData);

            // Jika Anda ingin menyimpan ke local storage (contoh):
            localStorage.setItem('userData', jsonData);
        }

    }
}