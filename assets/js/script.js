// Select btnSection to open new content at About Section

// usare il toggle
// btnSect.addEventListener("click", () => {
//   // portfolioImg.src = "./assets/img/FotoProfilo.png";

//   // Aggiunge la classe se non è presente e se è presente, la toglie
//   // openCloseBtn.classList.toggle("fa-plus");
//   // openCloseBtn.classList.toggle("fa-minus");

//   // Se la classe è "fa-plus", al click devo : rimuoverla, aggiungere la classe "fa-minus" e cambiare il contenuto
//   // Se invece la classe è "fa-minus", devo ritornare alla situazione precedente

//   if (openCloseBtn.classList.contains("fa-plus")) {
//     openCloseBtn.classList.remove("fa-plus");
//     openCloseBtn.classList.add("fa-minus");
//     portfolioImg.src = "./assets/img/FotoProfilo.png";
//   } else if (openCloseBtn.classList.contains("fa-minus")) {
//     openCloseBtn.classList.remove("fa-minus");
//     openCloseBtn.classList.add("fa-plus");
//     portfolioImg.src = "./assets/img/viewer-img.png";
//   }

// });

btnSect.addEventListener("click", () => {
  openCloseBtn.classList.toggle("fa-plus");
  openCloseBtn.classList.toggle("fa-minus");

  const newImageSrc = openCloseBtn.classList.contains("fa-minus")
    ? "./assets/img/FotoProfilo.webp"
    : "./assets/img/viewer-img.webp";

  picImg.srcset = newImageSrc;
  portfolioImg.src = newImageSrc;
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
