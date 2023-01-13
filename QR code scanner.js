// This script allows users to scan QR codes and display the information on the camera view.

// detect QR code
var qr = detectQRCode();

// check if a QR code is detected
if (qr.length > 0) {
   // display the information
   overlay(qr[0].data);
}
