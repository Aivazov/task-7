import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');
renderingGallery(galleryItems);

const lazyImages = document.querySelectorAll('img[loading="lazy"]');
let gallery = new SimpleLightbox('.gallery a');

lazyImages.forEach((image) => {
  console.log(image);

  image.addEventListener('load', onImageLoaded);
});

galleryUl.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  gallery.open();
}

function onImageLoaded(e) {
  console.log(e.target);
}

function renderingGallery(array) {
  const markup = array
    .map(
      (image) =>
        `
        <a class="gallery__item" href="${image.original}">
          <img class="gallery__image" src="${image.preview}" alt="${image.description}" title="${image.description}" loading='lazy' />
        </a>`
    )
    .join('');
  galleryUl.insertAdjacentHTML('beforeend', markup);
}
