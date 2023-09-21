const apiKey = "2f7d241";
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;
const movieListEl = document.querySelector(".movie-list");

async function onSearchChange(input) {
  const movies = await fetch(`${apiUrl}&s=${input}`);
  const movieData = await movies.json();

  if (movieData.Search) {
    movieListEl.innerHTML = movieData.Search.map((movie) =>
      movieHTML(movie)
    ).join("");
  }
}

function handle(event) {
  event.preventDefault();
  const inputElement = document.getElementById("form__control");
  const input = inputElement.value;
  onSearchChange(input);
}

async function getMovie() {
  const movies = await fetch(`${apiUrl}&s=jaws`); // Default search for "jaws"
  const movieData = await movies.json();
  movieListEl.innerHTML = movieData.Search.map((movie) =>
    movieHTML(movie)
  ).join("");
}

getMovie();

function movieHTML(movie) {
  return `
  <div class="movie-card">
    <figure>
      <img class="posterImage" src="${movie.Poster}">
    </figure>
    <div class="movie-card__container">
      <h3>${movie.Title}</h3>
      <p><b>Release: </b> ${movie.Year}</p>
      <p><b>Type: </b>${movie.Type}</p>
      <p><b>IMDB ID: </b>${movie.imdbID}</p>
    </div>
  </div>`;
}
