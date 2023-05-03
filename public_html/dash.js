// This class acts as the dash powerup functionality. 

class dash {
  x = 0;
  y = 0;
  player = null;


  constructor(x, y, player) {
    this.x = x;
    this.y = y;
    this.player = player;
  }

  isActive(){
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

  setCoordinate(newXCoordinate, newYCoordinate) {
    this.x = newXCoordinate;
    this.y = newYCoordinate;
  }


}
