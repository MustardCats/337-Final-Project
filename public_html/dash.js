/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: growth.js
 * This class represents the dash powerup that the player can pick up 
 * throughout the game. This powerup allows the user to move faster in the left and 
 * right direction.
 */

class dash {
  x = 0;
  y = 0;


  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = new PIXI.Sprite(spritesheet.textures['powerup1.png']);
        this.sprite.width = 32;
        this.sprite.height = 32;
  }

  /**
     * This function checks if the powerup has been picked up 
     * 
     * charX: player's x location 
     * charY: player's y location 
     * 
     * returns true, if the player has picked up the powerup 
     *         false, if the player did not pick up the powerup 
     */
  isActive() {
    if (this.player.xLocation() == this.x && this.player.yLocation() == this.y) {
      console.log("Power Up Acquired");
      return true;
    }
    return false;
  }

  // returns the x location of the sprite
  xLocation() {
    console.log(this.x);
    return this.x;
  }

  // returns the y location of the sprite
  yLocation() {
    console.log(this.y);
    return this.y;
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
