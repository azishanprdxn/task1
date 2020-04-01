/* Pattern 1 =================================================================== */
var p1 = 4;
// Loop
for (var i = 1; i <= p1; i++) {
  // Spacing
  for (var j = p1 - 1; j >= i; j--) {
    document.getElementById('pattern1').innerHTML += "&nbsp;&nbsp;";
  }
  // Printing
  for (var j = 1; j <= 2 * i - 1; j++) {
    if (j % 2 == 0) {
      document.getElementById('pattern1').innerHTML += "A";
    } else {
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
      document.getElementById('pattern2').innerHTML += "*";
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
    if ((j <= 6 - k) || (j >= 5 + k)) {
      document.getElementById('pattern4').innerHTML += "*";
    } else {
      document.getElementById('pattern4').innerHTML += "&nbsp;&nbsp;";
    }
  }
  document.getElementById('pattern4').innerHTML += "<br>";
}

/* Pattern5 =================================================================== */
var p5 = 5;
var i, j, k, l;
for (var i = 1; i <= p5; i++) {
  for (var j = 1; j <= i; j++) {
    document.getElementById('pattern5').innerHTML += "*";
  }
  for (var k = (2 * i - 2); k <= (2 * p5 - 3); k++) {
    document.getElementById('pattern5').innerHTML += "&nbsp;&nbsp;";
  }
  for (var l = 1; l <= i; l++) {
    document.getElementById('pattern5').innerHTML += "*";
  }
  document.getElementById('pattern5').innerHTML += "<br>";
}
for (var i = 1; i <= p5; i++) {
  for (var j = i; j <= p5; j++) {
    document.getElementById('pattern5').innerHTML += "*";
  }
  for (var k = 1; k <= (2 * i - 2); k++) {
    document.getElementById('pattern5').innerHTML += "&nbsp;&nbsp;";
  }
  for (var l = i; l <= p5; l++) {
    document.getElementById('pattern5').innerHTML += "*";
  }
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
      document.getElementById('pattern7').innerHTML += num;
    }
    else {
      num--;
      document.getElementById('pattern7').innerHTML += num;
    }
  }
  // Line Break
  document.getElementById('pattern7').innerHTML += "<br>";
}