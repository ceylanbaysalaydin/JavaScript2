{
  document.body.style.fontFamily = 'Arial, sans-serif';
  document.getElementById('nickname').innerHTML = 'CeyCey';
  document.getElementById('fav-food').innerHTML = 'Pizza';
  document.getElementById('hometown').innerHTML = 'Bartın';
  const list = document.getElementsByTagName('li');
  Array.from(list).forEach(li => {
    li.classList.add('list-item');
  });
  const img = document.createElement('img');
  img.setAttribute('src', 'img.png');
  document.body.appendChild(img);
}
