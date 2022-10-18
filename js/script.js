import { arrayOfNames } from './names-array.js';

const refs = {
  input: document.querySelector('input[data-input]'),
  list: document.querySelector('ol[data-list]'),
};

renderingNames(arrayOfNames);

refs.input.addEventListener('input', _.throttle(filteringNames, 300));

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
