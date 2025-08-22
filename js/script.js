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
      document.body.style.background =
        "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)";
    } else {
      authCard.classList.add("flipped");
      toggleText.textContent = "View login form";
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
      isLoginFormVisible = false;
      authCard.classList.add("flipped");
      toggleText.textContent = "View login form";
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
    // For demonstration, we'll just show an alert and go back to login form
    alert("You have been logged out successfully.");
    logoutModal.style.display = "none";

    // Return to login form
    isLoginFormVisible = true;
    authCard.classList.remove("flipped");
    toggleText.textContent = "View logout form";
    document.body.style.background =
      "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)";

    // Clear the form
    loginForm.reset();
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
      emailInput.style.borderColor = "#ddd";
    }
  });

  passwordInput.addEventListener("input", function () {
    if (passwordInput.value.length >= 6) {
      passwordError.style.display = "none";
      passwordInput.style.borderColor = "#ddd";
    }
  });
});
