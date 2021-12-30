$(function () {
  $(document).on("mouseover", "h1", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "h1", function () {
    $(this).css({ "color": "" });
  })
});

$(function() {
  $(".botton").on("click", function() {
    $(".box").slideToggle();
  });
});