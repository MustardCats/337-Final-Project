
const hostname = '127.0.0.1/';
const port = '3000';
const levelRadius = 2;
let chunks = [];
let chunksToLoad = [];
let oldChunkPos = [-1, -1];
let debugEditorID = 1;

function createChunk(app, x, y) {
    let new_chunk = new Chunk(x, y);
    chunks.push(new_chunk);
    for (let i = 0; i < chunkSize * chunkSize; i++) {
        chunks[chunks.length - 1].tiles.push(0)
    }
    app.stage.addChild(chunks[chunks.length - 1].container);
}

async function loadChunk(app, x, y) {
    let result = await fetch('/loadchunk/' + x + '/' + y, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
        .then((response) => {
            if (JSON.stringify(response) != '{}') {
                return response;
            }
            else {
                return "";
            }
        });
    return result;
}

async function saveChunk(chunk) {
    let basicChunk = new BasicChunk();
    basicChunk.x = chunk.x;
    basicChunk.y = chunk.y;
    basicChunk.tiles = chunk.tiles;
    // not modified anymore
    fetch('/savechunk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(basicChunk)
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
        //console.log(chunksToLoad);
    }
    else if (chunksToLoad.length > 0) {
        let newChunkPos = chunksToLoad.shift();
        
        loadChunk(app, newChunkPos[0], newChunkPos[1])
            .then((response) => { 
                if (response != "") {
                    resJSON = JSON.parse(response);
                    let newChunk = new Chunk(resJSON.x, resJSON.y);
                    chunks.push(newChunk);
                    for (let i = 0; i < chunkSize * chunkSize; i++) {
                        chunks[chunks.length - 1].tiles.push(resJSON.tiles[i]);
                    }
                    chunks[chunks.length - 1].loadTileSprites();
                    app.stage.addChild(chunks[chunks.length - 1].container);
                }
                else {
                    createChunk(app, newChunkPos[0], newChunkPos[1]);
                }
            });
    }
}

function deleteChunks(app, playerX, playerY) {
    let chunkPos = posToChunk(playerX, playerY);
    if (chunkPos[0] != oldChunkPos[0] || chunkPos[1] != oldChunkPos[1]) {
        for (let i = 0; i < chunks.length; i++) {
            if (Math.abs(chunks[i].x - chunkPos[0]) > (levelRadius + 1) ||
                Math.abs(chunks[i].y - chunkPos[1]) > (levelRadius + 1))
            {
                console.log('deleting chunk ' + chunks[i].x + ' ' + chunks[i].y);
                app.stage.removeChild(chunks[i].container);
                if (chunks[i].modified) {
                    saveChunk(chunks[i]).then(() => {
                        chunks.splice(i, 1);
                    });
                }
                else {
                    chunks.splice(i, 1);
                }
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

function mouseToPos(mouseX, mouseY) {
    let posX = (-camX + mouseX) / tileSize;
    let posY = (camY - mouseY) / tileSize;
    posX = Math.floor(posX);
    posY = Math.ceil(posY);
    
    return [posX, posY];
}

function editTile(mouseX, mouseY) {
    let tilePos = mouseToPos(mouseX, mouseY);
    let chunkPos = posToChunk(tilePos[0], tilePos[1]);
    let chunk = findChunk(chunkPos[0], chunkPos[1]);
    if (chunk != null) {
        chunk.setTile(tilePos[0] % chunkSize, tilePos[1] % chunkSize, debugEditorID);
    }
}