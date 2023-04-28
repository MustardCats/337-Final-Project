
let keys = {};
let prev_keys = {};
let mouse = {};
let prev_mouse = {};
let mouseX = 0;
let mouseY = 0;
const MAXKEYCODES = 256;

for (let i = 0; i < MAXKEYCODES; i++) {
    keys[i] = false;
    prev_keys[i] = false;
}

for (let i = 0; i < 10; i++) {
    mouse[i] = false;
    prev_mouse[i] = false;
}

function keyDown(e) {
    keys[e.keyCode] = true;
}

function keyUp(e) {
    keys[e.keyCode] = false;
}

function mouseDown(e) {
    mouse[e.button] = true;
}

function mouseUp(e) {
    mouse[e.button] = false;
}

function isKeyDown(key) {
    return keys[key.charCodeAt(0)];
}

function isKeyPress(key) {
    return keys[key.charCodeAt(0)] && !prev_keys[key.charCodeAt(0)];
}

function isMousePress(button) {
    return mouse[button] && !prev_mouse[button];
}

function handleInput(renderer, player, deltaTime) {
    if (isKeyDown('A')) {
        player.setMove(-1, 0);
    }
    if (isKeyDown('D')) {
        player.setMove(1, 0);
    }
    if (isKeyDown('S')) {
        player.setMove(0, -1);
    }
    if (isKeyDown('W')) {
        player.setMove(0, 1);
    }
    if (isKeyPress('P')) {
        console.log("Player Pos: " + player.x + " " + player.y);
    }
    if (isKeyPress('F')) {
        player.toggleDebugMode();
    }
    if (isKeyPress('J')) {
        let pos = posToChunk(player.x, player.y);
        let chunk = findChunk(pos[0], pos[1]);
        saveChunk(chunk);
    }
    // debug stuff
    if (player.debugMode) {
        if (isKeyPress('G')) {
            for (let i = 0; i < chunks.length; i++) {
                saveChunk(chunks[i]);
                chunks[i].modified = false;
            }
        }
        if (isMousePress(0)) {
            editTile(mouseX, mouseY);
        }
        if (isKeyPress('0')) {
            debugEditorID = 0;
        }
        if (isKeyPress('1')) {
            debugEditorID = 1;
        }
        if (isKeyPress('2')) {
            debugEditorID = 2;
        }
        if (isKeyPress('3')) {
            debugEditorID = 3;
        }
        if (isKeyPress('4')) {
            debugEditorID = 4;
        }
        if (isKeyPress('5')) {
            debugEditorID = 5;
        }
        if (isKeyPress('6')) {
            debugEditorID = 6;
        }
        if (isKeyPress('7')) {
            debugEditorID = 7;
        }
        if (isKeyPress('8')) {
            debugEditorID = 8;
        }
        if (isKeyPress('9')) {
            debugEditorID = 9;
        }
    }
    // allows single key taps to function
    for (let i = 0; i < MAXKEYCODES; i++) {
        prev_keys[i] = keys[i];
    }
    for (let i = 0; i < 10; i++) {
        prev_mouse[i] = mouse[i];
    }
}