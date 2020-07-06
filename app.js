// Script for style
const eye = document.querySelector(".eye")
const input = $($(".eye").attr("toggle"));

// Hide unhide Text & switch eye
$(".eye").click(function() {
  $(this).toggleClass("fa-eye-slash");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");

  }
});


// Focus input and eye when clicking on input
$("#password-input").on("focus", function() {
  $("#password-input").height("50%")
  $("#password-input").css("border-radius", "0px")

  $("#eyeSpan").height("50%")
  $("#eyeSpan").css("font-size", "12px")
})

// When clicking outside of box, unfocus input and eye
$(document).on('mousedown', function (e) {
$("#password-input").height("100%")
$("#password-input").css("border-radius", "8px")

$("#eyeSpan").height("100%")
$("#eyeSpan").css("font-size", "24px")
});

// Ignore click from inside the box
$('.container').on('mousedown', function(e) {
  e.stopPropagation();
});




// Script for function

// When clicking submit check if it hits minimum requiments
let userPassword = $("#password-input").val()


// Check password LENGTH
if ($("#password-input").val().length >= 5 && $("#password-input").val().length <= 128) {
  console.log("Accepted")
} else {
  console.log("Password too weak")
}

// Check password a number
if (/\d/.test(userPassword) === true) {
  console.log("Accepted")
} else {
  console.log("Password too weak")
}

// Check password UPPERCASE LETTER
if (/[A-Z]/.test(userPassword) === true) {
  console.log("Accepted")
} else {
  console.log("Password too weak")
}

// Check password SPECIAL character
if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(userPassword) === true) {
  console.log("Accepted")
} else {
  console.log("Password too weak")
}

// Check password can't contain Spaces
if (/ /.test(userPassword) === true) {
  console.log("Can't contain spaces")
}



