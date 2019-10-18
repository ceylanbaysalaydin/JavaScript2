const upArrow = document.querySelector('#up');
const downArrow = document.querySelector('#down');
const sessionLength = document.querySelector('#sessionLength');
const timerMinutes = document.querySelector('span#minutes');
const timerSeconds = document.querySelector('span#seconds');
const play = document.querySelector('span#play');
const pause = document.querySelector('span#pause');
const replay = document.querySelector('#replay');
let running = false;
function checkDigit(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
}
function changeMinutes(minutes) {
  timerMinutes.textContent = checkDigit(minutes);
}
function changeSeconds(seconds) {
  timerSeconds.textContent = checkDigit(seconds);
}
function sessionLengthUp() {
  if (running === false) {
    length = Number(sessionLength.textContent);
    length++;
    sessionLength.textContent = checkDigit(length);
    changeMinutes(length);
    changeSeconds(0);
  }
}
function sessionLengthDown() {
  if (running === false) {
    let length = Number(sessionLength.textContent);
    length > 0 ? length-- : '';
    sessionLength.textContent = checkDigit(length);
    changeMinutes(length);
    changeSeconds(0);
  }
}
function playSeconds() {
  if (Number(timerMinutes.textContent) > 0 || Number(timerSeconds.textContent) > 0) {
    running = true;
    var minutes = Number(timerMinutes.textContent);
    if (Number(timerSeconds.textContent) === 0) {
      var seconds = 59;
      minutes--;
      changeMinutes(minutes);
      changeSeconds(seconds);
    } else {
      seconds = timerSeconds.textContent;
      seconds--;
      changeSeconds(seconds);
    }
    secondInterval = setInterval(function() {
      seconds--;
      changeSeconds(seconds);
      if (!seconds) {
        clearInterval(secondInterval);
        setTimeout(playSeconds, 1000);
        running = false;
      }
      if (!minutes && !seconds) {
        timesUp();
      }
    }, 1000);
  }
}
function stopPlaying() {
  running = false;
  clearInterval(secondInterval);
}
function timesUp() {
  document.querySelector('#session p').innerHTML =
    " <span id='replay'> Time's up! <i class='fas fa-history'></i> </span>";
  document.querySelector('#session p').style.fontSize = '2.5rem';
}

upArrow.addEventListener('click', sessionLengthUp);
downArrow.addEventListener('click', sessionLengthDown);
play.addEventListener('click', playSeconds);
pause.addEventListener('click', stopPlaying);
$(document).on('click', '#replay', function() {
  location.reload();
});
