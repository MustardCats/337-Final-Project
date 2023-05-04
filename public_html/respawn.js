/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: respawn.js
 * This class allows the character to respawn if they fall off a level or is hit 
 * by an enemy.
 */

class Respawn {
    width = 2.0;
    height = 2.0;
    x = 0.0;
    y = 0.0;
    respawnX = 0.0;
    respawnY = 0.0;
    isFinish = false;
    sprite = null;

    constructor(x, y, respawnX, respawnY) {
        this.x = x;
        this.y = y;
        this.respawnX = respawnX;
        this.respawnY = respawnY;
        this.sprite = new PIXI.Sprite(spritesheet.textures['door.png']);
        this.sprite.width = 32.0;
        this.sprite.height = 32.0;
    }

    /**
     * This function checks if a sprite is within a hit box of another object/ sprite.
     * player: the sprite that player is operating 
     */
    checkIntersect(player) {
        if ((player.x > this.x - (this.width / 2.0) && player.x < this.x + (this.width / 2.0)) &&
            (player.y > this.y - (this.height / 2.0) && player.y < this.y + (this.height / 2.0))) {
            player.setRespawn(this.respawnX, this.respawnY);
            player.x = this.respawnX;
            player.y = this.respawnY;
            if (this.isFinish) {
                // post

            }
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