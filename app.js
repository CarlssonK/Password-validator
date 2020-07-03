// Script for style
const eye = document.querySelector(".eye")
const input = $($(".eye").attr("toggle"));

$(".eye").click(function() {
  $(this).toggleClass("fa-eye-slash");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

$("#password-input").on("focus", function() {
  if (eye.classList.contains("fa-eye-slash")) {
    // do nothing
    console.log("do nothing")
  } else {
    console.log("do somehting")
    eye.classList.add("fa-eye-slash");
    input.attr("type", "password");
  }
})


// Script for function


