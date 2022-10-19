import { arrayOfNames } from './names-array.js';

const refs = {
  input: document.querySelector('input[data-input]'),
  list: document.querySelector('ol[data-list]'),
  imageLoading: document.querySelectorAll('img[loading="lazy"]'),
};

const image2 = document.querySelectorAll('img[loading="lazy"]');

// renderingNames(arrayOfNames);
// console.log(refs.imageLoading)

// image2.forEach((image) => {
//   image.addEventListener('load', onImageLoaded, {once: true});
// });

// function onImageLoaded(event) {
//   console.log(event.target);
//   console.log('Events was loaded');
//   event.target.classList.add('img-animation');
// };

// refs.input.addEventListener('input', _.throttle(filteringNames, 300));

function filteringNames(event) {
  const currentValue = event.target.value.toLowerCase().trim();

  const filteredNames = arrayOfNames.filter((name) =>
    name.toLowerCase().includes(currentValue)
  );

  renderingNames(filteredNames);
}

function renderingNames(array) {
  refs.list.innerHTML = '';
  const markup = array.map((name) => `<li>${name}</li>`).join('');

  refs.list.insertAdjacentHTML('beforeend', markup);
}
