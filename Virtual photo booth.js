// This script allows users to take photos with different backgrounds and overlays by tapping the screen.

// Load the backgrounds and overlays
var backgrounds = [loadImage("bg1.jpg"), loadImage("bg2.jpg"), loadImage("bg3.jpg")];
var overlays = [loadImage("overlay1.png"), loadImage("overlay2.png"), loadImage("overlay3.png")];

// Create a tap event
onTap(function() {
  // Select a random background and overlay
  var bg = backgrounds[randomInt(0, backgrounds.length - 1)];
  var overlay = overlays[randomInt(0, overlays.length - 1)];

  // Capture the camera view
  var view = capture();

  // Apply the background and overlay
  overlay(bg);
  overlay(overlay, 0.5, 0.5);

  // Save the photo
  saveImage(view, "photobooth.jpg");
});
