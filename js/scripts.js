$(document).ready(function() {
  $("#submenu-1").css("display", "none");

  $(".active-bn-item").hover(function() {
    $("#submenu-1").toggle();
  });

  $("#submenu-1").hover(function() {
    $('#submenu-1').toggle();
  });

  $("#submenu-1, .active-bn-item").mouseenter(function() {
    $(".active-bn-item").css({
      textDecoration: "underline",
      backgroundColor: "#f1f1f1",
      color: "#262626"
    })
  }).mouseleave(function() {
    $(".active-bn-item").css({
      textDecoration: "none",
      backgroundColor: "#dfe0e6",
      color: "#282f54"
    })
  })
});
