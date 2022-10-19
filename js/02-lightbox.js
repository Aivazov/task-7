import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

renderingGallery(galleryItems);

lazyImages.forEach((image) => {
  console.log(image);

  image.addEventListener('load', onImageLoaded);
});

function onImageLoaded(e) {
  console.log(e.target)
}

function renderingGallery(array) {
  // array.preventDefault();
  const markup = array
    .map(
      (image) =>
        `
        <a class="gallery__link" href="large-image.jpg">
          <img
            loading="lazy"
            class="gallery__image"
            src="${image.preview}"
            data-source="large-image.jpg"
            alt="${image.description}"
          />
        </a>`
    )
    .join('');
  galleryUl.insertAdjacentHTML('beforeend', markup);
  console.log(array.target)
}
