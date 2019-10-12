{
  const quotes = {
    '- Oscar Wilde': 'Be yourself; everyone else is already taken.',
    '― Mark Twain': "If you tell the truth, you don't have to remember anything.",
    '― Elbert Hubbard': 'A friend is someone who knows all about you and still loves you.',
    '― Friedrich Nietzsche': 'Without music, life would be a mistake.',
    '― Alexander Pope': 'To err is human; to forgive, divine.',
    '― Marcus Tullius Cicero': 'A room without books is like a body without a soul.',
  };
  const quoteSection = document.querySelector('section');
  const buttonSmall = document.querySelector('button.btn-quote-sm');
  const buttonBig = document.querySelector('button.btn-random-quote');
  const close = document.querySelector('span.close');

  function randomNumber(num) {
    return Math.floor(Math.random() * num);
  }
  function randomQuotes() {
    const keys = Object.keys(quotes);
    const randomKey = keys[randomNumber(keys.length)];
    const randomQuote = quotes[randomKey];
    document.querySelector('#quote').innerHTML = randomQuote;
    document.querySelector('.quote-name').innerHTML = randomKey;
  }
  function quoteBox() {
    quoteSection.style.display = 'block';
    quoteSection.style.position = 'absolute';
    quoteSection.style.top = '20vh';
  }
  function closeQuoteBox() {
    quoteSection.style.display = 'none';
  }

  buttonSmall.addEventListener('click', randomQuotes);
  buttonBig.addEventListener('click', randomQuotes);
  buttonBig.addEventListener('click', quoteBox);
  close.addEventListener('click', closeQuoteBox);
}
