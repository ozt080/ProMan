function playFilm(src) {
  const player = document.getElementById('player');
  const video = document.getElementById('videoPlayer');
  video.src = src;
  player.style.display = 'block';
  window.scrollTo(0, document.body.scrollHeight);
}
