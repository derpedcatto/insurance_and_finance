const btnOpenForm = document.getElementById('btn-open-form');
const btnCloseForm = document.getElementById('form-btn-close');
const formContainer = document.getElementById('form-container');
const animationDuration = 500;

btnOpenForm.addEventListener('click', function () {
  formContainer.classList.remove("slide-down-animation");
  formContainer.classList.remove("contact-form-hidden");
});

btnCloseForm.addEventListener('click', function () {
  formContainer.classList.add("slide-down-animation");
  setTimeout(() => {
    formContainer.classList.add("contact-form-hidden");
  }, animationDuration);
});