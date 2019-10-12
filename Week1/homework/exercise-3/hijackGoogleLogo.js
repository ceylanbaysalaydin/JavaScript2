{
  function hijackGoogleLogo() {
    const logo = document.getElementById('hplogo');
    logo.src = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
    logo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  }
  hijackGoogleLogo();
}
