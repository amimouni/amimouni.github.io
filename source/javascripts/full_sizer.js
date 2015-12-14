$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.window-full-sized').css('min-height', windowHeight);
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });
});



$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    treeQuarterHeight = windowHeight * 3 / 4;
    $('.window-tree-quarter-sized').css('min-height', treeQuarterHeight);
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });
});
