// Array Program

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

// Pattern Program

/* Pattern 1 =================================================================== */
var p1 = 4;
var i, j;
// Loop
for (i = 1; i <= p1; i++) {
  // Spacing
  for (j = p1 - 1; j >= i; j--) {
    document.getElementById('pattern1').innerHTML += "&nbsp;&nbsp;";
  }
  // Printing
  for (j = 1; j <= 2 * i - 1; j++) {
    if (j % 2 == 0) { // for Printing A on even Position of every line
      document.getElementById('pattern1').innerHTML += "A";
    } else { // for Printing A on odd Position of every line
      document.getElementById('pattern1').innerHTML += "*";
    }
  }
  // Line Break
  document.getElementById('pattern1').innerHTML += "<br>";
}

/* Pattern 2 =================================================================== */
var p2 = 5;
var i, j;
// Loop
for (i = 1; i <= p2; i++) {
  // Printing
  for (j = 1; j <= 9; j++) {
    if ((i == 5) || (i + j == 6) || (j - i == 4)) {
      document.getElementById('pattern2').innerHTML += "*"; // Print * if given condition is true
    } else {
      document.getElementById('pattern2').innerHTML += "&nbsp;&nbsp;"; // Spacing
    }
  }
  // Line Break
  document.getElementById('pattern2').innerHTML += "<br>";
}

/* Pattern 3 =================================================================== */
var p3 = 3;
// Loop
for (var i = 1; i <= p3; i++) {
  // Printing
  for (var j = 1; j <= i; j++) {
    document.getElementById('pattern3').innerHTML += Math.pow(j, i) + "&nbsp;";
  }
  // Line Break
  document.getElementById('pattern3').innerHTML += "<br>";
}

/* Pattern 4 =================================================================== */
var p4 = 9;
var i, j, k = 0;
for (i = 1; i <= p4; i++) {
  if (i <= 5) {
    k++;
  } else {
    k--;
  }
  for (j = 1; j <= 10; j++) {
    if ((j <= 6 - k) || (j >= 5 + k)) { // for Printing *
      document.getElementById('pattern4').innerHTML += "*";
    } else { // Spacing
      document.getElementById('pattern4').innerHTML += "&nbsp;&nbsp;";
    }
  }
  //   Line Break
  document.getElementById('pattern4').innerHTML += "<br>";
}

/* Pattern5 =================================================================== */
var p5 = 5;
var i, j;
// Print upper half of the pattern
for (i = 1; i <= p5; i++) {
  for (j = 1; j <= i; j++) {
    document.getElementById('pattern5').innerHTML += "*"; // Print *
  }
  for (j = (2 * i - 2); j <= (2 * p5 - 3); j++) {
    document.getElementById('pattern5').innerHTML += "&nbsp;&nbsp;"; // Spacing
  }
  for (j = 1; j <= i; j++) {
    document.getElementById('pattern5').innerHTML += "*"; // Print *
  }
  // Line Break
  document.getElementById('pattern5').innerHTML += "<br>";
}
// Print lower half of the pattern
for (i = 1; i <= p5; i++) {
  for (j = i; j <= p5; j++) {
    document.getElementById('pattern5').innerHTML += "*"; // Print *
  }
  for (j = 1; j <= (2 * i - 2); j++) {
    document.getElementById('pattern5').innerHTML += "&nbsp;&nbsp;"; // Spacing
  }
  for (j = i; j <= p5; j++) {
    document.getElementById('pattern5').innerHTML += "*"; // Print *
  }
  // Line Break
  document.getElementById('pattern5').innerHTML += "<br>";
}

/* Pattern 6 =================================================================== */
var p6 = 6;
// Loop
for (var i = 1; i <= p6; i++) {
  // Printing
  for (var j = 1; j <= i; j++) {
    document.getElementById('pattern6').innerHTML += "#";
  }
  // Line Break
  document.getElementById('pattern6').innerHTML += "<br>";
}

/* Pattern 7 =================================================================== */
var p7 = 5;
// Loop
for (var i = 1; i <= p7; i++) {
  // Initialize num
  var num = i - 1;
  // Spacing
  for (var j = p7 - 1; j >= i; j--) {
    document.getElementById('pattern7').innerHTML += "&nbsp;&nbsp;";
  }
  // Print
  for (var j = 1; j <= 2 * i - 1; j++) {
    if (j <= i) {
      num++;
      document.getElementById('pattern7').innerHTML += num; // Print num in ascending
    }
    else {
      num--;
      document.getElementById('pattern7').innerHTML += num; // Print num in descending
    }
  }
  // Line Break
  document.getElementById('pattern7').innerHTML += "<br>";
}
