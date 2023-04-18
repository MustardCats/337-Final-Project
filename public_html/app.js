/*
    Added the application.js here. Pixi.js is already installed and linked to the document so it might be good to start designing the level here. 
    I just need to figure out how to hide the application until we need it. Probably through a seperate
    html file. 
    the app.js is linked up at the game.html, so use the game.html to check various application graphics. 
*/

/*
    Below code is for testing purposes, feel free to remove. 
*/
const Application = PIXI.Application;

const app = new Application( {
    width: 500,
    height: 500
});

document.getElementById('gameWindow').appendChild(app.view);

let num = 0;
let deltaTime = 0.0;
let start = Date.now();
let renderer = PIXI.autoDetectRenderer(720, 1280);

let player = new Character(10, 11);

function gameLoop() {
    let end = Date.now();
    deltaTime = (end - start) / 1000.0;
    start = end;

    //console.log("Camera: " + camX + " " + camY + " Player: " + player.x + " " + player.y);
    // input
    handleInput(player, deltaTime);
    // update
    deleteChunks(app, player.x, player.y);
    loadChunks(app, player.x, player.y);
    player.update(deltaTime);
    setCamPos(-(player.x * 16) + 250, (player.y * 16) + 250);
    setLevelCameraOffset(camX, camY);
    player.setOffset(camX, camY);
    // render
    window.requestAnimationFrame(gameLoop);
}

async function startApp() {
    //const test = await PIXI.Assets.load('sprites/test.png');
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    let delta = 0.0;
    startLevel(app);
    app.stage.addChild(player.sprite);
    gameLoop();
}

startApp();
/*
    End of testing code
*/