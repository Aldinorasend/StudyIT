document.addEventListener('DOMContentLoaded', async function () {
    const form = document.getElementById('billingForm');
    const yearSelect = document.getElementById('expirationYear');
    const cardNumberInput = document.getElementById('cardNumber');

    // Mencegah input selain angka
    cardNumberInput.addEventListener('input', function (e) {
        this.value = this.value.replace(/\D/g, ''); // Hanya angka yang diperbolehkan
    });

    // Load payment configuration
    try {
        const response = await fetch('/asset/json/payment-config.json');
        const config = await response.json();

        // Validasi metode pembayaran
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
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        const nameOnCard = document.getElementById('nameOnCard').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const expirationMonth = document.getElementById('expirationMonth').value;
        const expirationYear = yearSelect.value;

        if (!selectedPaymentMethod || !nameOnCard || !cardNumber || !expirationMonth || !expirationYear) {
            alert('Mohon isi bagian ini');
            return;
        }

        console.log('Form submitted', {
            paymentMethod: selectedPaymentMethod.value,
            nameOnCard,
            cardNumber,
            expirationMonth,
            expirationYear
        });

        window.location.href = "/page/billing.html"; // Adjust the path if necessary
    });
});
