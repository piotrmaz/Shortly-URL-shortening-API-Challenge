// copy function
document.querySelectorAll(".button-copy").forEach(item => {
  item.addEventListener("click", event => {
    var myTextToCopy = item.value;
    navigator.clipboard.writeText(myTextToCopy).then(function() {
      console.log("Async: Copying to clipboard was successful!");
    item.innerHTML="Copied!";
    $(item).css("background-color", "#3b3054");
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  })
})


// validation

const form  = document.getElementsByTagName('form')[0];

const longLink = document.getElementById('long-link');
const linkError = document.querySelector('#long-link + span.error');

longLink.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (longLink.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    linkError.innerHTML = ''; // Reset the content of the message
    linkError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!longLink.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {

  if(longLink.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    linkError.textContent = "Pleas add a link";
  }else if(longLink.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    linkError.textContent = "You need to enter valid url link";}
  // Set the styling appropriately
  linkError.className = "error active";
}
