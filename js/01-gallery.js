import { galleryItems } from './gallery-items.js';

const galleryDiv = document.querySelector('.gallery');

renderingGallery(galleryItems);

galleryDiv.addEventListener('click', onImageClick);

//functions

//rendering gallery
function renderingGallery(array) {
  const markup = array
    .map(
      (image) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${image.original}">
            <img
              class="gallery__image"
              src="${image.preview}"
              data-source="${image.original}"
              alt="${image.description}"
            />
          </a>
        </div>`
    )
    .join('');

  galleryDiv.insertAdjacentHTML('beforeend', markup);
}

//click on image and show modal
function onImageClick(e) {
  e.preventDefault();
  console.log(e.target.dataset.source);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryDiv.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') instance.close();
  });
}

//no uses at all
function blockStandardBrowserAction(e) {
  e.preventDefault();
}
