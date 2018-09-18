// main

load = function() { // initial setup
    canvas = document.getElementById("c");
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    ctx = canvas.getContext("2d");
    ctx.font = "15px Courier";

    player = new Player(50, 220, 5, 5, 100, []); // create new Player: me
    monsters = [];
    score = 0;
    ticks = 0;
};


window.onload = function () {
    load();
    setInterval(function() { // each frame
        clear(); // clear old frame
        if (player.health > 0) {
            drawHUD(player.health);
            spawnMonsters(ticks);
            player.tick();
            collisions(player, monsters);
            ticks+=1;
        } else {
            gameOver();
        }
      }, 33); // 33 for new frame every 15 miliseconds
};
