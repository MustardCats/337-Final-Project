const chunkSize = 8; // number of tiles in each dimension
const tileSize = 16; // number of pixels for each tile
const chunkPixelSize = chunkSize * tileSize; // number of pixels for each chunk

const tileSpriteMappings = new Map([
    [1, "./sprites/test.png"]
]);

class BasicChunk {
    x = 0;
    y = 0;
    tiles = [];
    modified = false;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tiles = [];
        this.modified = false;
    }
}

class Chunk extends BasicChunk {
    container = new PIXI.Container();
    sprites = new Map();

    reloadSprite(index) {
        if (this.tiles[index] == 0) {
            return;
        }
        let sprite = null;
        sprite = new PIXI.Sprite(spritesheet.textures[tileMappings[this.tiles[index]]]);
        if (sprite != null) {
            sprite.position.set((index % chunkSize) * tileSize, -(Math.floor(index / chunkSize)) * tileSize);
            sprite.width = tileSize;
            sprite.height = tileSize;
            this.container.addChild(sprite);
            this.sprites[index] = sprite;
        }
    }

    loadTileSprites() {
        for (let i = 0; i < this.tiles.length; i++) {
            this.reloadSprite(i);
        }
    }

    getTile(x, y) {
        return this.tiles[y * chunkSize + x];
    }

    setTile(x, y, id) {
        let old = this.tiles[y * chunkSize + x];
        this.tiles[y * chunkSize + x] = id;
        if (old > 0) {
            this.container.removeChild(this.sprites[(y * chunkSize + x)]);
            this.sprites.delete(y * chunkSize + x);
        }
        this.reloadSprite(y * chunkSize + x);
        this.modified = true;
    }

    setOffset(offsetX, offsetY) {
        //console.log("setting offset " + offsetX + " " + offsetY + " for chunk " + x + " " + y);
        this.container.position.set(chunkPixelSize * this.x + offsetX, -chunkPixelSize * this.y + offsetY);
    }
}