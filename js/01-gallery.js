import { galleryItems } from './gallery-items.js';

const galleryDiv = document.querySelector('.gallery');

renderingGallery(galleryItems);

galleryDiv.addEventListener('click', onImageClick);

//functions

//rendering gallery
function renderingGallery(array) {
  const markup = array
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
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
  // console.log(e.target.dataset.source);
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
