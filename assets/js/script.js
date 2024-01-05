btnSect.addEventListener("click", () => {
  openCloseBtn.classList.toggle("fa-plus");
  openCloseBtn.classList.toggle("fa-minus");

  const newImageSrc = openCloseBtn.classList.contains("fa-minus")
    ? "./assets/img/FotoProfilo.webp"
    : "./assets/img/viewer-img.webp";

  picImg.srcset = newImageSrc;
  portfolioImg.src = newImageSrc;

  if (openCloseBtn.classList.contains("fa-minus")) {
    presText.classList.remove("d-none");
    downloadBtn.classList.remove("d-none");
    aboutTxt.classList.remove("mb-5");
    aboutTxt.classList.add("mb-4");
    aboutTxt.classList.remove("pb-4");
    aboutTxt.classList.remove("mT");
  } else {
    presText.classList.add("d-none");
    downloadBtn.classList.add("d-none");
    aboutTxt.classList.remove("mb-4");
    aboutTxt.classList.add("mb-5");
    aboutTxt.classList.add("pb-4");
    aboutTxt.classList.add("mT");
  }
});

/* Form - Email JS */
const contactForm = document.querySelector(".needs-validation");
const successMessage = document.querySelector(".successMessage");

(() => {
  ("use strict");

  emailjs.init("REB082kxkIdsqQZ4X");

  // Prevent submission
  contactForm.addEventListener(
    "submit",
    (e) => {
      if (!contactForm.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        sendEmail();
      }

      contactForm.classList.add("was-validated");
    },
    false
  );
})();

function sendEmail() {
  emailjs
    .sendForm("service_3vss8pn", "template_mg950is", ".needs-validation")
    .then(() => {
      successMessage.style.display = "block";
      setTimeout(() => {
        resetForm();
      }, 2500);
    });
}

function resetForm() {
  contactForm.reset();
  contactForm.classList.remove("was-validated");
  successMessage.style.display = "none";
}
