$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.paragraph').css('min-height', windowHeight);
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });
});
