
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

function handleInput() {
    if (isKeyPress('A')) {
        character.move(-1, 0);
    }
}