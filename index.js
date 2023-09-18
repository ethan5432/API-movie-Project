const apiKey = "2f7d241";
const movieTitle = "Jaws";
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

async function getMovie() {
  const movies = await fetch(apiUrl);
  const movieData = await movies.json();
  console.log(
    movieData
      .map(
        (movie) => ` <div class="user-card">
            <div class="user-card__container">
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
      .join("")
  );
}

getMovie();
