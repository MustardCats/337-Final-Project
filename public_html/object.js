/**
 * Author: Patrick Comden, Patrick Hsu, and Caitlin Wong 
 * File Name: object.js
 * This class represents the different game objects that the player can encounter/ use 
 * throughout the game.
 */
class object { 
    x = 0.0;
    y = 0.0;
    sprite = null;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    xLocation(){
        return this.x;
    }

    yLocation(){ 
        return this.y;
    }
}