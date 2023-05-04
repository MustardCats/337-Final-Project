/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: camera.js
 * This class is the object representation of the camera. 
 * Aids in rendering the game.
 */

let camX = 100;
let camY = 100;

/**
* This function sets the camera position used for rendering.
* newX: the new x location for the camera
* newY: the new y location for the camera
*/
function setCamPos(newX, newY) {
    camX = newX;
    camY = newY;
}

/**
 * This function changes the camera position based on the offset, used for rendering.
 * offsetX: the amount to offset x position 
 * offsetY: the amount to offset the y position 
 */
function addCamPos(offsetX, offsetY) {
    camX += offsetX;
    camY += offsetY;
}