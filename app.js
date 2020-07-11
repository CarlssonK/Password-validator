// ** Script for style **
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




// ** Script for info box **
let clickInfoBox = true;

$(".fa-info").click(function() {
  showInfoBox()
  // Fire hideInfoBox after 5 seconds
  setTimeout(hideInfoBox, 5000)
});

function showInfoBox() {
  if (clickInfoBox === true) {
    clickInfoBox = false;
    // Shows Element after 1 second
    $("#info-box").removeClass("hide-element")
    $("#info-box").animate({
      opacity: 1
    }, 250);
  } 
}

function hideInfoBox() {
  // hides element after 1 sec
  $("#info-box").animate({
    opacity: 0
  }, 500);
  // Removes element fully after 1 sec
  setTimeout(function() {
    clickInfoBox = true;
    $("#info-box").addClass("hide-element")
  }, 500)          
}




// ** Script for validation funciton **
let userPassword;
let acceptedLength = false;
let acceptedNumber = false;
let acceptedUppercase = false;
let acceptedSpecial = false;
let acceptedSpace = false;
// When clicking submit check if it hits minimum requiments
$("#enter").click(function() {
  userPassword = $("#password-input").val()

  showInfoBox()

  // Check password LENGTH
  if ($("#password-input").val().length >= 8 && $("#password-input").val().length <= 128) {
    console.log("Accepted Length")
    acceptedLength = true;
    $("#validation-length").css("color", "green")
  } else {
    $("#validation-length").css("color", "red")
    console.log("Needs length")
    acceptedLength = false;
  }

  // Check password number
  if (/\d/.test(userPassword) === true) {
    $("#validation-number").css("color", "green")
    console.log("Accepted number")
    acceptedNumber = true;
  } else {
    $("#validation-number").css("color", "red")
    console.log("Needs number")
    acceptedNumber = false;
  }

  // Check password UPPERCASE LETTER
  if (/[A-Z]/.test(userPassword) === true) {
    $("#validation-uppercase").css("color", "green")
    console.log("Accepted uppercase letter")
    acceptedUppercase = true;
  } else {
    $("#validation-uppercase").css("color", "red")
    console.log("needs uppercase letter")
    acceptedUppercase = false;
  }

  // Check password SPECIAL character
  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(userPassword) === true) {
    $("#validation-special").css("color", "green")
    console.log("Accepted special character")
    acceptedSpecial = true;
  } else {
    $("#validation-special").css("color", "red")
    console.log("needs special character")
    acceptedSpecial = false;
  }

  // Check password can't contain Spaces
  if (/ /.test(userPassword) === true) {
    $("#validation-spaces").css("color", "red")
    acceptedSpace = false;
    console.log("Can't contain spaces")
  } else {
    $("#validation-spaces").css("color", "green")
    acceptedSpace = true;
  }

  if (acceptedLength === true && acceptedNumber === true && acceptedUppercase === true && acceptedSpecial === true && acceptedSpace === true) {
    $(".container").css("border", "2px solid green")
    $("#enter").css("border", "2px solid green")
    $("#enter").css({
      "border": "2px solid green",
      "border-top": "2px solid rgba(0, 0, 0, 0)"
    })
  } else {
    $(".container").css("border", "2px solid red")
    $("#enter").css({
      "border": "2px solid red",
      "border-top": "2px solid rgba(0, 0, 0, 0)"
    })

  }
});
