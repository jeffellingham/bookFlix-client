import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://book-flix-cd27bc1b730d.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.title,
            imagePath: movie.imagePath,
            releaseYear: movie.releaseYear,
            genre: {
              name: movie.genre.name
            },
            description: movie.description,
            director: {
              name: movie.director.name
            },
            actors: movie.actors,
            book: {
              title: movie.book.title,
              author: movie.book.author
            }
          };
        });
        setMovies(moviesFromApi);
      });
  }, []); 

  if (selectedMovie) {
    let similarMoviesGenre = movies.filter((movie) => {
      if (movie.genre.name === selectedMovie.genre.name && movie.title !== selectedMovie.title) {
        return movie
      }
      // return movie.genre.name === selectedMovie.genre.name
    })
    let similarMoviesDirector = movies.filter((movie) => {
      if (movie.director.name === selectedMovie.director.name && movie.title !== selectedMovie.title) {
        return movie
      }
      // return movie.director.name === selectedMovie.director.name
    })
    let similarMoviesActor = movies.filter((movie) => {
      for(let j = 0; j < movie.actors.length; j++) {
        let actor = movie.actors[j];
        for(let i = 0; i < selectedMovie.actors.length; i++) {
          if (actor === selectedMovie.actors[i] && movie.title !== selectedMovie.title) {
            return movie
          }
        }
      };
    })
    return (
      <div className="movieViewContainer">
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        <hr />
        <h2>Other Movies of {selectedMovie.genre.name} Genre:</h2>
        <div className="similarMovies">
          {similarMoviesGenre.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
            />
          ))}
        </div>
        <hr />
        <h2>Other Movies by Director, {selectedMovie.director.name}:</h2>
        <div className="similarMovies">
          {similarMoviesDirector.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
            />
          ))}
        </div>
        <hr />
        <h2>Other Movies by the Actor(s):</h2>
        <div className="similarMovies">
          {similarMoviesActor.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (movies.length === 0) {
    return <div>The movie list is empty, dumdum!</div>;
  }
  return (
    <div className="cardContainer">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
