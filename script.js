window.addEventListener('keypress', (e) => {
  let keycode = e.keyCode >= 97 ? e.keyCode - 32 : e.keyCode;
  playSound(keycode);
  changeKey(keycode);
})

function playSound(keycode) {
  const audio = document.querySelector(`audio[data-key="${keycode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}

function changeKey(keycode) {
  const keyList = document.querySelectorAll('.key');
  const key = document.querySelector(`.key[data-key="${keycode}"]`);
  if (!key) return;
  key.classList.add('playing');
  keyList.forEach(element => {
    element.addEventListener('transitionend', () =>  {
      element.classList.remove('playing');
    })
  });
}