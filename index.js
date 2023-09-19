const apiKey = "2f7d241";
const movieTitle = "Jaws";
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`;

async function getMovie() {
  const movies = await fetch(apiUrl);
  const movieData = await movies.json();
  const movieListEl = document.querySelector(".movie-list");
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

function onSearchChange(movie) {
  const movieQuery = movie.target.value;
}

onSearchChange();