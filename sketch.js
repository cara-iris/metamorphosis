let capture;
let circles = [];  // Array to store circles' positions

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Initialize video capture
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
}

function draw() {
  // Draw the video background
  background(0);
  imageMode(CENTER);
  image(capture, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
  filter(INVERT);

  // Loop through the circles array and draw each circle
  for (let i = 0; i < circles.length; i++) {
    fill(0);  // Black fill
    noStroke();  // No border around circles
    ellipse(circles[i].x, circles[i].y, 50, 50);  // Draw circle with a diameter of 50px
  }
}

// Function to add a new circle at the mouse position when clicked
function mousePressed() {
  let newCircle = {
    x: mouseX,
    y: mouseY
  };
  circles.push(newCircle);  // Add the new circle to the array
}


