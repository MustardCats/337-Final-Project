
// used this site to help me figure out spritesheets :)
// https://pixijs.io/guides/basics/sprite-sheets.html

const atlasData = {
    frames: {
        kirbyleft: {
            frame: { x: 0, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        kirbyright: {
            frame: { x: 32, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        powerup1: {
            frame: { x: 64, y: 0, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        grass: {
            frame: { x: 0, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        },
        powerup2: {
            frame: { x: 32, y: 32, w: 32, h: 32 },
            sourceSize: { w: 32, h: 32 },
            spriteSourceSize: { x: 0, y: 0, w: 32, h: 32 }
        }
    },
    meta: {
        image: 'sprites/spritesheet.png',
        format: 'RGBA8888',
        size: { w: 96, h: 64 },
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

