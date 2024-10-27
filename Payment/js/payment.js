document.addEventListener('DOMContentLoaded', async function() {
    const form = document.getElementById('billingForm');
    const yearSelect = document.getElementById('expirationYear');
    const cardNumberInput = document.getElementById('cardNumber');

    // Prevent non-numeric input in the card number field
    cardNumberInput.addEventListener('input', function (e) {
        // Remove any non-numeric characters
        e.target.value = e.target.value.replace(/\D/g, '');
    });
    
    // Load payment configuration
    try {
        const response = await fetch('json/payment-config.json');
        const config = await response.json();

        // Optional: validasi bahwa metode pembayaran yang ada di HTML sesuai dengan JSON
        const availableMethods = config.paymentMethods.map(method => method.id);
        document.querySelectorAll('input[name="paymentMethod"]').forEach(input => {
            if (!availableMethods.includes(input.id)) {
                console.warn(`Metode pembayaran ${input.id} tidak ditemukan di konfigurasi.`);
            }
        });
    } catch (error) {
        console.error('Gagal memuat konfigurasi pembayaran:', error);
    }

    // Populate year dropdown
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
        const option = document.createElement('option');
        option.value = currentYear + i;
        option.textContent = currentYear + i;
        yearSelect.appendChild(option);
    }

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        const nameOnCard = document.getElementById('nameOnCard').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expirationMonth = document.getElementById('expirationMonth').value;
        const expirationYear = yearSelect.value;

        if (!selectedPaymentMethod || !nameOnCard || !cardNumber || !expirationMonth || !expirationYear) {
            alert('Please fill in all fields');
            return;
        }

        console.log('Form submitted', {
            paymentMethod: selectedPaymentMethod.value,
            nameOnCard,
            cardNumber,
            expirationMonth,
            expirationYear
        });

        window.location.href = "../billing/billing.html"; // Adjust the path if necessary
    });
});