const jpeg = require('jpeg-js');
const { Color } = require('./color.js');
const { Pixel } = require('./pixel');
const { Position } = require('./position');

const calcOrdinate = (index, width) => Math.floor(index / width);
const calcAbscissa = (index, width) => index % width;

function getPosition(index, width) {
  const abscissa = calcAbscissa(index, width);
  const ordinate = calcOrdinate(index, width);

  return new Position(abscissa, ordinate);
}

const partPixels = ({ width, data }) => {
  const pixels = [];

  for (let index = 0; index < data.length; index += 4) {
    const colorBuffer = data.slice(index, index + 4);
    const color = new Color(...colorBuffer);
    const position = getPosition(index, width);

    pixels.push(new Pixel(color, position));
  }

  return pixels;
};

const applyFilter = (image, filter) => {
  const pixels = partPixels(image);

  if (filter === 'cyan') {
    pixels.forEach(pixel => pixel.unsetRed());
  } else if (filter === 'magenta') {
    pixels.forEach(pixel => pixel.unsetGreen());
  } else if (filter === 'yellow') {
    pixels.forEach(pixel => pixel.unsetBlue());
  }

  image.data = pixels.flatMap(pixel => pixel.toArray());
  return image;
};

const filterImage = (image, filter) => {
  const decodedImage = jpeg.decode(image);
  const filteredImage = applyFilter(decodedImage, filter);
  return jpeg.encode(filteredImage);
};

module.exports = { filterImage };
