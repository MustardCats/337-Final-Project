/** 
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: app.js
 * 
 * Added the app here. Pixi.js is already installed and linked to the document so it might be good to start designing the level here. 
 * I just need to figure out how to hide the application until we need it. Probably through a seperate
 * html file. 
 * the app.js is linked up at the game.html, so use the game.html to check various application graphics.
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
let totalTime = 0.0;
let renderer = PIXI.autoDetectRenderer(app.width, app.height, {
    transparent: true
});
addBackground();

let player = null;
let enemy1 = null;
let enemy2 = null; 
let enemy3 = null;
let shake1 = null;
let shake2 = null;
let shake3 = null;
let lev1power = null;
let lev1powerDash = null;
let lev2power = null;
let lev2powerDash = null;
let lev3power = null;
let lev3powerDash = null;

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

    shake1.setOffset(camX,camY);
    shake2.setOffset(camX,camY);
    shake3.setOffset(camX,camY);

    lev1power.setOffset(camX,camY);
    lev1powerDash.setOffset(camX,camY);
    lev2power.setOffset(camX,camY);
    lev2powerDash.setOffset(camX,camY);
    lev3power.setOffset(camX,camY);
    lev3powerDash.setOffset(camX,camY);


    totalTime += deltaTime;
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
    enemy2 = new Level2Enemy(185,4);
    enemy3 = new Level3Enemy(300,3);
    shake1 = new shake(75,2);
    shake2 = new shake(161,11);
    shake3 = new shake(248,6);

    lev1power = new growth(19, 5);
    lev1powerDash = new dash(55, 11);
    lev2power = new growth(180, 4);
    lev2powerDash = new dash(140, 4);
    lev3power = new growth(228, 7);
    lev3powerDash = new dash(288, 3);

    app.stage.addChild(player.sprite);
    app.stage.addChild(enemy1.sprite);
    app.stage.addChild(enemy2.sprite);
    app.stage.addChild(enemy3.sprite);
    app.stage.addChild(shake1.sprite);
    app.stage.addChild(shake2.sprite);
    app.stage.addChild(shake3.sprite);
    
    app.stage.addChild(lev1power.sprite);
    app.stage.addChild(lev1powerDash.sprite);
    app.stage.addChild(lev2power.sprite);
    app.stage.addChild(lev2powerDash.sprite);
    app.stage.addChild(lev3power.sprite);
    app.stage.addChild(lev3powerDash.sprite);
    for (let i = 0; i < respawns.length; i++) {
        app.stage.addChild(respawns[i].sprite);
    }

    gameLoop();
}

/**
 * Where you can change the background image of the canvas
 */
function addBackground() {
      var image = PIXI.Sprite.from('pageImages/clouds.png');
      app.stage.addChild(image);
}
/**
 * This method calculates the player's score based on the time it 
 * took the player to get through the game.
 */
function calcScore() { {}
    if (totalTime > maxTime) {
        return 0;
    }
    return totalTime;
}
