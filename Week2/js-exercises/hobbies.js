{
  const myHobbies = [
    'Meditation',
    'Reading',
    'Programming',
    'Hanging out with friends',
    'Going to the gym',
  ];
  function createAndAppend(create, appendTo) {
    const element = document.createElement(create);
    appendTo.appendChild(element);
    return element;
  }
  const h1 = createAndAppend('h1', document.body);
  h1.innerHTML = 'My Hobbies';
  const ul = createAndAppend('ul', document.body);
  myHobbies.forEach(item => {
    const li = createAndAppend('li', ul);
    li.innerHTML = item;
  });
}
