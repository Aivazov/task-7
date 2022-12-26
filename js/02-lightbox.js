import { galleryItems } from './gallery-items-2.js';
console.log(galleryItems);
const galleryUl = document.querySelector('.gallery');
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
lazyImages.forEach((image) => {
  image.addEventListener('load', onImageLoaded);
});
renderingGallery(galleryItems);

let galleryModal = new SimpleLightbox('.gallery__item');

galleryModal.options.captionsData = 'alt';
galleryModal.options.captionDelay = 250;
galleryModal.on('show.simplelightbox');
//
//
//
function renderingGallery(galleryArr) {
  const markup = galleryArr
    .map(
      ({ original, preview, description }) => `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}"3 alt="${description}" title="${description}" loading='lazy' />
        </a>`
    )
    .join('');

  galleryUl.insertAdjacentHTML('afterbegin', markup);
}
//
//
//

// const gallery = galleryItems
//   .map(({ preview, original, description }) => {
//     return `<li>
//         <a class="gallery__item" href=${original}>
//             <img
//                 class="gallery__image"
//                 src=${preview}
//                 alt=${description}
//             />
//         </a>
//     </li>`;
//   })
//   .join('');

// const galleryRef = document.querySelector('.gallery');
// galleryRef.insertAdjacentHTML('afterbegin', gallery);

// const modal = new SimpleLightbox('.gallery__item');

// modal.options.captionsData = 'alt';
// modal.options.captionDelay = 250;
// modal.on('show.simplelightbox');
