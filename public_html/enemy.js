/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: enemy.js
 * This class is the object representation of the Enemy sprite. This class handles the basic 
 * functionality of movement and if it is killed
 */

class BasicEnemy {
    x = 0.0;
    y = 0.0;
    sprite = null;
    radius = 8;
    isLeft = true;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * This function checks if a sprite is within a hit box of another object/ sprite.
     * player: the sprite that player is operating 
     */
    checkIntersect(player) {
        if ((player.x > this.x - (this.width / 2.0) && player.x < this.x + (this.width / 2.0)) &&
            (player.y > this.y - (this.height / 2.0) && player.y < this.y + (this.height / 2.0)))
        {
            player.kill(this.respawnX, this.respawnY);
            player.x = this.respawnX;
            player.y = this.respawnY;
        }
    }

    /**
     * This function sets the offset of a specific sprite, used for rendering.
     * offsetX: the amount to offset x position 
     * offsetY: the amoutn to offset the y position 
     */
    setOffset(offsetX, offsetY) {
        this.sprite.position.set((32 * this.x) + offsetX - 16 - 16, -(32 * this.y) + offsetY + 16 - tileSize);
    }
    // returns the x location of the sprite
    xLocation(){
        return this.x;
    }

    // returns the y location of the sprite
    yLocation(){ 
        return this.y;
    }
}
/** This class is the object representation of the Level 1 Enemy sprite.
 * This class sets the movement of the sprite and how fast it is moving
 */
class Level1Enemy extends BasicEnemy {

    constructor(x, y) {
        super(x, y);
        this.sprite = new PIXI.Sprite(spritesheet.textures['Enemy 1 Left.png']);
        this.sprite.width = 64;
        this.sprite.height = 64;
    }

    /** moves the level one enemy in a set path from left to right. 
     * The level 1 enemy moves 14 pixels in either direction.
     */
    movement() {
        if (this.x <= 39) {
            this.x += (2 / 10);
            this.isLeft = false;
        } else if (this.x > 39 && this.x < 53 && (this.isLeft != true)) {
            this.x += (2 / 10);
        } else if (this.x > 39 && this.x < 53 && (this.isLeft == true)) {
            this.x -= (1 / 10);
        } else if (this.x >= 53) {
            this.isLeft = true;
            this.x -= (1 / 10);
        }
    }
}

/** This class is the object representation of the Level 2 Enemy sprite.
 * This class sets the movement of the sprite and how fast it is moving
 */
class Level2Enemy extends BasicEnemy {

    constructor(x, y) {
        super(x, y);
        this.sprite = new PIXI.Sprite(spritesheet.textures['Enemy 2 Left.png']);
        this.sprite.width = 64;
        this.sprite.height = 64;
    }
    /** moves the level two enemy in a set path from left to right. 
     * The level 2 enemy moves 20 pixels in either direction.
     */
    movement() {
        if (this.x <= 180 ) {
            this.x += (2 / 10);
            this.isLeft = false;
        } else if (this.x > 180 && this.x < 200 && (this.isLeft != true)) {
            this.x += (2 / 10);

        } else if (this.x > 180 && this.x < 200 && (this.isLeft == true)) {
            this.x -= (2.5 / 10);

        } else if (this.x >= 200) {
            this.isLeft = true;
            this.x -= (2.5 / 10);
        }
    }
}

/** This class is the object representation of the Level 3 Enemy sprite.
 * This class sets the movement of the sprite and how fast it is moving
 */
class Level3Enemy extends BasicEnemy{

    constructor(x,y){
        super(x,y);
        this.sprite = new PIXI.Sprite(spritesheet.textures['Enemy 3 Left.png']);
        this.sprite.width = 64;
        this.sprite.height = 64;
    }

    /** moves the level three enemy in a set path from left to right. 
     * The level 3 enemy moves 20 pixels in either direction.
     */
    movement() {
        if (this.x <= 280) {
            this.x += (1 / 10);
            this.isLeft = false;
        } else if (this.x > 280 && this.x < 300 && (this.isLeft != true)) {
            this.x += (1 / 10);

        } else if (this.x > 5 && this.x < 300 && (this.isLeft == true)) {
            this.x -= (2 / 10);
            //this.y -= (1/10);

        } else if (this.x >= 300) {
            this.isLeft = true;
            this.x -= (2 / 10);
        }
    }
}

