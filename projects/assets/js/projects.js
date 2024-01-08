$(document).ready(function () {
  // navbar
  if (window.innerWidth < 992) {
    openDrop.setAttribute("data-bs-toggle", "dropdown");
    openDrop.classList.add("dropdown-toggle");
    openDrop.removeAttribute("href");
  } else {
    openDrop.classList.remove("dropdown-toggle");
    openDrop.href = "../../index.html#projects";
  }

  $("#carouselExampleIndicators").swipe({
    swipe: function (
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      if (direction === "left") {
        $(this).carousel("next");
      }
      if (direction === "right") {
        $(this).carousel("prev");
      }
    },
    allowPageScroll: "vertical",
  });

  /* Scroll Reveal */
  ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2300,
    delay: 100,
  });

  // Fade Down
  ScrollReveal().reveal(".carousel-section h1 ", {
    delay: 300,
    origin: "top",
  });

  // Fade left - desktop only
  ScrollReveal().reveal(".left-reveal", {
    delay: 450,
    origin: "left",
    mobile: false,
  });

  //Fade right - Mobile only
  ScrollReveal().reveal(".left-reveal", {
    delay: 450,
    desktop: false,
  });

  // right - desktop only
  ScrollReveal().reveal(".right-reveal", {
    delay: 500,
    origin: "right",
    mobile: false,
  });

  //right - Mobile only
  ScrollReveal().reveal(".right-reveal", {
    delay: 500,
    desktop: false,
  });

  ScrollReveal().reveal(".carousel", {
    delay: 400,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    // interval: 240,
    scale: 0.65,
  });
});
