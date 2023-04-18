const chunkSize = 8; // number of tiles in each dimension
const tileSize = 16; // number of pixels for each tile
const chunkPixelSize = chunkSize * tileSize; // number of pixels for each chunk

const tileSpriteMappings = new Map([
    [1, "./sprites/test.png"]
]);

class Chunk {
    x = 0;
    y = 0;
    tiles = [];
    container = new PIXI.Container();

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    loadTiles() {
        // test chunk
        for (let i = 0; i < chunkSize * chunkSize; i++) {
            if ((Math.floor(i / chunkSize)) % 5 == 0)
                this.tiles.push(1);
            else {
                this.tiles.push(0);
            }
        }
        for (let i = 0; i < this.tiles.length; i++) {
            // TODO: load sprites in a seperate space
            if (this.tiles[i] == 1) {
                const sprite = PIXI.Sprite.from("./sprites/test.png");
                sprite.position.set((i % chunkSize) * tileSize, -(Math.floor(i / chunkSize)) * tileSize);
                sprite.width = 16;
                sprite.height = 16;
                this.container.addChild(sprite);
            }
        }
    }

    getTile(x, y) {
        return this.tiles[y * chunkSize + x];
    }

    setTile(x, y, id) {
        this.tiles[y * chunkSize + x] = id;
    }

    setOffset(offsetX, offsetY) {
        //console.log("setting offset " + offsetX + " " + offsetY + " for chunk " + x + " " + y);
        this.container.position.set(chunkPixelSize * this.x + offsetX, -chunkPixelSize * this.y + offsetY);
    }
}