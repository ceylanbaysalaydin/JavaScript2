function createAndAppend(element, appendTo, addClass) {
  element = document.createElement(element);
  appendTo.appendChild(element);
  element.classList.add(addClass);
  return element;
}
const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'Harry Potter And The Deathly Hallows',
    author: 'JK Rowling',
    alreadyRead: true,
  },
];
const main = createAndAppend('div', document.body);
const bookImgSrc = ['book0.jpeg', 'book1.jpeg', 'book2.jpeg'];
books.forEach((book, index) => {
  const h3 = createAndAppend('h3', main);
  h3.innerHTML = book.title;
  const ul = createAndAppend('ul', main);
  const li = createAndAppend('li', ul);
  li.innerHTML = book.author;
  const li2 = createAndAppend('li', ul);
  const img = createAndAppend('img', li2);
  img.src = bookImgSrc[index];
  if (book.alreadyRead === true) {
    h3.style.color = 'green';
  } else {
    h3.style.color = 'red';
  }
});
