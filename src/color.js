class Color {
  #red;
  #green;
  #blue;
  #alpha;

  constructor(red, green, blue, alpha) {
    this.#red = red;
    this.#green = green;
    this.#blue = blue;
    this.#alpha = alpha;
  }

  unsetRed() {
    return new Color(0, this.#green, this.#blue, this.#alpha);
  }

  unsetGreen() {
    return new Color(this.#red, 0, this.#blue, this.#alpha);
  }

  unsetBlue() {
    return new Color(this.#red, this.#green, 0, this.#alpha);
  }

  toArray() {
    return [this.#red, this.#green, this.#blue, this.#alpha];
  }
}

module.exports = { Color };
