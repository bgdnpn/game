spawnMonsters = function(ticks) {
    if ((ticks % 32 + rand(3)) <= 1) {
        for (let i = 0; i <= 2; i++) {
            size = [10,20,30][(rand(3))];
            dx = -5 * rand(3);
            m = new Monster(WIDTH + 25*rand(3), 5*rand(HEIGHT) % HEIGHT, size, dx);
            monsters.push(m);
        }
    } 
}

collisions = function(player,monsters) { // stupid name
    monsters.forEach(function(m) {
        if (m.x == null) {
            monsters.splice(monsters.indexOf(m), 1);
        } else if (m.x < 5) {
        	player.health -= m.size/5;
        	m.nullify();
        } else {
            m.tick();
        }
        if (colliding(player, m)) {
            player.damage(m.size/2);
            m.nullify();
        };
        player.bullets.forEach(function(b){
        	if (b.x == null) {
        		player.bullets.splice(player.bullets.indexOf(b), 1);
        	} else if (colliding(m, b)) {
                score += m.size;
                b.nullify();
                m.nullify();
            }
        });
    });
}

colliding = function(obj1, obj2) {
	return (obj1.x + obj1.size >= obj2.x && obj1.x + obj1.size <= obj2.x + obj2.size) &&
                (obj1.y + obj1.size >= obj2.y &&  obj1.y <= obj2.y + obj2.size);
}

drawHUD = function(hp) {
    ctx.fillStyle = "green";
    ctx.fillText("HP -> " + hp, 10, 15);
    ctx.fillStyle = "yellow";
    ctx.fillText("Score -> " + score,10 , 30);
    ctx.fillStyle = "black";
}

gameOver = function() {
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", WIDTH/2 - 50 , HEIGHT/2);
    ctx.fillText("Your score was: " + score, WIDTH/2 - 105 , 30 + HEIGHT/2);
    ctx.fillText("refresh page to restart", WIDTH/2 - 115 , 60 + HEIGHT/2);
    ctx.fillStyle = "black";
}

clear = function() { // redraw background
    ctx.clearRect(0, 0, WIDTH, HEIGHT); // clear background
};

rand = function(x) {
    return Math.floor(x*Math.random());
}

log = function(s) {
	console.log(s);
}