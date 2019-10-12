{
  const body = document.body;
  function createAndAppend(element, appendTo, text, id) {
    element = document.createElement(element);
    appendTo.appendChild(element);
    element.id = id;
    element.innerHTML = text;
  }
  function clock() {
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    document.getElementById('clock').innerHTML = time;
  }
  createAndAppend('h1', body, 'Clock');
  createAndAppend('p', body, '', 'clock');
  document.onload = setInterval(clock, 1000);
}
