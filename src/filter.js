class Filter {
  #pixels;

  constructor(pixels) {
    this.#pixels = pixels;
  }

  cyan() {
    this.#pixels.forEach(pixel => pixel.unsetRed());
  }

  magenta() {
    this.#pixels.forEach(pixel => pixel.unsetGreen());
  }

  yellow() {
    this.#pixels.forEach(pixel => pixel.unsetBlue());
  }

  red() {
    this.magenta();
    this.yellow();
  }

  green() {
    this.cyan();
    this.yellow();
  }

  blue() {
    this.cyan();
    this.magenta();
  }

  applyFilter(filterName) {
    this[filterName]();
  }
}

module.exports = { Filter };
