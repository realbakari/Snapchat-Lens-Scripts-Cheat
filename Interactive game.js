// This script creates an interactive game where the user has to pop balloons by tapping on them.

// create an array to store the balloons
var balloons = [];

// create a function to generate new balloons
function generateBalloons() {
  // create a new balloon
  var balloon = {
    x: random(0, 1),
    y: random(0, 1),
    size: random(0.1, 0.3),
    color: randomColor(),
    popped: false
  };
  // add the balloon to the array
  balloons.push(balloon);
}

// create a function to draw the balloons
function drawBalloons() {
  for (var i = 0; i < balloons.length; i++) {
    var balloon = balloons[i];
    if (!balloon.popped) {
      // draw the balloon
      drawCircle(balloon.x, balloon.y, balloon.size, balloon.color);
    }
  }
}

// create a function to check for taps
function checkTaps() {
  // get the tap position
  var tap = getTap();
  if (tap.tapped) {
    for (var i = 0; i < balloons.length; i++) {
      var balloon = balloons[i];
      // check if the tap is within the balloon's bounds
      if (!balloon.popped && isWithin(tap.x, tap.y, balloon.x, balloon.y, balloon.size)) {
        // pop the balloon
        balloon.popped = true;
        // play a pop sound
        playSound("pop.mp3");
        // increase the score
        score++;
      }
    }
  }
}

// create a function to update the game
function update() {
  // generate new balloons
  generateBalloons();
  // draw the balloons
  drawBalloons();
  // check for taps
  checkTaps();
}

// create a timer to update the game
setInterval(update, 1000);

// create a variable to store the score
var score = 0;

// display the score
overlay(score, 0.5, 0.5, "white", "Helvetica", 40);
