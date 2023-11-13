// Get the button element
var openDialogBtn = document.getElementById('openDialogBtn');

// Add a click event listener to the button
openDialogBtn.addEventListener('click', function() {
  // Open a dialog
  console.log("meron");
  showDialog();
});

// Function to open the dialog
function showDialog() {
  // Create a new dialog element
  var dialog = document.createElement('dialog');

  // Set the content of the dialog
  dialog.innerHTML = `
    <p>This is a dialog!</p>
    <button id="closeDialogBtn">Close</button>
  `;

  // Append the dialog to the document body
  document.body.appendChild(dialog);

  // Get the close button inside the dialog
  var closeDialogBtn = dialog.querySelector('#closeDialogBtn');

  // Add a click event listener to the close button
  closeDialogBtn.addEventListener('click', function() {
    // Close the dialog
    dialog.close();
  });

  // Open the dialog
  dialog.showModal();
}