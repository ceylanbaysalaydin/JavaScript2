'use strict';
// I already finished old homework before week.
// I just attached this, If you have time, can you check it too?
{
  const bookTitles = [
    'book1',
    'book2',
    'book3',
    'book4',
    'book5',
    'book6',
    'book7',
    'book8',
    'book9',
    'book10',
  ];
  const books = {};
  const bookCover = {};

  bookTitles.forEach(item => {
    books[item] = {
      title: item,
      language: 'Turkish',
      author: 'Ceylan Baysal',
    };
    bookCover[item] = {
      src: 'images/images.jpeg',
    };
  });

  function createAndAppend(element, appendTo, addClass) {
    element = document.createElement(element);
    appendTo.appendChild(element);
    element.classList.add(addClass);
    return element;
  }

  const main = createAndAppend('div', document.body, 'box');
  const h1 = createAndAppend('h1', main);
  h1.innerHTML = 'Library';

  function bookList(booksObj) {
    const key = Object.keys(booksObj);
    key.forEach(item => {
      const h3 = createAndAppend('h3', main);
      h3.innerHTML = booksObj[item].title;

      const ul = createAndAppend('ul', main, 'hidden');

      const li = createAndAppend('li', ul);
      li.innerHTML = 'Language is ' + booksObj[item].language;

      const li2 = createAndAppend('li', ul);
      li2.innerHTML = 'Author is ' + booksObj[item].author;

      const li3 = createAndAppend('li', ul);

      const img = createAndAppend('img', li3, 'img-thumbnail');

      img.setAttribute('src', bookCover[item].src);
      img.setAttribute('alt', 'book-image');

      h3.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('hidden');
        const turnPageSound = new Audio('sounds/Page_Turn.mp3');
        turnPageSound.play();
      });
    });
  }
  bookList(books);
}
