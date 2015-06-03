// Bullet class

Bullet = function(x, y, direction) {
    this.x = x;
    this.y = y;
    this.dx = direction && west ? -10 : 10;// facing west means shooting west
                                           // otherwise east (default)
}

Bullet.prototype.draw = function() {
    this.tick();
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, 3, 3);
};

Bullet.prototype.tick = function() {
    this.x += this.dx;
}

