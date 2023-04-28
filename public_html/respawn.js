
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
        this.sprite = new PIXI.Sprite(spritesheet.textures['kirbyleft']);
    }

    checkIntersect(player) {
        if ((player.x > this.x - (this.width / 2.0) || player.x < this.x + (this.width / 2.0)) &&
            (player.y > this.y - (this.height / 2.0) || player.y < this.y + (this.height / 2.0)))
        {
            player.setRespawn(respawnX, respawnY);
            player.x = this.respawnX;
            player.y = this.respawnY;
        }
    }
}