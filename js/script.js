
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const authCard = document.getElementById("auth-card");
  const toggleBtn = document.getElementById("toggle-btn");
  const toggleText = document.getElementById("toggle-text");
  const loginForm = document.getElementById("login-form");
  const logoutBtn = document.getElementById("logout-btn");
  const logoutModal = document.getElementById("logout-modal");
  const confirmLogout = document.getElementById("confirm-logout");
  const cancelLogout = document.getElementById("cancel-logout");
  const closeBtn = document.querySelector(".close-btn");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  let isLoginFormVisible = true;

  // Toggle between login and logout forms
  toggleBtn.addEventListener("click", function () {
    isLoginFormVisible = !isLoginFormVisible;

    if (isLoginFormVisible) {
      authCard.classList.remove("flipped");
      toggleText.textContent = "View logout form";
      toggleBtn.textContent = "Click Here";
      document.body.style.background =
        "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)";
    } else {
      authCard.classList.add("flipped");
      toggleText.textContent = "View login form";
      toggleBtn.textContent = "Click Here";
      document.body.style.background =
        "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)";
    }
  });

  // Login form validation
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailError.style.display = "block";
      emailInput.style.borderColor = "#ff4d4d";
      isValid = false;
    } else {
      emailError.style.display = "none";
      emailInput.style.borderColor = "#ddd";
    }

    // Password validation
    if (passwordInput.value.length < 6) {
      passwordError.style.display = "block";
      passwordInput.style.borderColor = "#ff4d4d";
      isValid = false;
    } else {
      passwordError.style.display = "none";
      passwordInput.style.borderColor = "#ddd";
    }

    // If form is valid, show logout form
    if (isValid) {
      // Add success animation
      authCard.classList.add("success-animation");
      setTimeout(() => {
        authCard.classList.remove("success-animation");
      }, 600);

      isLoginFormVisible = false;
      authCard.classList.add("flipped");
      toggleText.textContent = "View login form";
      toggleBtn.textContent = "Click Here";
      document.body.style.background =
        "linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)";
    }
  });

  // Show modal when logout button is clicked
  logoutBtn.addEventListener("click", function () {
    logoutModal.style.display = "flex";
  });

  // Hide modal when close button is clicked
  closeBtn.addEventListener("click", function () {
    logoutModal.style.display = "none";
  });

  // Hide modal when cancel button is clicked
  cancelLogout.addEventListener("click", function () {
    logoutModal.style.display = "none";
  });

  // Handle actual logout when confirm button is clicked
  confirmLogout.addEventListener("click", function () {
    // Add animation to modal
    const modalContent = document.querySelector('.modal-content');
    modalContent.style.animation = 'modalopen 0.3s reverse forwards';

    setTimeout(() => {
      logoutModal.style.display = "none";
      modalContent.style.animation = '';

      // Add success animation to card
      authCard.classList.add("success-animation");

      // Return to login form
      isLoginFormVisible = true;
      authCard.classList.remove("flipped");
      toggleText.textContent = "View logout form";
      toggleBtn.textContent = "Click Here";
      document.body.style.background =
        "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)";

      // Clear the form
      loginForm.reset();

      setTimeout(() => {
        authCard.classList.remove("success-animation");
      }, 600);

    }, 300);
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === logoutModal) {
      logoutModal.style.display = "none";
    }
  });

  // Real-time validation
  emailInput.addEventListener("input", function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
      emailError.style.display = "none";
      emailInput.style.borderColor = "#e0e0e0";
    }
  });

  passwordInput.addEventListener("input", function () {
    if (passwordInput.value.length >= 6) {
      passwordError.style.display = "none";
      passwordInput.style.borderColor = "#e0e0e0";
    }
  });

  // Handle orientation changes
  window.addEventListener("orientationchange", function () {
    // Force a reflow to fix any rendering issues
    setTimeout(function () {
      authCard.style.transform = 'none';
      setTimeout(function () {
        authCard.style.transform = '';
      }, 10);
    }, 100);
  });

  // Add smooth transitions to inputs
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      this.parentElement.style.transform = 'scale(1.02)';
    });

    input.addEventListener('blur', function () {
      this.parentElement.style.transform = 'scale(1)';
    });
  });
});
