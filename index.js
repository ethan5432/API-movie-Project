const apiKey = "2f7d241";
const movieTitle = "Jaws";
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieTitle}`;

async function getMovie() {
  const movies = await fetch(apiUrl);
    const movieData = await movies.json();
    const movieListEl = document.querySelector('.movie-list')
  console.log(movieData)
    movieListEl.innerHTML = movieData.map(
        (movie) => ` <div class="movie-card">
            <div class="movie-card__container">
              <h3>Movies Title</h3>
                <p><b>Release:</b> email@email.com</p>
                <p><b>Rating:</b> 0000000000</p>
                <p><b>RunTime:</b>Info</p>
                <p><b>Genre:</b>Info</p>
                <p><b>Actors:</b>Info</p>
                <p><b>Description:</b>Info</p>
                <p><b>Awards:</b>Info</p>
            </div>
          </div>`
      )
      .join("");
}

getMovie();
