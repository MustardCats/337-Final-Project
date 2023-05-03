/** 
 * This class is the object representation of the Enemy sprite. This class handles the basic 
 * functionality of movement and if it is killed.
 */

class BasicEnemy {
    x = 0.0;
    y = 0.0;
    sprite = null;
    spawnX = 5;
    spawnY = 3;
    radius = 8;
    isLeft = true;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    kill() {
        this.x = this.spawnX;
        this.y = this.spawnY;
        this.velocityX = 0.0;
        this.velocityY = 0.0;
    }

    setOffset(offsetX, offsetY) {
        this.sprite.position.set((32 * this.x) + offsetX - 16 - 16, -(32 * this.y) + offsetY + 16 - tileSize);
    }

    xLocation(){
        return this.x;
    }

    yLocation(){ 
        return this.y;
    }
}

class Level1Enemy extends BasicEnemy {

    constructor(x, y) {
        super(x, y);
        this.sprite = new PIXI.Sprite(spritesheet.textures['Enemy 1 Left.png']);
        this.sprite.width = 64;
        this.sprite.height = 64;
    }

    /** moves the level one enemy in a set path from left to right. 
     * The level 1 enemy moves 5 pixels in either direction.
     */
    movement() {
        if (this.x <= 38) {
            this.x += (2 / 10);
            this.isLeft = false;
        } else if (this.x > 38 && this.x < 53 && (this.isLeft != true)) {
            this.x += (2 / 10);
        } else if (this.x > 38 && this.x < 53 && (this.isLeft == true)) {
            this.x -= (1 / 10);
        } else if (this.x >= 53) {
            this.isLeft = true;
            this.x -= (1 / 10);
        }
    }
}

class Level2Enemy extends BasicEnemy {

    constructor(x, y) {
        super(x, y);
        this.sprite = new PIXI.Sprite(spritesheet.textures['Enemy 2 Left.png']);
        this.sprite.width = 64;
        this.sprite.height = 64;
    }
    /** moves the level 2 enemy in a set path in the shape of a rectangle. */
    movement() {
        if (this.x <= 5) {
            this.x += (2 / 10);
            this.y += 2;
            this.isLeft = false;
        } else if (this.x > 5 && this.x < 15 && (this.isLeft != true)) {
            this.x += (2 / 10);

        } else if (this.x > 5 && this.x < 15 && (this.isLeft == true)) {
            this.x -= (2.5 / 10);
            //this.y -= (1/10);

        } else if (this.x >= 15) {
            this.isLeft = true;
            this.x -= (2.5 / 10);
            this.y -= 2;
        }
    }
}


class Level3Enemy extends BasicEnemy{

    constructor(x,y){
        super(x,y);
        this.sprite = new PIXI.Sprite(spritesheet.textures['Enemy 3 Left.png']);
        this.sprite.width = 64;
        this.sprite.height = 64;
    }

    movement() {
        if (this.x <= 5) {
            this.x += (2 / 10);
            this.y += 3;
            this.isLeft = false;
        } else if (this.x > 5 && this.x < 15 && (this.isLeft != true)) {
            this.x += (2 / 10);

        } else if (this.x > 5 && this.x < 15 && (this.isLeft == true)) {
            this.x -= (2.5 / 10);
            //this.y -= (1/10);

        } else if (this.x >= 15) {
            this.isLeft = true;
            this.x -= (2.5 / 10);
            this.y -= 3;
        }
    }
}

