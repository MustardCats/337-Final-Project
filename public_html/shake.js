/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: shake.js
 * This class represents the different game objects that the player can encounter/ use 
 * throughout the game.
 */
class shake {
    x = 0.0;
    y = 0.0;
    sprite = null;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = new PIXI.Sprite(spritesheet.textures['New Shake 2.png']);
        this.sprite.width = 64;
        this.sprite.height = 64;
    }

    // returns the x location of the sprite
    xLocation() {
        return this.x;
    }

    // returns the x location of the sprite
    yLocation() {
        return this.y;
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
     * offsetY: the amount to offset the y position 
     */
    setOffset(offsetX, offsetY) {
        this.sprite.position.set((32 * this.x) + offsetX - 16 - 16, -(32 * this.y) + offsetY + 16 - tileSize);
    }
}