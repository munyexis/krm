jQuery(document).ready(function () {
  "use strick"
  $(".slider").ripples({
    dropRadius: 50,
    perturbance: 0.01,
  });

  $(".text").typed({
    Strings: ["First sentence", "Second sentence."],
    typeSpeed: 0,
  });

  $(".work").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $("#team-members").owlCarousel();

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
