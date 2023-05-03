
// used this site to help me figure out spritesheets :)
// https://pixijs.io/guides/basics/sprite-sheets.html

const atlasData = {
	"frames": {
		"Enemy 1 Left.png": {
			"frame": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"Enemy 1 Right.png": {
			"frame": {
				"x": 32,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"Enemy 2 Left.png": {
			"frame": {
				"x": 64,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"Enemy 2 Right.png": {
			"frame": {
				"x": 96,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"Enemy 3 Left.png": {
			"frame": {
				"x": 128,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"Enemy 3 Right.png": {
			"frame": {
				"x": 160,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"New Shake 1.png": {
			"frame": {
				"x": 192,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"New Shake 2.png": {
			"frame": {
				"x": 224,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"buff kirby left.png": {
			"frame": {
				"x": 256,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"buff kirby right.png": {
			"frame": {
				"x": 288,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"cloud_center.png": {
			"frame": {
				"x": 320,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"cloud_left.png": {
			"frame": {
				"x": 336,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"cloud_right.png": {
			"frame": {
				"x": 352,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"door.png": {
			"frame": {
				"x": 368,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"grass.png": {
			"frame": {
				"x": 384,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"logs.png": {
			"frame": {
				"x": 400,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"moon.png": {
			"frame": {
				"x": 416,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"powerup1.png": {
			"frame": {
				"x": 432,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"powerup2.png": {
			"frame": {
				"x": 464,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"sand.png": {
			"frame": {
				"x": 496,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"shake3.png": {
			"frame": {
				"x": 512,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 32,
				"h": 32
			},
			"sourceSize": {
				"w": 32,
				"h": 32
			}
		},
		"temple_horizontal.png": {
			"frame": {
				"x": 544,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		},
		"temple_vertical.png": {
			"frame": {
				"x": 560,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"rotated": false,
			"trimmed": false,
			"spriteSourceSize": {
				"x": 0,
				"y": 0,
				"w": 16,
				"h": 16
			},
			"sourceSize": {
				"w": 16,
				"h": 16
			}
		}
	},
	"meta": {
		"app": "http://www.codeandweb.com/texturepacker",
		"version": "1.0",
		"image": "spritesheet.png",
		"format": "RGBA8888",
		"size": {
			"w": 576,
			"h": 32
		},
		"scale": "1"
	}
}

const spritesheet = new PIXI.Spritesheet(
    PIXI.BaseTexture.from(atlasData.meta.image),
    atlasData
);

let spritesReady = false;

const tileMappings = {};
tileMappings[1] = 'grass.png';
tileMappings[2] = 'sand.png';
tileMappings[3] = 'logs.png';
tileMappings[4] = 'cloud_left.png';
tileMappings[5] = 'cloud_center.png';
tileMappings[6] = 'cloud_right.png';
tileMappings[7] = 'moon.png';
tileMappings[8] = 'temple_horizontal.png';
tileMappings[9] = 'temple_vertical.png';

spritesheet.parse().then(() => {
    spritesReady = true;
    console.log('loaded sprites');
});

