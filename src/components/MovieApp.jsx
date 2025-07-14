import { useEffect, useState } from "react";

function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  });

  return (
    <div>
      <h1>Movie App</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.medium_cover_image} alt={movie.title} />
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieApp;
