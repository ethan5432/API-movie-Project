

const apiKey = '2f7d241'
const movieTitle = 'Jaws'
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`

async function getMovie() {
    const movies = await fetch(apiUrl);
   const movieData = await movies.json();
    console.log(
        movieData.map((movie) => ` <div class="user-card">
    <div class="user-card__container">
        <h3>Movies Name</h4>
        <p><b>Email:</b> email@email.com</p>
        <p><b>Phone:</b> 0000000000</p>
        <p><b>Website:</b> <a href="https://website.website" target="_blank">website.website</a></p>
    </div>
    </div>`)
        .join("")
    );
}

getMovie();
