var form = document.getElementById("myForm");
var inputRegex = /^[a-zA-Z0-9]+$/;

form.addEventListener("submit",function(e) {
  var inputField = document.getElementById("inputField");
  if (!inputRegex.test(inputField.value)) {
    e.preventDefault();
    alert("ERROR. Please enter only alphanumeric characters.");
  } else {
    alert("Success! Form submitted.");
  }
});