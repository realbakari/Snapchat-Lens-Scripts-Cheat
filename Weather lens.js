// This script displays the current weather information on the camera view.

// get the current weather
var weather = getWeather();

// display weather information
overlay(weather.temperature + "°F and " + weather.condition);
