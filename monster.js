// Monster class

class Monster {

    constructor(x, y, size, dx) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.dx = dx;
        this.ticks = 0;
    }

    nullify() {
        this.x = null;
    }

    draw() {
        ctx.fillStyle = "#" + 660033;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    tick() {
        this.x += this.dx;
        this.draw();
        this.ticks +=1;
    }
}
