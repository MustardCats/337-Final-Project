
let camX = 100;
let camY = 100;

function setCamPos(newX, newY) {
    camX = newX;
    camY = newY;
}

function addCamPos(offsetX, offsetY) {
    camX += offsetX;
    camY += offsetY;
}