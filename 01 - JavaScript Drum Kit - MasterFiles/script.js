// Listens for keypress event and finds corresponding audio file
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // Stops the function
  audio.currentTime = 0; // Rewinds to the start of audio file at each keypress
  audio.play();
  key.classList.add('playing'); // Adds the 'playing' CSS class to key elements when pressed
});

// Removes the 'playing' class after a keypress
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // Skips the function if the property is not 'transform'
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));