const fs = require('fs');
const { filterImage } = require('./src/filters.js');

const readImage = (path) => fs.readFileSync(path);
const writeImage = (path, imageData) => fs.writeFileSync(path, imageData);

const main = () => {
  const image = readImage('./sunrise.jpeg');
  const filteredImage = filterImage(image, 'magenta');

  writeImage('./filteredSunrise.jpeg', filteredImage.data);
};

main();
