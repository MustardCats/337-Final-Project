
class Character {
    x = 0.0;
    y = 0.0;
    sprite = PIXI.Sprite.from("./sprites/buff kirby left.png");
    moveX = 0;
    moveY = 0;
    spawnX = 5;
    spawnY = 3;
    radius = 8;
    velocityX = 0.0;
    velocityY = 0.0;
    isGrounded = false;
    debugMode = true;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite.width = 32;
        this.sprite.height = 32;
    }

    setMove(moveX, moveY) {
        if (Math.abs(moveX) == 1)
            this.moveX = moveX;
        if (Math.abs(moveY) == 1)
            this.moveY = moveY;
    }

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

    updateVelocity(deltaTime) {
        const maxVelocityX = 10.0;
        const maxVelocityY = 30.0;
        const accelerationX = 30.0;
        const initialJump = 30.0;
        const gravity = 100.0;

        if (this.moveX < 0) {
            // reset velocity
            if (this.velocityX > 0)
                this.velocityX = 0;
            this.velocityX -= accelerationX * deltaTime;
        }
        if (this.moveX > 0) {
            // reset velocity
            if (this.velocityX < 0)
                this.velocityX = 0;
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

        this.moveX = 0.0;
        this.moveY = 0.0;
    }

    setOffset(offsetX, offsetY) {
        this.sprite.position.set((16 * this.x) + offsetX - 8 - 8, -(16 * this.y) + offsetY + 8 -16);
    }

    setRespawn(x, y) {
        this.spawnX = x;
        this.spawnY = y;
    }
}