document.addEventListener('DOMContentLoaded', function() {
    const billingForm = document.getElementById('billingForm');
    const countryInput = document.getElementById('country');
    const zipcodeInput = document.getElementById('zipcode');

    //konfigurasi JSON
    fetch('../json/billing-config.json')
        .then(response => response.json())
        .then(config => {
            countryInput.value = config.defaultCountry;


            //input hanya angka
            zipcodeInput.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^0-9]/g, ''); // Hanya izinkan angka
            });
            
            // Validasi
            billingForm.addEventListener('submit', function(e) {
                e.preventDefault();

                const country = countryInput.value.trim();
                const zipcode = zipcodeInput.value.trim();

                if (!config.countries.includes(country)) {
                    alert(config.validationMessages.country);
                    return;
                }

                const zipRegex = new RegExp(config.zipCodeFormat);
                if (!zipRegex.test(zipcode)) {
                    alert(config.validationMessages.zipcode);
                    return;
                }
                window.location.href = "../../page/homePage.html";
            });
        })
        .catch(error => console.error('Error loading config:', error));
});