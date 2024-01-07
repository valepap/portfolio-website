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
});
