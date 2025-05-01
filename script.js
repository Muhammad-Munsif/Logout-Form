document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const logoutBtn = document.getElementById('logout-btn');
    const logoutModal = document.getElementById('logout-modal');
    const confirmLogout = document.getElementById('confirm-logout');
    const cancelLogout = document.getElementById('cancel-logout');
    const closeBtn = document.querySelector('.close-btn');

    // Show modal when logout button is clicked
    logoutBtn.addEventListener('click', function() {
        logoutModal.style.display = 'flex';
    });

    // Hide modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        logoutModal.style.display = 'none';
    });

    // Hide modal when cancel button is clicked
    cancelLogout.addEventListener('click', function() {
        logoutModal.style.display = 'none';
    });

    // Handle actual logout when confirm button is clicked
    confirmLogout.addEventListener('click', function() {
        // Here you would typically:
        // 1. Send a request to your server to invalidate the session
        // 2. Clear any client-side authentication tokens
        // 3. Redirect to the login page
        
        // For demonstration, we'll just show an alert and reload
        alert('You have been logged out successfully.');
        window.location.href = 'login.html'; // Redirect to login page
        
        // In a real application, you might do something like:
        // fetch('/api/logout', { method: 'POST' })
        //     .then(response => {
        //         if (response.ok) {
        //             window.location.href = '/login';
        //         }
        //     });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === logoutModal) {
            logoutModal.style.display = 'none';
        }
    });
});