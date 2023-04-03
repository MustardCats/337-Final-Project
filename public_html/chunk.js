
const chunkSize = 8;

class Chunk {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tiles = [];
        this.tileSprites = [];
    }

    loadTiles() {

    }

    getTile(x, y) {
        return tiles[y * chunkSize + x];
    }

    setTile(x, y, id) {
        tiles[y * chunkSize + x] = id;
    }
}