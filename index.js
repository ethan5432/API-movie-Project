const apiKey = "2f7d241";
const movieTitle = "Jaws";
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`;

async function getMovie() {
  const movies = await fetch(apiUrl);
    const movieData = await movies.json();
    const movieListEl = document.querySelector(".movie-list")
  console.log(movieData)
    movieListEl.innerHTML = movieData.Search
      .map(
        (movie) => movieHTML(movie)).join("");
  }
    

getMovie();


function movieHTML(movie) {
    return ` <div class="movie-card">
            <div class="movie-card__container">
            
              <h3>${movie.Title}</h3>
                <p><b>Release:</b> ${movie.Year}</p>
                <p><b>Rating:</b> ${movie.Title}</p>
                <p><b>RunTime:</b>${movie.imdbID}</p>
                <p><b>Genre:</b>${movie.Title}</p>
                <p><b>Actors:</b>${movie.Title}</p>
                <p><b>Description:</b>${movie.Title}</p>
                <p><b>IMDB ID:</b>${movie.imdbID}</p>
            </div>
          </div>`;
}