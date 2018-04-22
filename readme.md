# TDD Intro App (WIP)
Fetch a list of photos from Flickr.com and display it in html.

## About
I'm building this application as I follow the example project from James Sinclair's [*A Gentle Introduction to Javascript Test Driven Development*](https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/). This application is being developed to deepen my understanding of TDD as it applies to Javascript run in a browser.

## Using flickr-fetcher (WIP)
`flickr-fetcher.js` provides a library of functions to wrap the Flickr API. This library **will be** (WIP) compatible with NodeJS and web browsers.
```javascript
// Example usage:

// fetch is a function that accepts a url and returns a promise for the response body as an Object
const fetch = $.getJSON;

// fakeFetcher returns a promise for an array of photoObj objects
fetchPhotos(apiKey, fetch)
  .then(photos => photos.forEach(photoObj => renderPhoto(photoObj)));
```
**photoObj** schema:
```
{
  'title': 'photo title returned by the Flickr API',
  'url': 'photo url returned by the Flickr API'
}
```

## Using photo-lister (WIP)
`photo-lister.js` may be used to render an array of `photoObj` to HTML.

**Example Usage:**
```javascript
// #photoListToHTML() returns html as a string
const htmlString = PhotoLister.photoListToHTML(arrayOfPhotoObj);
$('#photo-container').append(htmlString);
```

**Example HTML returned by PhotoLister.photoListToHTML:**
```html
<ul>
  <li>
    <figure>
      <img src="http://..." alt=""/>'
      <figcaption>title</figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <img src="http://..." alt=""/>'
      <figcaption>title</figcaption>
    </figure>
  </li>
  <!-- creates an li for each item in array passed to photoListToHTML -->
</ul>
```

## Setup
Run `npm install` to install dependencies.

## Tests
Tests are run on the command line using Mocha. `npm test` will run all tests.

## Key Libraries
[Mocha](https://mochajs.org/)
[Chai Assertion Library](http://www.chaijs.com/)
