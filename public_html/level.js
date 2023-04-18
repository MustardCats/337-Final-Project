let chunks = [];

function createChunk(app, x, y) {
    let new_chunk = new Chunk(x, y);
    new_chunk.loadTiles();
    chunks.push(new_chunk);
    console.log(new_chunk);
    app.stage.addChild(chunks[chunks.length - 1].container);
}

function startLevel(app) {
    createChunk(app, 0, 0);
}

function posToChunk(x, y) {
    return [Math.floor(x / chunkSize), Math.floor(y / chunkSize)];
}

function setLevelCameraOffset(camX, camY) {
    for (let i = 0; i < chunks.length; i++) {
        chunks[i].setOffset(camX, camY);
    }
}

function findChunk(x, y) {
    for (let i = 0; i < chunks.length; i++) {
        if (chunks[i].x == x && chunks[i].y == y) {
            return chunks[i];
        }
    }
    return null;
}

function findTile(x, y) {
    let pos = posToChunk(x, y);
    let chunk = findChunk(pos[0], pos[1]);
    console.log(chunk);
    if (chunk != null)
        return chunk.getTile(x % chunkSize, y % chunkSize);
    return 0;
}