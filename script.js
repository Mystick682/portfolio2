const playPauseBtn = document.getElementById("playPauseBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    playPauseBtn.textContent = "⏸ Pause Music";
  } else {
    bgMusic.pause();
    playPauseBtn.textContent = "▶ Play Music";
  }
  isPlaying = !isPlaying;
});
document.addEventListener('DOMContentLoaded', () => {
const bgMusic = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const progressBar = document.getElementById('progressBar');

playBtn.addEventListener('click', () => {
  bgMusic.play().catch((err) => {
      console.error('Playback failed:', err);
    });
  });
});

pauseBtn.addEventListener('click', () => {
  bgMusic.pause();
});

// Update progress bar as the music plays
bgMusic.addEventListener('timeupdate', () => {
  const progressPercent = (bgMusic.currentTime / bgMusic.duration) * 100;
  progressBar.style.width = progressPercent + '%';
});