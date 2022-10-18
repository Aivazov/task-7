import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryDiv = document.querySelector('.gallery');
console.log(galleryItems);

renderingGallery(galleryItems);

function renderingGallery(array) {
  const markup = array
    .map(
      (image) => `
    <div class="gallery__item">
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
