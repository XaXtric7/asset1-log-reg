const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

// Add event listeners for input fields to ensure labels stay up when text is entered
document.querySelectorAll(".input-box input").forEach((input) => {
  // Check if input already has value on page load
  if (input.value) {
    input.classList.add("has-value");
  }

  // Add input event listener to track changes
  input.addEventListener("input", function () {
    if (this.value) {
      this.classList.add("has-value");
    } else {
      this.classList.remove("has-value");
    }
  });
});
