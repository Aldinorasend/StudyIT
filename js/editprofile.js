document.addEventListener('DOMContentLoaded', () => {
    fetch('../json/data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('name').textContent = data.name;
            document.getElementById('email').textContent = data.email;
            document.getElementById('phone').textContent = data.phone;
            document.getElementById('address').textContent = data.address;
            document.getElementById('profile-image').src = data.image;
        })
        .catch(error => console.error('Error loading data:', error));
});

function editProfile() {
    alert("Edit Profile feature coming soon!");
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}