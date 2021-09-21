// Custom Validation Feedbacks
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Toggle Password
$(".toggle-password").on("click", function () {
  console.log("clicked");
  $(this).toggleClass("mdi-eye mdi-eye-off");
  input = $(this).parent().find("input");
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});



$('#validatedForm').bootstrapValidator({
  feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
  },
  fields: {
      password: {
          validators: {
              identical: {
                  field: 'confirmPassword',
                  message: 'The password and its confirm are not the same'
              }
          }
      },
      confirmPassword: {
          validators: {
              identical: {
                  field: 'password',
                  message: 'The password and its confirm are not the same'
              }
          }
      }
  }
});