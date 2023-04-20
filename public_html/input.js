
let keys = {};
let prev_keys = {};
const MAXKEYCODES = 256;

for (let i = 0; i < MAXKEYCODES; i++) {
    keys[i] = false;
    prev_keys[i] = false;
}

function keyDown(e) {
    keys[e.keyCode] = true;
    if (keys[e.keyCode] && !prev_keys[e.keyCode]) {
        console.log('tap');
    }
}

function keyUp(e) {
    keys[e.keyCode] = false;
}

function isKeyDown(key) {
    return keys[key.charCodeAt(0)];
}

function isKeyPress(key) {
    return keys[key.charCodeAt(0)] && !prev_keys[key.charCodeAt(0)];
}

function handleInput(player, deltaTime) {
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

    // allows single key taps to function
    for (let i = 0; i < MAXKEYCODES; i++) {
        prev_keys[i] = keys[i];
    }
}