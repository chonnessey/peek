$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").toggle();
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background")
  })

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background")
  })
})