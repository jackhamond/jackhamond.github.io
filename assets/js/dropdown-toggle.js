$(document).ready(function() {
  $(".dropdown-toggle").click(function() {
    $(this).next(".item").slideToggle();
  });
});
