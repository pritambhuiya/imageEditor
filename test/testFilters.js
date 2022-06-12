const fs = require('fs');
const assert = require('assert');
const { filterImage } = require('../src/filters.js');

const readImage = () => fs.readFileSync('./test/testData/sunrise.jpeg');
const readFilteredImage = () =>
  fs.readFileSync('./test/testData/filteredSunrise.jpeg');

const readGeneratedImage = () =>
  fs.readFileSync('./test/testData/generatedSunrise.jpeg');

const writeImage = (imageData) =>
  fs.writeFileSync('./test/testData/generatedSunrise.jpeg', imageData.data);

describe('filterImage', () => {
  it('Should filter an image', () => {
    writeImage(filterImage(readImage(), 'cyan'));

    const actual = readGeneratedImage();
    const expected = readFilteredImage();
    assert.deepStrictEqual(actual, expected);
  });
});
