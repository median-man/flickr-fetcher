const { expect } = require('chai');
const cheerio = require('cheerio');
const PhotoLister = require('./photo-lister.js');

describe('PhotoLister', () => {
  it('should exist', () => {
    expect(PhotoLister).to.exist;
  });

  describe('#photoToLi', () => {
    it('should take a photo obj and return a list item string', () => {
      let input = {
        title: 'This is a test',
        url: 'http://loremflickr.com/960/593'
      };
      let expected = '<li><figure><img src="http://loremflickr.com/960/593" alt="" />' +
        '<figcaption>This is a test</figcaption></figure></li>';
      let actual = PhotoLister.photoToLi(input);
      expect(actual).to.equal(expected);

      input = {
        title: 'This is another test',
        url: 'http://loremflickr.com/960/593/puppy'
      };
      expected = '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt="" />' +
        '<figcaption>This is another test</figcaption></figure></li>';
      actual = PhotoLister.photoToLi(input);
      expect(actual).to.equal(expected);
    });
  });

  describe('#photoListToHTML', () => {
    it('should take an array of photo object and return a string for an HTML list', () => {
      let input = [
        {
          title: 'This is a test',
          url: 'http://loremflickr.com/960/593'
        },
        {
          title: 'This is another test',
          url: 'http://loremflickr.com/960/593/puppy'
        },
      ];
      let expected = '<ul><li><figure><img src="http://loremflickr.com/960/593" alt="" />' +
        '<figcaption>This is a test</figcaption></figure></li>' +
        '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt="" />' +
        '<figcaption>This is another test</figcaption></figure></li>' +
        '</ul>';
      let actual = PhotoLister.photoListToHTML(input);
      expect(actual).to.equal(expected);
    });
  });

  describe('#addPhotosToElement()', () => {
    it(
      'should take an HTML string of li and add them to an element with a given selector',
      () => {
        const html = '<html><head></head><body><div id="mydiv"></div></body></html>';
        const $ = cheerio.load(html);
        let list = '<ul><li><figure><img src="http://loremflickr.com/960/593" alt=""/>'
          + '<figcaption>This is a test</figcaption></figure></li>'
          + '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>'
          + '<figcaption>This is another test</figcaption></figure></li></ul>';
        let selector = '#mydiv';
        let $div = PhotoLister.addPhotosToElement(list, selector, $);
        expect($div.find('ul').length).to.equal(1);
        expect($div.find('li').length).to.equal(2);
        expect($div.find('figure').length).to.equal(2);
        expect($div.find('img').length).to.equal(2);
        expect($div.find('figcaption').length).to.equal(2);
      }
    );
  });
});
