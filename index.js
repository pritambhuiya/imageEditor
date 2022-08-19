const fs = require('fs');
const { filterImage } = require('./src/filterImage.js');

const readImage = (path) => fs.readFileSync(path);
const writeImage = (path, imageData) => fs.writeFileSync(path, imageData);

const main = (imageFile = './sunrise.jpeg', filter = 'blue') => {
  const image = readImage(imageFile);
  const filteredImage = filterImage(image, filter);

  writeImage('./filteredSunrise.jpeg', filteredImage.data);
};

const [imageFile, filter] = process.argv.slice(2);
main(imageFile, filter);
