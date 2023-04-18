
class Character {
    x = 0.0;
    y = 0.0;
    sprite = PIXI.Sprite.from("./sprites/test.png");
    moveX = 0;
    moveY = 0;
    radius = 8;

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
        let potentialX = this.x + vectorX;
        let potentialY = this.y + vectorY;
        let tile = findTile(Math.floor(potentialX), Math.floor(potentialY));
        if (tile == 0) {
            this.x = potentialX;
            this.y = potentialY;
            return false;
        }

        return true;
    }

    update(deltaTime) {
        const velocity = 7.0;
        let vectorX = this.moveX * velocity * deltaTime;
        let vectorY = this.moveY * velocity * deltaTime;
        this.checkCollision(vectorX, vectorY);

        this.moveX = 0.0;
        this.moveY = 0.0;
    }

    setOffset(offsetX, offsetY) {
        this.sprite.position.set((16 * this.x) + offsetX, -(16 * this.y) + offsetY);
    }
}