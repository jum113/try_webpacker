$(function () {
  $(document).on("mouseover", "h1", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "h1", function () {
    $(this).css({ "color": "" });
  })
});

 $(function() {
  $(".botton").on("click", function() {
    $(".box1").slideToggle();
  });
});

$(function() {
  $(".tab").on("click", function() {
    var i = $(this).index() ;
    $(".box").removeClass("active");
    $(".box").eq(i).addClass("active");
  });
});