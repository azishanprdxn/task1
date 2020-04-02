// Declare and display array
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var result = "";
document.getElementById('array').innerHTML = "";
document.getElementById('array').innerHTML +=
  "Numbers stored in array are: " + arr.join(", ");

// Function to find the numbers
function displayNumbers() {
  // Input from user
  var n = Number(document.getElementById('num').value);
  document.getElementById('result').innerHTML = "";
  // Display the input given by the user
  document.getElementById('result').innerHTML += "Entered value is: " + n + "<br>";
  document.getElementById('result').innerHTML +=
    "<br>Numbers added to get " + n + "<br>";
  // Result calculation
  for (var i = 0; i < arr.length; i++) { // Travels array from index 0
    for (var j = i + 1; j < arr.length; j++) { // Travels array from index 1
      result = arr[i] + arr[j]; // Adds array elements from index 0, 1 and so on
      // Displays the resulting array elements if pair is found
      if (result == n) {
        document.getElementById('result').innerHTML += arr[i] + ", " + arr[j];
        document.getElementById('result').innerHTML += "<br>";
        console.log("Found at index", i, j);
      } else {
        console.log("Not found at index", i, j);
      }
    }
  }
  // Resets the input box
  document.getElementById('num').value = "";
}

// Get the input field
var input = document.getElementById("num");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});