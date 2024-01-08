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

  /* Scroll Reveal */
  ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2300,
    delay: 100,
  });

  ScrollReveal().reveal(".hero-txt", {
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    // easing: "cubic-bezier(.215, .61, .355, 1)",
    // interval: 240,
    scale: 0.65,
  });

  // Projects
  ScrollReveal().reveal(".services-section .card, .projects-section .figure", {
    delay: 500,
    easing: "cubic-bezier(.215, .61, .355, 1)",
    interval: 200,
    scale: 0.65,
  });

  // Fade Down +
  ScrollReveal().reveal(".scroll-down", {
    delay: 200,
    origin: "top",
    easing: "ease-in-out",
    duration: 1500,
  });

  // Fade Down
  ScrollReveal().reveal(
    ".about-section h2, .services-section h2, .projects-section h2, .contact-section h2, .carousel-section .hero-txt ",
    {
      delay: 300,
      origin: "top",
    }
  );

  // View More
  ScrollReveal().reveal(".btnSect, .sub-txt", {
    delay: 300,
  });

  ScrollReveal().reveal(".contact-form, .contact-section .on-light", {
    delay: 400,
  });

  // Fade left
  ScrollReveal().reveal(".portfolio-pic", {
    delay: 300,
    origin: "left",
  });

  // right - desktop only
  ScrollReveal().reveal(".right-reveal", {
    delay: 400,
    origin: "right",
    mobile: false,
  });

  //right - Mobile only
  ScrollReveal().reveal(".right-reveal", {
    delay: 400,
    desktop: false,
  });

  //right - diff - desktop only
  ScrollReveal().reveal(".right-diff-reveal", {
    delay: 300,
    origin: "right",
    interval: 200,
    mobile: false,
  });

  // right - diff - mobile only
  ScrollReveal().reveal(".right-diff-reveal", {
    delay: 300,
    interval: 200,
    desktop: false,
  });
});
