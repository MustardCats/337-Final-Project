let chunks = [];

function createChunk(x, y) {
    let new_chunk = new Chunk(x, y);
    new_chunk.loadTiles();
    chunks.push(new_chunk);
    console.log(new_chunk);
}

function startLevel() {
    createChunk(0, 0);
    app.stage.addChild(chunks[chunks.length - 1].container);
}