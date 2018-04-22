# TDD Intro App
Fetch a list of photos from Flickr.com and display it in html.

## About
I'm building this application as I follow the example project from James Sinclair's [*A Gentle Introduction to Javascript Test Driven Development*](https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/). This application is being developed to deepen my understanding of TDD as it applies to Javascript run in a browser.

## Using flickr-fetcher
`flickr-fetcher.js` provides a library of functions to wrap the Flickr API.
```javascript
// Example usage:

// fet is a function that accepts a url and returns a promise for the response body as an Object
const fetch = $.getJSON;

// fakeFetcher returns a promise for an array of photoObj objects
fakeFetcher(apiKey, fetch)
  .then(photos => photos.forEach(photoObj => renderPhoto(photoObj)));
```
**photoObj** schema:
```
{
  'title': 'photo title returned by the Flickr API',
  'url': 'photo url returned by the Flickr API'
}
```

## Setup
Requires NodeJs.
Run `npm install` to install dependencies.

## Tests
Tests are run on the command line using Mocha. `npm test` will run all tests.

## Key Libraries
[Mocha](https://mochajs.org/)
[Chai Assertion Library](http://www.chaijs.com/)
