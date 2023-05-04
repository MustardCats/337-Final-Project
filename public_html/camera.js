/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: camera.js
 * This class is the object representation of the camera. 
 */

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