// main

load = function() { // initial setup
    me = new Player(10, 440, 2, 2, 100, []); // create new Player: me
    canvas = document.getElementById("c");
    WIDTH = canvas.width; HEIGHT = canvas.height;
    ctx = canvas.getContext("2d");
};

clear = function() { // redraw background
    ctx.clearRect(0, 0, WIDTH, HEIGHT); // clear background
};

window.onload = function () {
    load();
    setInterval(function() { // each frame
        clear(); // clear old frame
        me.draw(); // draw Player object (me)
        if (me.bullets.length > 0) { // any fying bullets?
            for (b of me.bullets) { // each bullet
                if (b.x > WIDTH + 10 || b.x < 0 - 10) { // if out of screen
                    // TODO delete this bullet from the array
                    // could/should this be done in its own tick() method?
                } else { // bullet is still on the screen
                    b.draw(); // draw it (at computed position)
                };
            }
        }
      }, 33); // new frame every 15 miliseconds
};

