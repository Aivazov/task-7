import { galleryItems } from './gallery-items.js';

// import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

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

// const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// renderingGallery(galleryItems);
//
//
//
// const galleryMarkup = galleryItems
//   .map(({ original, preview, description }) => {
//     return `
//         <a class="gallery__item" href="${original}">
//           <img class="gallery__image" src="${preview}" data-source="${original}"3 alt="${description}" title="${description}" loading='lazy' />
//         </a>`;
//   })
//   .join('');

const galleryMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `<li>
        <a class="gallery__item" href=${original}>
            <img
                class="gallery__image"
                src=${preview}
                alt=${description}
            />
        </a>
    </li>`;
  })
  .join('');

const galleryUl = document.querySelector('.gallery');
galleryUl.insertAdjacentHTML('afterbegin', galleryMarkup);

let galleryModal = new SimpleLightbox('.gallery__item');

// galleryModal.options.captionsData = 'alt';
// galleryModal.options.captionDelay = 250;
galleryModal.on('show.simplelightbox');
//
//
//
// function renderingGallery(galleryArr) {
//   const markup = galleryArr
//     .map(
//       ({ original, preview, description }) => `
//         <a class="gallery__item" href="${original}">
//           <img class="gallery__image" src="${preview}" data-source="${original}"3 alt="${description}" title="${description}" loading='lazy' />
//         </a>`
//     )
//     .join('');

//   galleryUl.insertAdjacentHTML('beforeend', markup);
// }
//
//
//

// galleryModal.open();

// lazyImages.forEach((image) => {
//   console.log(image);

//   image.addEventListener('load', onImageLoaded);
// });

// galleryUl.addEventListener('click', onImageClick);

// function onImageClick(e) {
//   e.preventDefault();

//   console.log(e.target);
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   gallery.open();
//   gallery.on('shown.simplelightbox', function () {
//     console.log('was shown');
//     console.log(e.target);
//   });
// }

// function onImageLoaded(e) {
//   console.log(e.target);
// }
