// keyboard events

NORTH = 38; SOUTH = 40; WEST = 37; EAST = 39; // Arrow keys
FIRE = 32; // Space key

// Misc vars
var east = false, // going east? no
    west = false, // west? no
    north = false, // ...
    fire = false; // fire? no

keyDownHandler = function(e) { // handle key down events
  key = e.keyCode;
  if (key == EAST) {
    east = true; // now going east
  };
  if (key == WEST) {
    west = true; // west ...
  };
  if (key == NORTH) {
    north = true;
  };
  
  if (key == FIRE) {
    fire = true;
  }
};

keysUpHandler = function (e) { // handle key up events
  key = e.keyCode;
  if (key == WEST) {
    west = false;
  }
  if (key == EAST) {
    east = false;
  }
  if (key == NORTH) {
    north = false;
  }
  
  if (key = FIRE) {
    fire = false;
  }
}

// make sure we listen for these events
addEventListener("keydown", keyDownHandler, false);
addEventListener("keyup", keysUpHandler, false);
