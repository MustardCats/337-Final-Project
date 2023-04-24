/** 
    Added the app here. Pixi.js is already installed and linked to the document so it might be good to start designing the level here. 
    I just need to figure out how to hide the application until we need it. Probably through a seperate
    html file. 
    the app.js is linked up at the game.html, so use the game.html to check various application graphics. 
*/
/** 
 *  Below code is for testing purposes, feel free to remove. 
*/
const Application = PIXI.Application;

const app = new Application( {
    width: 750,
    height: 500
});

document.getElementById('gameWindow').appendChild(app.view);

let num = 0;
let deltaTime = 0.0;
let start = Date.now();
let renderer = PIXI.autoDetectRenderer(app.width, app.height);

let player = new Character(0, 0);

function gameLoop() {
    // time
    let end = Date.now();
    deltaTime = (end - start) / 1000.0;
    start = end;
    // input
    handleInput(renderer, player, deltaTime);
    // update
    deleteChunks(app, player.x, player.y);
    loadChunks(app, player.x, player.y);
    player.update(deltaTime);
    setCamPos(-(player.x * 16) + 375, (player.y * 16) + 250);
    setLevelCameraOffset(camX, camY);
    player.setOffset(camX, camY);
    
    // render
    window.requestAnimationFrame(gameLoop);
}

async function startApp() {
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
    //startLevel(app);
    app.stage.addChild(player.sprite);
    gameLoop();
}

startApp();
/** 
 * End of testing code
*/