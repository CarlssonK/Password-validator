$(".eye").click(function() {
  $(this).toggleClass("fa-eye-slash");
  const input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

function press() {
  console.log("mouse down")
  $("#password-input").focus()
}