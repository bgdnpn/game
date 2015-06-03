// Player class

Player = function(x, y, dx, dy, hp, bullets) {
    this.x = x; this.y = y; // initial x,y positions
    this.dx = dx; this.dy = dy; // initial movement speeds on X an Y axis
    this.hp = hp; // health points - not used yet
    this.bullets = []; // bullets fired by player
    this.ticks = 0; // player age in ticks :))
}

Player.prototype.tick = function() { // what to do for each frame
    if (east) { // east key pressed?
        this.x += this.dx; // go right
    } else if (west) { // west?
        this.x -= this.dx; // go left
    };

    if (north) { // up?
        this.y -= this.dy; // go up
    } else if (this.y < 440) { // gravity
        this.y += this.dy * 2; // twice as fast as going up
    }
    
    if (fire && (this.ticks % 3)) { // should and can fire?
        this.bullets.push(new Bullet(this.x + 5, this.y - 5, west)); // add bullet to array
        this.canFire = 30; // reset delay
    }
    this.ticks += 1;
};

Player.prototype.draw = function() { // how to draw
    this.tick(); // compute tick changes
    ctx.fillStyle = "#DF7401"; // player color
    ctx.fillRect(this.x, this.y, 20, 20); // player position
};
