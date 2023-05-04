/** 
    Added the app here. Pixi.js is already installed and linked to the document so it might be good to start designing the level here. 
    I just need to figure out how to hide the application until we need it. Probably through a seperate
    html file. 
    the app.js is linked up at the game.html, so use the game.html to check various application graphics. 
*/
const Application = PIXI.Application;

// creates the canvas
const app = new Application( {
    width: 750,
    height: 500
});

let num = 0;
let deltaTime = 0.0;
let start = Date.now();
let score = 0.0;
let maxTime = 600;
let renderer = PIXI.autoDetectRenderer(app.width, app.height);
let player = null;
let enemy1 = null;
let enemy2 = null; 
let enemy3 = null;
let shake1 = null;
let shake2 = null;
let shake3 = null;

/**  main game loop: 
 * this redraws the canvas
 * 
 */
function gameLoop() {
    // time
    let end = Date.now();
    deltaTime = (end - start) / 1000.0;
    start = end;
    // input
    handleInput(renderer, player, deltaTime);
    // update
    deleteChunks(app, player.x, player.y);
    loadChunks(app, camX, camY, player.x, player.y);
    player.update(deltaTime);
    setCamPos(-(player.x * 32) + 375, (player.y * 32) + 250);
    setLevelCameraOffset(camX, camY);
    player.setOffset(camX, camY);
    enemy1.setOffset(camX, camY);
    enemy1.movement(deltaTime);
    enemy2.setOffset(camX, camY);
    enemy2.movement(deltaTime);
    enemy3.setOffset(camX, camY);
    enemy3.movement(deltaTime);
    
    // render
    window.requestAnimationFrame(gameLoop);
}
/**
 * Function to start the PIXI.js application, handles
 * adding it to the DOM as well as starts up and applies other
 * js and event listeners.
 */
async function startApp() {
    document.getElementById('playGameButton').style.display = "none";
    //Add game to gameWindow on document
    document.getElementById('gameWindow').appendChild(app.view);
    //const test = await PIXI.Assets.load('sprites/test.png');
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    app.renderer.view.onmousemove = function mouseMove(e) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }
    let delta = 0.0;

    // adds sprites to the stage
    player = new Character(6, 10);
    enemy1 = new Level1Enemy(40, 13);
    enemy2 = new Level2Enemy(5,7);
    enemy3 = new Level3Enemy(6,8);
    app.stage.addChild(player.sprite);
    app.stage.addChild(enemy1.sprite);
    app.stage.addChild(enemy2.sprite);
    app.stage.addChild(enemy3.sprite);
    for (let i = 0; i < respawns.length; i++) {
        app.stage.addChild(respawns[i].sprite);
    }

    gameLoop();
}
/**
 * This method calculates the player's score based on the time it 
 * took the player to get through the game.
 */
function calcScore() {
    if (score > maxTime) {
        score = 1000;
    } else {
        score += (deltaTime * 100);
    }
}
