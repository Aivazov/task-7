import { galleryItems } from './gallery-items.js';

const galleryDiv = document.querySelector('.gallery');
// console.log(galleryItems);
renderingGallery(galleryItems);
console.log(galleryItems);
console.log(galleryItems[0].original);

document.querySelector('button.image').onclick = () => {
  basicLightbox
    .create(
      `
		<img width="1400" height="900" src="${galleryItems[2].original}">
	`
    )
    .show();
};


document.querySelector('.gallery__link').onclick = () => {
  basicLightbox
    .create(
      `<a class="gallery__link" href="${galleryItems.original}"></a>
	`
    )
    .show();
};

function renderingGallery(array) {
  // array.preventDefault();
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

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

// instance.show();
