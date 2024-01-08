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

  // Assegna l'ID corretto del video
  let videoElement = document.getElementById("videoElement");
  let videoSlide = document.getElementById("videoSlide");

  // Verifica se l'elemento video esiste prima di aggiungere gli eventi
  if (videoElement) {
    // Nascondi l'anteprima quando il video è completamente caricato
    videoElement.addEventListener("canplaythrough", function () {
      videoElement.style.display = "block";
      if (videoSlide.querySelector("img")) {
        videoSlide.removeChild(videoSlide.querySelector("img"));
      }
      // Imposta l'attributo 'controls' solo quando il video è completamente caricato
      videoElement.setAttribute("controls", "controls");
    });

    // Mostra l'anteprima quando il video inizia a caricare
    videoElement.addEventListener("loadstart", function () {
      videoElement.style.display = "none";
      let previewImage = document.createElement("img");
      previewImage.src = "./assets/img/anteprima.jpeg";
      previewImage.classList.add("w-100");
      videoSlide.appendChild(previewImage);
    });
  }
});
