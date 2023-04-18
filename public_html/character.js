
class Character {
    x = 0.0;
    y = 0.0;
    sprite = PIXI.Sprite.from("./sprites/test.png");
    moveX = 0;
    moveY = 0;
    radius = 8;
    velocityX = 0.0;
    velocityY = 0.0;
    isGrounded = true;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite.width = 16;
        this.sprite.height = 16;
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
        if (tile == 0) {
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
        const maxVelocityY = 12.0;
        const accelerationX = 8.0;
        const initialJump = 8.0;
        const gravity = 12.0;

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
                this.velocityY += gravity * deltaTime;
            }
        }
        if (this.moveX == 0) {
            this.velocityX = 0;
        }
        this.checkCollision(this.velocityX * deltaTime, this.velocityY * deltaTime);
    }

    update(deltaTime) {
        this.updateVelocity(deltaTime);

        this.moveX = 0.0;
        this.moveY = 0.0;
    }

    setOffset(offsetX, offsetY) {
        this.sprite.position.set((16 * this.x) + offsetX - 8, -(16 * this.y) + offsetY + 8);
    }
}