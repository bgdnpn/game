// Player class

class Player {

    constructor(x, y, dx, dy, hp, bullets) {
        this.x = x; this.y = y; // initial x,y positions
        this.dx = dx; this.dy = dy; // initial movement speeds on X an Y axis
        this.health = hp; // health points - not used yet
        this.bullets = []; // bullets fired by player
        this.ticks = 0; // player age in ticks :))
    }

    damage(d) {
        this.health -= d;
    }

    tick() { // what to do for each frame
        if (east) { // east key pressed?
            this.x += this.dx; // go right
        } else if (west) { // west?
            this.x -= this.dx; // go left
        };
        if (north) { // up?
            this.y -= this.dy; // go up
        } else if (south) {
            this.y += this.dy;
        }
        
        if (fire) { // should and can fire? -> (this.ticks % 3  == 0)
            this.bullets.push(new Bullet(this.x, this.y, west)); // add bullet to array
        }
        this.draw();
        this.ticks += 1;
    }

    draw() { // how to draw
        this.manageBullets();
        if(this.ticks % 3 <= 1) {
            ctx.fillStyle = "red";
            ctx.fillRect(this.x-5, this.y-5, 3, 3); // player position    
        }
        ctx.fillStyle = "gold";
        ctx.fillRect(this.x, this.y, 20, 10);
    }

    manageBullets() {
        this.bullets.forEach(function(b) {
            if (b.outOfScreen()) {
                b.nullify();
            } else { // bullet is still on the screen
                b.tick(); // draw it (at computed position)
            };
        });
    }
}

