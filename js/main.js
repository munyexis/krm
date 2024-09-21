$(document).ready(function(){
  $(".slider").ripples({
    dropRadius: 50,
    perturbance: 0.01,
  });
  // $(".text").typed({
  //   Strings: ["First sentence", "Second sentence."],
  //   typeSpeed: 0,
  // });
      $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
          scrollTop: $(section).offset().top - -2
        }, 1250, "easeInExpo");
        });

    //jQuery methods go here...
    // $('.counter').counterUp({
    //   delay: 10,
    //   time: 1000
    // });

    // $(".text").typed({
    //   Strings: ["First sentence", "Second sentence."],
    //   typeSpeed: 0,
    // });
    // $(".work").magnificPopup({
    //   delegate: "a",
    //   type: "image",
    //   gallery: {
    //     enabled: true,
    //   },
    // });

  });