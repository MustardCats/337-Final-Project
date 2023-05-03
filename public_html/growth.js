
class growth {
    x = 0;
    y = 0;
    player = null;
  
  
    constructor(x, y, player) {
      this.x = x;
      this.y = y;
      this.player = player;
    }
  
    isActive(charX, charY) {
      if (this.player.xLocation() == this.x  && this.player.yLocation() == this.y){ 
        console.log("Power Up Acquired");
        return true;
      }
      return false;
    }
  
    getXCoordinate(){ 
      console.log(this.x);
      return this.x;
    }
  
    getYCoordinate(){ 
      console.log(this.y);
      return this.y;
    }

    
  
  
  }
  