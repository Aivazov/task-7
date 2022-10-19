const imageLazyLoading = document.querySelectorAll('img[data-src]');
console.log(imageLazyLoading);

imageLazyLoading.forEach((image) => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(event) {
  console.log(event.target);
  console.log('Events was loaded');
  event.target.classList.add('img-animation');
};
