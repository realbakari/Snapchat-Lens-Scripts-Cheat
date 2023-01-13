// This script tracks the user's head and hand movements and applies an effect or overlay based on that.

// detect head and hand movements
var head = detectHead();
var hand = detectHand();

// check if head is nodding
if(head.nod > 0.5){
    overlay("nod_effect");
}
// check if hand is pointing
else if(hand.pointing > 0.5){
    overlay("pointing_effect");
}
