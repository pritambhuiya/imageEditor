class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  equals(anotherPosition) {
    return anotherPosition instanceof Position &&
      this.x === anotherPosition.x &&
      this.y === anotherPosition.y;
  }

  distanceFrom(anotherPosition) {
    const deltaX = this.x - anotherPosition.x;
    const deltaY = this.y - anotherPosition.y;

    const distance = Math.hypot(deltaX, deltaY);
    return +distance.toFixed(2);
  }
}

module.exports = { Position };
