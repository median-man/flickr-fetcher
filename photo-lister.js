const PhotoLister = (function createPhotoLister() {
  function photoToLi(photoObj) {
    const img = `<img src="${photoObj.url}" alt="" />`;
    const caption = `<figcaption>${photoObj.title}</figcaption>`;
    return `<li><figure>${img + caption}</figure></li>`;
  }

  function photoListToHTML(photoObjList) {
    return `<ul>${photoObjList.map(photoToLi).join('')}</ul>`;
  }

  function addPhotosToElement(listHtml, selector, $) {
    return $(selector).append(listHtml);
  }

  return { photoToLi, photoListToHTML, addPhotosToElement };
})();

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
  module.exports = PhotoLister;
}
