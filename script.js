//My Attempt

// document.addEventListener("keypress", (e) => {
//   const sounds = document.querySelectorAll("audio");
//   sounds.forEach((sound) => {
//     if (parseInt(sound.attributes[0].value) === e.keyCode) {
//       sound.play();
//     }
//   });
// });

//From Course

window.addEventListener("keydown", playSound);

function playSound(e) {
  //   console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}'`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}'`);
  //   console.log(audio, key);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 200);
}
