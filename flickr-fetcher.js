const FlickrFetcher = (function createFlickrFetcher() {
  function photoObjToURL(photoObj) {
    return `https://farm${photoObj.farm}.staticflickr.com/${photoObj.server}/` +
      `${photoObj.id}_${photoObj.secret}_b.jpg`;
  }
  
  function transformPhotoObj(photoObj) {
    return {
      title: photoObj.title,
      url: photoObjToURL(photoObj),
    };
  }
  
  function fetchFlickrData(apiKey, fetch) {
    const url = 'https://api.flickr.com/services/rest/?' +
    'method=flickr.photos.search&api_key='+ apiKey + 
    '&text=pugs&format=json&nojsoncallback=1';
    return fetch(url);
  }
  
  function fetchPhotos(apiKey, fetch) {
    return fetchFlickrData(apiKey, fetch)
      .then(data => data.photos.photo.map(transformPhotoObj));
  }

  return { photoObjToURL, transformPhotoObj, fetchFlickrData, fetchPhotos };
})();

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
  module.exports = FlickrFetcher;
}
