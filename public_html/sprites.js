
// used this site to help me figure out spritesheets :)
// https://pixijs.io/guides/basics/sprite-sheets.html

const atlasData = {
    frames: {
        enemy1left{
            frame: { x: 0, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        enemy1right{
            frame: { x: 32, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        enemy2left{
            frame: { x: 64, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        powerup2: {
            frame: { x: 96, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        enemy2right{
            frame: { x: 0, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        enemy3left{
            frame: { x: 32, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        enemy3right{
            frame: { x: 64, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        powerup1: {
            frame: { x: 96, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        kirbyleft: {
            frame: { x: 0, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        kirbyright: {
            frame: { x: 32, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        grass: {
            frame: { x: 64, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        shake1{
            frame: { x: 96, y: 64, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },

        shake2{
            frame: { x: 0, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        shake3{
            frame: { x: 32, y: 96, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        }
    },
    meta: {
        image: 'sprites/new_spritesheet.png',
        format: 'RGBA8888',
        size: { w: 128, h: 128 },
        scale: 1
    }
}

const spritesheet = new PIXI.Spritesheet(
    PIXI.BaseTexture.from(atlasData.meta.image),
    atlasData
);

let spritesReady = false;

const tileMappings = {};
tileMappings[1] = 'grass';
tileMappings[2] = 'dirt';

spritesheet.parse().then(() => {
    spritesReady = true;
    console.log('loaded sprites');
});

