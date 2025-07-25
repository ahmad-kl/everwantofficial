document.getElementById('screenshot-upload').addEventListener('change', function () {
    const scanner = document.querySelector('.scanner');
    const loadingMessage = document.querySelector('.loading-message');
    const progress = document.querySelector('.progress');
    const successPopup = document.querySelector('.success-popup');
    const joinButton = document.querySelector('.join-button');

    // Reset previous states
    scanner.classList.remove('hidden');
    loadingMessage.textContent = 'Verifying...';
    progress.style.width = '0%';
    successPopup.classList.add('hidden');
   

    // Start simulated verification
    setTimeout(() => {
        progress.style.width = '100%';

        setTimeout(() => {
            loadingMessage.textContent = ''; // Hide 'Verifying...'
            successPopup.classList.remove('hidden'); // Show 'Verified'
            joinButton.classList.remove('hidden'); // Show WhatsApp button
        }, 2000);
    }, 100); // Delay before bar fills up
});
