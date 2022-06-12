/* eslint-disable complexity */
class Filter {
  #pixels;

  constructor(pixels) {
    this.#pixels = pixels;
  }

  #cyan() {
    this.#pixels.forEach(pixel => pixel.unsetRed());
  }

  #magenta() {
    this.#pixels.forEach(pixel => pixel.unsetGreen());
  }

  #yellow() {
    this.#pixels.forEach(pixel => pixel.unsetBlue());
  }

  #red() {
    this.magenta();
    this.yellow();
  }

  #green() {
    this.cyan();
    this.yellow();
  }

  #blue() {
    this.cyan();
    this.magenta();
  }

  applyFilter(filterName) {
    if (filterName === 'cyan') {
      this.#cyan();
    } else if (filterName === 'magenta') {
      this.#magenta();
    } else if (filterName === 'yellow') {
      this.#yellow();
    } else if (filterName === 'red') {
      this.#red();
    } else if (filterName === 'green') {
      this.#green();
    } else if (filterName === 'blue') {
      this.#blue();
    }
  }
}

module.exports = { Filter };
