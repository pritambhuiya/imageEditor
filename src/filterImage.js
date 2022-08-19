const jpeg = require('jpeg-js');
const { Color } = require('./color.js');
const { Pixel } = require('./pixel.js');
const { Position } = require('./position.js');
const { Filter } = require('./filters.js');

const calcOrdinate = (index, width) => Math.floor(index / width);
const calcAbscissa = (index, width) => index % width;

function getPosition(index, width) {
  const abscissa = calcAbscissa(index, width);
  const ordinate = calcOrdinate(index, width);

  return new Position(abscissa, ordinate);
}

const getColor = (buffer, index) => {
  const colorBuffer = buffer.slice(index, index + 4);
  return new Color(...colorBuffer);
};

const partPixels = ({ width, data }) => {
  const pixels = [];

  for (let index = 0; index < data.length; index += 4) {
    const color = getColor(data, index);
    const position = getPosition(index, width);

    pixels.push(new Pixel(color, position));
  }

  return pixels;
};

const applyFilter = (image, filterName) => {
  const pixels = partPixels(image);
  const filter = new Filter(pixels);

  filter.applyFilter(filterName);
  image.data = pixels.flatMap(pixel => pixel.toArray());
  return image;
};

const filterImage = (image, filter) => {
  const decodedImage = jpeg.decode(image);
  const filteredImage = applyFilter(decodedImage, filter);
  return jpeg.encode(filteredImage);
};

module.exports = { filterImage };
