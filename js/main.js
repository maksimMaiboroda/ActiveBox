$(function() {
  /* Fixed Header */
  let header = $("#header");
  let intro = $("#intro");
  let introHeight = intro.innerHeight();
  let scrollPosition = $(window).scrollTop();

  checkScroll(scrollPosition, introHeight);

  $(window).on("scroll load resize", function() {
    introHeight = intro.innerHeight();
    scrollPosition = $(this).scrollTop();

    checkScroll(scrollPosition, introHeight);
  });

  function checkScroll(scrollPosition, introHeight) {
    if (scrollPosition > introHeight) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data("scroll");
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate(
      {
        scrollTop: elementOffset - 50
      },
      700
    );
  });

  /* Nav Toggle */
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
  });

  /* Reviews: https://kenwheeler.github.io/slick/ */
  /* let slider = $("#reviewsSlider");

  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false
  }); */
});
