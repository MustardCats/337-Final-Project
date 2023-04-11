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

document.body.appendChild(app.view);

let num = 0;

function gameLoop() {
    if (isKeyDown('A')) {
        num++;
        console.log(num);
    }
    
    window.requestAnimationFrame(gameLoop);
}

async function startApp() {
    //const test = await PIXI.Assets.load('sprites/test.png');
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    let delta = 0.0;
    startLevel(app);
    gameLoop();
}

startApp();
/*
    End of testing code
*/