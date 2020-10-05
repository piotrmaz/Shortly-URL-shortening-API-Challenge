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
