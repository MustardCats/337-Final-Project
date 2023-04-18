
let keys = {};
let prev_keys = {};

function keyDown(e) {
    prev_keys[e.keyCode] = keys[e.keyCode];
    keys[e.keyCode] = true;
}

function keyUp(e) {
    prev_keys[e.keyCode] = keys[e.keyCode];
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
}