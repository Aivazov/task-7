import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');
// renderingGallery(galleryItems);

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach((image) => {
  console.log(image);

  image.addEventListener('load', onImageLoaded);
});

let gallery = new SimpleLightbox('.gallery a');

galleryUl.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();

  console.log(e.target);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  gallery.on('show.simplelightbox', function (e) {
    console.log('gallery.elements[0]', gallery.elements[0]);
  });

  // gallery.on('show.simplelightbox', function () {
  //   // SimpleLightbox.sourceAttr;
  //   console.log('I am in gallery simplelightbox');
  // });
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
          <img class="gallery__image" src="${image.preview}" alt="${image.description}" loading='lazy' />
        </a>`
    )
    .join('');
  galleryUl.insertAdjacentHTML('beforeend', markup);
}
