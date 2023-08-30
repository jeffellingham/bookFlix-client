import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import { SignupView } from "../SignupView/signup-view";

export const MainView = () => {
  // Use user and token stored in localStorage OR default to null
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) return;

    fetch("https://book-flix-cd27bc1b730d.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.title,
            imagePath: movie.imagePath,
            releaseYear: movie.releaseYear,
            genre: {
              name: movie.genre.name,
            },
            description: movie.description,
            director: {
              name: movie.director.name,
            },
            actors: movie.actors,
            book: {
              title: movie.book.title,
              author: movie.book.author,
            },
          };
        });
        setMovies(moviesFromApi);
      });
  }, [token]);
  // Token is the 2nd argument of useEffect, known as a dependency array, which ensures fetch is called every time token changes (like after the user logs in)

  // when no user is logged in redirect to LoginView
  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        or, Signup for an account to get started!
        <SignupView />
      </>
    );
  }

  if (selectedMovie) {
    let similarMoviesGenre = movies.filter((movie) => {
      if (movie.genre.name === selectedMovie.genre.name && movie.title !== selectedMovie.title) {
        return movie;
      }
      // return movie.genre.name === selectedMovie.genre.name
    });
    let similarMoviesDirector = movies.filter((movie) => {
      if (movie.director.name === selectedMovie.director.name && movie.title !== selectedMovie.title) {
        return movie;
      }
      // return movie.director.name === selectedMovie.director.name
    });
    let similarMoviesActor = movies.filter((movie) => {
      for (let j = 0; j < movie.actors.length; j++) {
        let actor = movie.actors[j];
        for (let i = 0; i < selectedMovie.actors.length; i++) {
          if (actor === selectedMovie.actors[i] && movie.title !== selectedMovie.title) {
            return movie;
          }
        }
      }
    });
    return (
      <div className="movieViewContainer">
        <header>
          <div className="logo">
            <h1>BookFlix</h1>
            <p class="subtitle">Written worlds brought to life! 🍿</p>
          </div>
          <button
            className="logoutButton"
            onClick={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}>
            Logout
          </button>
        </header>
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        <div className="similarMoviesContainer">
          <h2>Other Movies of {selectedMovie.genre.name} Genre:</h2>
          <div className="similarMovies">
            {similarMoviesGenre.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            ))}
          </div>
          <h2>Other Movies by Director, {selectedMovie.director.name}:</h2>
          <div className="similarMovies">
            {similarMoviesDirector.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            ))}
          </div>
          <h2>Other Movies by the Actor(s):</h2>
          <div className="similarMovies">
            {similarMoviesActor.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            ))}
          </div>
          {/* <button onClick={() => { setUser(null); }}>Logout</button> */}
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return <div>The movie list is empty, dumdum!</div>;
  }
  return (
    <div>
      <header>
        <div className="logo">
          <h1>BookFlix</h1>
          <p class="subtitle">Written worlds brought to life! 🍿</p>
        </div>
        <button
          className="logoutButton"
          onClick={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}>
          Logout
        </button>
      </header>
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
      <button
        className="logoutButton"
        onClick={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}>
        Logout
      </button>
    </div>
  );
};
