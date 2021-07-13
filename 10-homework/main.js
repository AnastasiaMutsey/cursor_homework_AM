const keys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG"];
const clickKeys = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");
console.log(clickKeys)


function clickPlay() {
    clickKeys.forEach(element => element.onclick = function () {
    audio.forEach(sound => {
      if (sound.id === element.id) {
        sound.play();
        
      }
    })
    })
}


function clickSound() {
  document.addEventListener("keydown", function (event) {
    keys.forEach(element => {
      if (element === event.code) {
        audio.forEach((sound) => {
          if (`Key${sound.id}` === `${element}`) {
            sound.play();
          }
        });
      }
    })
  })

  clickPlay();
}
clickSound();



































// const keys = document.querySelector(".container");
// const key = keys.querySelectorAll(".keys");
// const audio = document.querySelectorAll("audio");

// document.addEventListener("keydown", (e) => {
//  removeClassPlaying();
//   audio.forEach((item) => {
//     if (item.getAttribute("id") === e.code) {
//       item.play();
//       keys.querySelector(`#${e.code}`).classList.add("playing");
//     }
//   });
// });

// function removeClassPlaying() {
//     key.forEach((item) => {
//       item.classList.remove("playing");
//     });
//     audio.forEach((item) => {
//       item.pause();
//       item.currentTime = 0;
//     });
//   }