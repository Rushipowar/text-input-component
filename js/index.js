// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const email = document.querySelector(".email-input");
const message = document.querySelector(".message");
const qns = document.querySelector(".icon");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

email.addEventListener("input", () => {
  let emailContent = email.value;

  // Check if the email matches the regex pattern
  if (emailRegex.test(emailContent)) {
    message.textContent = "Valid Email!";
    message.style.color = "green";
    qns.style.color = "green";
  } else {
    message.textContent = "Invalid Email!";
    message.style.color = "red";
    qns.style.color = "red";
  }
});
