class dash {
  x = 0;
  y = 0;


  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  isActive(charX, charY) {
    if (charX == this.x  && charY == this.y){ 
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
