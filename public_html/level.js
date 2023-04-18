
const hostname = '127.0.0.1/';
const port = '3000';
const levelRadius = 2;
let chunks = [];
let chunksToLoad = [];
let oldChunkPos = [-1, -1];

function createChunk(app, x, y) {
    let new_chunk = new Chunk(x, y);
    new_chunk.loadTiles();
    chunks.push(new_chunk);
    app.stage.addChild(chunks[chunks.length - 1].container);
}

async function loadChunk(x, y) {
    fetch(hostname + port + '/loadchunk/' + x + '/' + y, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((data) => {
            return data.json();
        })
        .then((chunk) => {
            chunks.push(chunk);
            new_chunk.loadTiles();
            app.stage.addChild(chunks[chunks.length - 1].container);
        });
}

async function saveChunk(chunk) {
    fetch(hostname + port + '/savechunk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(chunk)
    });
}

function loadChunks(app, playerX, playerY) {
    let chunkPos = posToChunk(playerX, playerY);
    if (chunkPos[0] != oldChunkPos[0] || chunkPos[1] != oldChunkPos[1]) {
        oldChunkPos = chunkPos;
        // search for new chunks
        for (let x = chunkPos[0] - levelRadius; x <= chunkPos[0] + levelRadius; x++) {
            for (let y = chunkPos[1] - levelRadius; y <= chunkPos[1] + levelRadius; y++) {
                // no chunks below 0
                if (x < 0 || y < 0)
                    continue;
                if (findChunk(x, y) == null) {
                    chunksToLoad.push([x, y]);
                }
            }
        }
        console.log(chunksToLoad);
    }
    else if (chunksToLoad.length > 0) {
        let newChunkPos = chunksToLoad.shift();
        /*
        loadChunk(x, y)
            .then(() => {
                if (findChunk(x, y) == null)
                    createChunk(app, x, y);
            });
            */
        createChunk(app, newChunkPos[0], newChunkPos[1]);
    }
}

function deleteChunks(app, playerX, playerY) {
    let chunkPos = posToChunk(playerX, playerY);
    if (chunkPos[0] != oldChunkPos[0] || chunkPos[1] != oldChunkPos[1]) {
        for (let i = 0; i < chunks.length; i++) {
            if (Math.abs(chunks[i].x - chunkPos[0]) > (levelRadius + 1) * chunkSize ||
                Math.abs(chunks[i].y - chunkPos[1]) > (levelRadius + 1) * chunkSize)
            {
                console.log('deleting chunk ' + chunks[i].x + ' ' + chunks[i].y);
                console.log(chunkPos);
                app.stage.removeChild(chunks[i].container);
                chunks.splice(i, 1);
            }
        }
    }
}

function startLevel(app) {
    createChunk(app, 0, 0);
    createChunk(app, 1, 1);
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
    if (chunk != null)
        return chunk.getTile(x % chunkSize, y % chunkSize);
    return 0;
}