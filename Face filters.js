// This script applies different filters on user's face based on different facial expressions.

// detect faces
var face = detectFaces();

// check if a face is detected
if (face.length > 0) {
   // check the facial expression
   if(face[0].expression.smiling > 0.5){
      // apply a smile filter
      overlay("smile_filter");
   }
   else if(face[0].expression.wink_left > 0.5 || face[0].expression.wink_right > 0.5){
      // apply a wink filter
      overlay("wink_filter");
   }
   else if(face[0].expression.eye_closed_left > 0.5 || face[0].expression.eye_closed_right > 0.5){
      // apply a closed eye filter
      overlay("closed_eye_filter");
   }
}
