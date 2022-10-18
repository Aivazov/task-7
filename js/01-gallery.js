import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from './basiclightbox.js';
// Change code below this line
const galleryDiv = document.querySelector('.gallery');
console.log(galleryItems);

renderingGallery(galleryItems);

function renderingGallery(array) {
  const markup = array
    .map(
      (image) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${image.preview}"
          data-source="large-image.jpg"
          alt="${image.description}"
        />
      </a>
    </div>`
    )
    .join('');
  galleryDiv.insertAdjacentHTML('beforeend', markup);
}

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

// instance.show();
