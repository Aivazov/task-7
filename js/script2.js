import { booksInfo } from './books-array.js';

const refs = {
  buttonsContainer: document.querySelector('div[data-buttons]'),
  listContainer: document.querySelector('ol[data-list]'),
};

console.log(refs);

const filteringBooksTags = booksInfo
  .flatMap((book) => book.tags)
  .filter((tag, index, array) => array.indexOf(tag) === index);

// another way to receive our tags and display it
// in this case the result is the same
// const markupUsingSet = [...new Set(booksInfo.flatMap((book) => book.tags))];
// putting it into [] give the chance to use array's methods
// console.log(markupUsingSet);

function renderingButtons() {
  const markup = filteringBooksTags
    .map((button) => `<button class="button">${button}</button>`)
    .join('');

  refs.buttonsContainer.insertAdjacentHTML('beforeend', markup);
}

renderingButtons();
renderingBooksInfo(booksInfo);

function renderingBooksInfo(array) {
  refs.listContainer.innerHTML = '';

  const markup = array
    .map((listItem) => `<li>${listItem.name}: <b>${listItem.price}</b></li>`)
    .join('');
  console.log(markup);
  refs.listContainer.insertAdjacentHTML('beforeend', markup);
}
