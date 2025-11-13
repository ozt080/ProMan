function playFilm(src) {
    const video = document.getElementById('videoPlayer');
    const container = document.getElementById('video-container');
    video.src = src;
    container.style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
}


document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const films = document.querySelectorAll('.film');
  films.forEach(film => {
    const title = film.querySelector('.film-title').textContent.toLowerCase();
    film.style.display = title.includes(query) ? 'block' : 'none';
  });
});
