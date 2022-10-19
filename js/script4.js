const imageLazyLoadingNative = document.querySelectorAll('img[loading="lazy"]');
console.log(imageLazyLoadingNative);

imageLazyLoadingNative.forEach((image) => {
  image.addEventListener('load', onImageLoaded, { once: true });
});

function onImageLoaded(event) {
  console.log(event.target);
  console.log('Events was loaded');
  event.target.classList.add('img-animation');
}
