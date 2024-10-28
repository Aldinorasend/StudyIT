function submitRegister() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("newPass").value;

    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Mengubah objek menjadi string JSON
    const jsonData = JSON.stringify(userData);

    // Menampilkan data JSON (Anda bisa menyimpannya atau mengirimnya ke server)
    console.log(jsonData);

    // Jika Anda ingin menyimpan ke local storage (contoh):
    localStorage.setItem('userData', jsonData);
}