/** 
    Added the app here. Pixi.js is already installed and linked to the document so it might be good to start designing the level here. 
    I just need to figure out how to hide the application until we need it. Probably through a seperate
    html file. 
    the app.js is linked up at the game.html, so use the game.html to check various application graphics. 
*/
const Application = PIXI.Application;

const app = new Application( {
    width: 750,
    height: 500
});




let num = 0;
let deltaTime = 0.0;
let start = Date.now();
let score = 0.0;
let maxTime = 600;
let renderer = PIXI.autoDetectRenderer(app.width, app.height, {
    transparent: true
});
addBackground();

let player = null;
let enemy1 = null;

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

    player = new Character(5, 3);
    //enemy1 = new Level1Enemy(40, 14.2);
    // enemy2 = new Level2Enemy();
    // enemy3 = new Level3Enemy();
    //app.stage.addChild("./pageImages/bluesea.png");
    app.stage.addChild(player.sprite);
    //await addBackground();
    for (let i = 0; i < respawns.length; i++) {
        app.stage.addChild(respawns[i].sprite);
    }

    gameLoop();
}

/**
 * Where you can change the background image of the canvas
 */
function addBackground() {
      var image = PIXI.Sprite.from('pageImages/bluesea.png');
      app.stage.addChild(image);
}

function calcScore() {
    if (score > maxTime) {
        score = 1000;
    } else {
        score += (deltaTime * 100);
    }
}
