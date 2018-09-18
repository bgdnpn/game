spawnMonsters = function(ticks) {
    if ((ticks % 32 + rand(3)) <= 1) {
        for (let i = 0; i <= 2; i++) {
            size = [10,20,30][(rand(4))];// + Math.floor(rand()*10);
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
        } else if (m.x < -25) {
        	player.hp -= m.size/10;
        	m.nullify();
        } else {
            m.tick();
        }
        if ((player.x + 10 >= m.x && player.x + 10 <= m.x + m.size) &&
                (player.y + 10 >= m.y &&  player.y <= m.y + m.size)) {
            player.damage(m.size/2);
            m.nullify();
        };
        player.bullets.forEach(function(b){
            if ((b.x + 3 >= m.x && b.x <= m.x + m.size) &&
                (b.y >= m.y && b.y <= m.y + m.size)) {
                score += m.size;
                b.nullify();
                m.nullify();
            }
        });
    });
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
    ctx.fillText("refresh page to restart", WIDTH/2 - 115 , 30 + HEIGHT/2);
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