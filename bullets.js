// Bullet class

class Bullet {

	constructor(x, y, direction) {
	    this.x = x + 25;
	    this.y = y + 5;
	    this.dx = direction && west ? -5 : 5;// facing west means shooting west
	                                           // otherwise east (default)
	}

	outOfScreen() {
		return this.x > WIDTH;
	}

	nullify() {
        this.x = null;
    }

	draw() {
	    ctx.fillStyle = "orange";
	    ctx.fillRect(this.x, this.y, 3, 1);
	};

	tick() {
		this.draw();
    	this.x += this.dx;
	}
}
