/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: character.js
 * 
 * This class represents the sprite that the player uses. This file handles the functionality of 
 * the player, including movement, respawning and interaction with other objects in the game
 */
class Character {
    x = 0.0;
    y = 0.0;
    sprite = null;
    moveX = 0;
    moveY = 0;
    spawnX = 5;
    spawnY = 3;
    radius = 8;
    velocityX = 0.0;
    velocityY = 0.0;
    isGrounded = false;
    debugMode = false;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = new PIXI.Sprite(spritesheet.textures['buff kirby left.png']);
        this.sprite.width = 64;
        this.sprite.height = 64;
    }

    /**
     * This function sets the position of the sprite, used for moving the sprite.
     * moveX: amount to move sprite in x direction 
     * movey: amount to move sprite in y direction
     */
    setMove(moveX, moveY) {
        if (Math.abs(moveX) == 1)
            this.moveX = moveX;
        if (Math.abs(moveY) == 1)
            this.moveY = moveY;
    }

    /**
     * This function checks if the player has hit another object in the game.
     * vectorX: 
     * vectorY: 
     */
    checkCollision(vectorX, vectorY) {
        this.isGrounded = false;
        let potentialX = this.x + vectorX;
        let potentialY = this.y + vectorY;
        let tile = findTile(Math.floor(potentialX), Math.floor(potentialY));
        // skip checks
        if (tile == null || tile == 0) {
            this.x = potentialX;
            this.y = potentialY;
            return false;
        }
        // check X
        potentialY = this.y;
        tile = findTile(Math.floor(potentialX), Math.floor(potentialY));
        if (tile == 0) {
            this.x = potentialX;
        }
        potentialY = this.y + vectorY;
        // check Y
        potentialX = this.x;
        tile = findTile(Math.floor(potentialX), Math.floor(potentialY));
        if (tile == 0) {
            this.y = potentialY;
        }
        else if (vectorY < 0) {
            this.isGrounded = true;
        }

        return true;
    }

    /**
     * This function changes the players velocity.
     * deltaTime: 
     */
    updateVelocity(deltaTime) {
        const maxVelocityX = 10.0;
        const maxVelocityY = 30.0;
        const accelerationX = 30.0;
        const initialJump = 18.0;
        const gravity = 50.0;
        const initalMovement = 5.0;

        if (this.isGrounded) {
            this.velocityY = 0;
        }
        if (this.moveX < 0) {
            // reset velocity
            if (this.velocityX >= 0)
                this.velocityX = -initalMovement;
            this.velocityX -= accelerationX * deltaTime;
        }
        if (this.moveX > 0) {
            // reset velocity
            if (this.velocityX <= 0)
                this.velocityX = initalMovement;
            this.velocityX += accelerationX * deltaTime;
        }
        if (this.moveY > 0) {
            if (this.isGrounded) {
                this.velocityY = initialJump;
            }
        }
        if (!this.isGrounded) {
            this.velocityY -= gravity * deltaTime;
            if (Math.abs(this.velocityY) > maxVelocityY) {
                if (this.velocityY < 0)
                    this.velocityY = -maxVelocityY;
            }
        }
        
        if (this.moveX == 0) {
            this.velocityX = 0;
        }
        // cap horizontal speed
        if (this.velocityX > maxVelocityX) {
            this.velocityX = maxVelocityX;
        }
        if (this.velocityX < -maxVelocityX) {
            this.velocityX = -maxVelocityX;
        }
        this.checkCollision(this.velocityX * deltaTime, this.velocityY * deltaTime);
    }

    toggleDebugMode() {
        if (this.debugMode) {
            this.debugMode = false;
        }
        else {
            this.debugMode = true;
        }
    }

    debugVelocity (deltaTime) {
        this.x += this.moveX * 10.0 * deltaTime;
        this.y += this.moveY * 10.0 * deltaTime;
    }

    kill() {
        this.x = this.spawnX;
        this.y = this.spawnY;
        this.velocityX = 0.0;
        this.velocityY = 0.0;
    }

    update(deltaTime) {
        if (!this.debugMode) {
            this.updateVelocity(deltaTime);
            // check if dead :(
            if (this.y < 0) {
                this.kill();
            }
        }
        else
            this.debugVelocity(deltaTime);
        for (let i = 0; i < respawns.length; i++) {
            respawns[i].checkIntersect(this);
        }

        this.moveX = 0.0;
        this.moveY = 0.0;
    }

    /**
     * This function sets the offset of a specific sprite, used for rendering.
     * offsetX: the amount to offset x position 
     * offsetY: the amount to offset the y position 
     */
    setOffset(offsetX, offsetY) {
        this.sprite.position.set((32 * this.x) + offsetX - 16 - 16, -(32 * this.y) + offsetY + 16 -tileSize);
    }

    /**
     * This function sets the location of a specific sprite when respawning.
     * x: x location of the sprite
     * y: y location of the sprite
     */
    setRespawn(x, y) {
        this.spawnX = x;
        this.spawnY = y;
    }

    // returns the x location of the sprite
    xLocation(){ 
        return this.x;
    }

    // returns the y location of the sprite
    yLocation(){ 
        return this.y;
    }

    // sets the height of the player sprite
    setSpriteheight(newHeight){
        this.sprite.height = newHeight;
    }

    // sets the width of the player sprite
    setSpritewidth(newWidth){ 
        this.sprite.width = newWidth;
    }
}