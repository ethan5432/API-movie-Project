const apiKey = "2f7d241";
const movieTitle = "jaws";
const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`;



async function onSearchChange(event) {
  
  const input = event.target.value;
  const movies = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${input}`);
  const movieData = await movies.json();
  const movieListEl = document.querySelector(".movie-list");
  movieListEl.innerHTML = movieData.Search.map((movie) =>
    movieHTML(movie)
  ).join("");
}



function handle(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the form from submitting via Enter key
    onSearchChange(event);
  }
};




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
