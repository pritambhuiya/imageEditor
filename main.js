const fs = require('fs');
const { filterImage } = require('./src/filterImage.js');

const readImage = (path) => fs.readFileSync(path);
const writeImage = (path, imageData) => fs.writeFileSync(path, imageData);

const main = () => {
  const image = readImage('./sunrise.jpeg');
  const filteredImage = filterImage(image, 'cyan');

  writeImage('./filteredSunrise.jpeg', filteredImage.data);
};

main();
