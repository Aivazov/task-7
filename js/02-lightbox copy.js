import { galleryItems } from './gallery-items.js';
// Change code below this line
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// lazyImages.forEach((image) => {
//   console.log(image);

//   image.addEventListener('load', onImageLoaded);
// });

const galleryUl = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a');

galleryUl.addEventListener('click', onImageClick);

function onImageClick(e) {
  e.preventDefault();

  console.log(e.target);
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  gallery.open();
}

function onImageLoaded(e) {
  console.log(e.target);
}