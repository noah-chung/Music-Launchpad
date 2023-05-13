var buttons = document.querySelectorAll("button");
buttons.forEach(function (btn, index) {
 // btn.classList.add("pressed");
  btn.setAttribute("sound", index);
  btn.addEventListener("mousedown", playLPSound)
  btn.addEventListener("mouseup", stopLPSound)
}) 



// Store all audio files
var audiofiles = [
  "assets/sound1.mp3",
  "assets/sound2.mp3",
  "assets/sound3.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx4.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx5.mp3",
  "assets/sound6.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx7.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx8.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx9.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx10.mp3",
  "assets/sound11.mp3",
  "assets/sound12.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx13.mp3",
  "assets/sound14.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx15.mp3",
  "assets/sound16.mp3",
  "assets/sound17.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx18.mp3",
  "assets/sound19.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx20.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx21.mp3",
  "assets/sound22.mp3",
  "assets/sound23.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx24.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx25.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx26.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx27.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx28.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx29.mp3",
  "assets/sound30.mp3",
  "assets/sound31.mp3",
  "assets/sound32.mp3",
  "assets/sound33.mp3",
  "assets/sound34.mp3",
  "https://acf.qoom.space/sounds/launchpad/soundfx35.mp3" ,
  "https://acf.qoom.space/sounds/launchpad/soundfx36.mp3",
];

// Create a new Howl object for each audio file
var soundEffects = audiofiles.map(function (soundfile) {
  var sound = new Howl({
    src: [soundfile],
    loop: false
  });
  return sound
});  



//start launchpad sound
function playLPSound(e) {
  var thisbutton = this;
  var i = parseInt(thisbutton.getAttribute("sound"))
  thisbutton.classList.add("pressed");
  if(soundEffects[i].playing() !=true) {
 (soundEffects[i].play());
  }
}

// Stop Launchpad Sound
function stopLPSound(e) {
  var thisbutton = this;
  var i = parseInt(thisbutton.getAttribute("sound"))
  setTimeout(function() {
    thisbutton.classList.remove("pressed");
  }, 2000);
}

// Keyboard input function calls
document.addEventListener("keydown", handleKeyDown)
document.addEventListener("keyup", handleKeyup)

// Keyboard butto input support
function handleKeyup(e) {
  buttons.forEach(function (button) {
    if(button.getAttribute("key") === e.key) {
      playLPSound.call(button, e);
      return;
    }
  });
}

function handleKeyDown(e) {
  buttons.forEach(function (button) {
    if(button.getAttribute("key") === e.key) {
      stopLPSound.call(button, e);
      return;
    }
  })
}