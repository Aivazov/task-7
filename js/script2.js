import { booksInfo } from './books-array.js';

const refs = {
  buttonsContainer: document.querySelector('div[data-buttons]'),
  listContainer: document.querySelector('ol[data-list]'),
};

console.log(refs);

const filteringBooksTags = booksInfo
  .flatMap((book) => book.tags)
  .filter((tag, index, array) => array.indexOf(tag) === index);

refs.buttonsContainer.addEventListener('click', (event) => {
  const currentElement = event.target;
  const currentTarget = event.currentTarget;
  const currentValue = event.target.dataset.attribute;
  const activeElement = document.querySelector('.is-active');

  if (!currentValue) return;
  console.log(currentValue);

  if (activeElement) {
    activeElement.classList.remove('is-active');
  }

  if (activeElement === currentElement) {
    return renderingBooksInfo(booksInfo);
    // console.log(activeElement === currentElement);
  }

  currentElement.classList.add('is-active');

  const buttonFilteringTag = booksInfo.filter(book => book.tags.includes(currentValue));
  // const markup = booksInfo
  //   .map((listItem) => `<li>${listItem.name}: <b>${listItem.price}</b></li>`)
  //   .filter((element, index, array) => array.includes(element) === currentValue)
  //   .join('');

  // refs.listContainer.insertAdjacentHTML('beforeend', markup);
  // console.log(currentTarget);

  renderingBooksInfo(buttonFilteringTag);
});

// another way to receive our tags and display it
// in this case the result is the same
// const markupUsingSet = [...new Set(booksInfo.flatMap((book) => book.tags))];
// putting it into [] give the chance to use array's methods
// console.log(markupUsingSet);

renderingButtons();
renderingBooksInfo(booksInfo);

function renderingButtons() {
  const markup = filteringBooksTags
    .map(
      (button) =>
        `<button class="button" data-attribute="${button}">${button}</button>`
    )
    .join('');

  refs.buttonsContainer.insertAdjacentHTML('beforeend', markup);
}

function renderingBooksInfo(array) {
  refs.listContainer.innerHTML = '';

  const markup = array
    .map((listItem) => `<li>${listItem.name}: <b>${listItem.price}</b></li>`)
    .join('');
  refs.listContainer.insertAdjacentHTML('beforeend', markup);
}
