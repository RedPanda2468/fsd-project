document.addEventListener('DOMContentLoaded', () => {
    const plans = [
        { id: 'buy-weekly', name: 'Weekly Plan', amount: 999 },
        { id: 'emi-weekly', name: 'Weekly Plan (EMI)', amount: 999 },
        { id: 'buy-monthly', name: 'Monthly Plan', amount: 3999 },
        { id: 'emi-monthly', name: 'Monthly Plan (EMI)', amount: 3999 },
        { id: 'buy-yearly', name: 'Yearly Plan', amount: 24999 },
        { id: 'emi-yearly', name: 'Yearly Plan (EMI)', amount: 24999 },
    ];

    plans.forEach(plan => {
        const button = document.getElementById(plan.id);
        if (button) {
            button.addEventListener('click', () => initiatePayment(plan));
        }
    });
});

function initiatePayment(plan) {
    const options = {
        key: 'rzp_test_mZPQHNfDRGxDVL', // Replace with your Razorpay Key ID
        amount: plan.amount * 100, // Amount in paise
        currency: 'INR',
        name: 'Service Provider App',
        description: `Payment for ${plan.name}`,
        handler: function (response) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            // You can add post-payment actions here.
        },
        prefill: {
            name: 'Customer Name',
            email: 'customer@example.com',
            contact: '9999999999',
        },
        theme: {
            color: '#3399cc',
        },
    };

    const rzp = new Razorpay(options);
    rzp.open();
}
