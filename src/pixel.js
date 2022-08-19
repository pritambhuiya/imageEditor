class Pixel {
  #color;
  #position;
  constructor(color, position) {
    this.#color = color;
    this.#position = position;
  }

  unsetRed() {
    this.#color = this.#color.unsetRed();
  }

  unsetGreen() {
    this.#color = this.#color.unsetGreen();
  }

  unsetBlue() {
    this.#color = this.#color.unsetBlue();
  }

  distanceFrom(anotherPixel) {
    this.#position.distanceFrom(anotherPixel.#position);
  }

  toArray() {
    return this.#color.toArray();
  }
}

module.exports = { Pixel };
