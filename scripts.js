$(document).ready(function() {
  $("#submenu-1").css("display", "none");

  $("#active-bn-item").hover(function() {
    $("#submenu-1").toggle();
  });

  $("#submenu-1").hover(function() {
    $(this).toggle();
  });
});
