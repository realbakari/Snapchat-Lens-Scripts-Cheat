// This script allows users to recognize the objects in the camera view and display the information.

// load image recognition model
var model = loadModel("model.tflite");

// capture the camera view
var view = capture();

// recognize the objects
var objects = recognizeImage(model, view);

// display the information
overlay(objects);
