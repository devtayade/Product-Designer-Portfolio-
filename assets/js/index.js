// Get the video
let video = document.querySelector("#video");

// Get the button
let button = document.querySelector("#button");

// Pause and play the video, and change the button text
function pauseOrPlay() {
  if (video.paused) {
    video.play();
    button.innerHTML = "Pause";
  } else {
    video.pause();
    button.innerHTML = "Play";
  }
}