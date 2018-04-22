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

module.exports = { photoObjToURL, transformPhotoObj };
