

const apiKey = '2f7d241'
const movieTitle = 'Jaws'
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`

async function getMovie() {
     movieData = (await fetch(apiUrl)).json();
    console.log(movieData)

}

getMovie();

// async function getMovie() {
//   const apiKey = "2f7d241"; // Replace with your OMDB API key
//   const movieTitle = "The Matrix"; // Replace with the title of the movie you want to retrieve

//   const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const movieData = await response.json();
//     console.log(movieData);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getMovie();
