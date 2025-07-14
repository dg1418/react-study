import { useEffect, useState } from "react";
import Movie from "../components/Movie.jsx";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  });

  return (
    <div>
      <h1>Home</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              coverImage={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
