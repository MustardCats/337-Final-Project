
const chunkSize = 8; // number of tiles in each dimension
const tileSize = 16; // number of pixels for each tile

const tileSpriteMappings = new Map([
    [1, "./sprites/test.png"]
]);



class Chunk {
    x = 0;
    y = 0;
    tiles = [];
    container = new PIXI.Container();
    constructor(x, y) {
        x = x;
        y = y;
    }

    loadTiles() {
        console.log('ear');
        // test chunk
        for (let i = 0; i < chunkSize * chunkSize; i++) {
            this.tiles.push(1);
        }
        for (let i = 0; i < this.tiles.length; i++) {
            //let sprite = PIXI.Sprite.from(tileSpriteMappings.get(1));
            const sprite = PIXI.Sprite.from("./sprites/test.png");
            sprite.position.set((i % chunkSize) * tileSize, (Math.floor(i / chunkSize)) * tileSize);
            this.container.addChild(sprite);
        }
    }

    getTile(x, y) {
        return this.tiles[y * chunkSize + x];
    }

    setTile(x, y, id) {
        this.tiles[y * chunkSize + x] = id;
    }
}