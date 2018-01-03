// Plays sound on keypress
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // Stops the function
  audio.currentTime = 0; // Rewinds to the start of audio file at each keypress (for rapid keypresses)
  audio.play();
  key.classList.add('playing'); // Adds the 'playing' CSS class to key elements when pressed
};

// Removes the 'playing' class after a keypress
function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // Skips the function if the property is not 'transform'
  this.classList.remove('playing');
};

window.addEventListener('keydown', playSound); // Listens for keypress event, finds corresponding audio file, and plays it
const keys = document.querySelectorAll('.key'); // Selects all elements with a class of 'key'
keys.forEach(key => key.addEventListener('transitionend', removeTransition));