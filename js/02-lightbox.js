import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');
renderingGallery(galleryItems);

const lazyImages = document.querySelectorAll("img[loading='lazy']");

let gallery = new SimpleLightbox('.gallery__item');
gallery.on('show.simplelightbox');

console.log('gallery.elements', gallery.elements);

// lazyImages.forEach((image) => {
//   // console.log(image);

//   image.addEventListener("load", onImageLoaded);
// });

// galleryUl.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  console.log(e.target.dataset.source);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  gallery.open();

  // gallery.on("shown.simplelightbox", function () {
  //   console.log('hi');
  // });

  // galleryDiv.addEventListener('keydown', (e) => {
  //   if (e.code === 'Escape') instance.close();
  // });
}

function renderingGallery(array) {
  const markup = array
    .map(
      (image) =>
        `
        <a class="gallery__item" href="${image.original}">
          <img class="gallery__image" src="${image.preview}" data-source="${image.original}"3 alt="${image.description}" title="${image.description}" loading='lazy' />
        </a>`
    )
    .join('');

  galleryUl.insertAdjacentHTML('afterbegin', markup);
}

// gallery.open(
//   'show.simplelightbox',
//   gallery.elements.forEach((el) => {
//     el.addEventListener('click', (e) => {
//       e.preventDefault();
//       console.log('el', el);

//       if (e.target.nodeName !== 'IMG') {
//         return;
//       }

//       let gallery = new SimpleLightbox('.gallery a');
//       gallery.open();

//       // const galleryImage = document.querySelector('.gallery > a');
//     });
//   })
// );

// gallery.elements.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('el', el);

//     if (e.target.nodeName !== 'IMG') {
//       return;
//     }
//     gallery.on('shown.simplelightbox');
//     gallery.open();

//     // const galleryImage = document.querySelector('.gallery > a');
//   });
// });

// function onImageClick(e) {
//   e.preventDefault();

//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   const galleryImage = document.querySelector('.gallery > a');
//   // gallery.open();
//   gallery.destroy();

//   // galleryImage.addEventListener('click', () => {
//   // });

//   //   const instance = basicLightbox.create(`
//   //     <img src="${e.target.dataset.source}" width="800" height="600">
//   // `);

//   // e.target.src.open();
// }

function onImageLoaded(e) {
  // console.log(e.target);
}
