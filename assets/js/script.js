document.addEventListener("DOMContentLoaded", () => {
  const btnSect = document.querySelectorAll(".btnSect");
  const openCloseBtn = document.querySelectorAll(".openCloseBtn");
  const picImgs = document.querySelector("#picImg");
  const portfolioImgs = document.querySelector("#portfolioImg");

  const openDrop = document.querySelector("#openDrop");

  // navbar
  if (window.innerWidth < 992) {
    openDrop.setAttribute("data-bs-toggle", "dropdown");
    openDrop.classList.add("dropdown-toggle");
  } else {
    openDrop.classList.remove("dropdown-toggle");
  }

  function updateImages() {
    const isMobile = window.innerWidth < 768;

    openCloseBtn.forEach((btn) => {
      const newImageSrc = btn.classList.contains("fa-minus")
        ? isMobile
          ? "./assets/img/FotoProfilo.webp"
          : "./assets/img/FotoProfilo.webp"
        : isMobile
        ? "./assets/img/sm-viewer.webp"
        : "./assets/img/viewer-img.webp";

      picImgs.srcset = newImageSrc;
      portfolioImgs.src = newImageSrc;
    });
  }

  btnSect.forEach((btn) => {
    btn.addEventListener("click", () => {
      openCloseBtn.forEach((btn) => {
        btn.classList.toggle("fa-plus");
        btn.classList.toggle("fa-minus");
      });

      updateImages();

      if (openCloseBtn[0].classList.contains("fa-minus")) {
        presText.classList.remove("d-none");
        downloadBtn.classList.remove("d-none");
        aboutTxt.classList.remove("mT");
      } else {
        presText.classList.add("d-none");
        downloadBtn.classList.add("d-none");
        aboutTxt.classList.add("mT");
      }
    });
  });

  window.addEventListener("resize", () => {
    updateImages();
  });

  updateImages();

  /* Form - Email JS */
  const contactForm = document.querySelector(".needs-validation");
  const successMessage = document.querySelector(".successMessage");
  const loader = document.querySelector(".spinner-border");
  const submitBtn = document.querySelector("#submitBtn");

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

  function showLoader() {
    submitBtn.style.display = "none";
    loader.style.display = "inline-block";
  }

  function hideLoader() {
    submitBtn.style.display = "inline-block";
    loader.style.display = "none";
  }

  function sendEmail() {
    showLoader();

    emailjs
      .sendForm("service_3vss8pn", "template_mg950is", ".needs-validation")
      .then(() => {
        hideLoader();
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
});
