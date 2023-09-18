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
                <p><b>RunTime:</b> <a href="https://website.website" target="_blank">website.website</a></p>
                <p><b>Genre:</b> <a href="https://website.website" target="_blank">website.website</a></p>
                <p><b>Actors:</b> <a href="https://website.website" target="_blank">website.website</a></p>
                <p><b>Description:</b> <a href="https://website.website" target="_blank">website.website</a></p>
                <p><b>Awards:</b> <a href="https://website.website" target="_blank">website.website</a></p>
            </div>
          </div>`
      )
      .join("")
  );
}

getMovie();
