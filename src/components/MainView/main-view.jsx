import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import { SignupView } from "../SignupView/signup-view";
import { NavBar } from "../NavBar/nav-bar";
import { Row, Col, Container, CardGroup, Carousel, CarouselItem, Stack } from "react-bootstrap";
import "./main-view.scss";

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

  // return (
  //   <Row>
  //     {!user ? (
  //       <>
  //         <LoginView
  //           onLoggedIn={(user, token) => {
  //             setUser(user);
  //             setToken(token);
  //           }}
  //         />
  //         or, Signup for an account to get started!
  //         <SignupView />
  //       </>
  //     ) : selectedMovie ? (
  //       let similarMoviesGenre = movies.filter((movie) => {
  //         if (movie.genre.name === selectedMovie.genre.name && movie.title !== selectedMovie.title) {
  //           return movie;
  //         }
  //         // return movie.genre.name === selectedMovie.genre.name
  //       });
  //       let similarMoviesDirector = movies.filter((movie) => {
  //         if (movie.director.name === selectedMovie.director.name && movie.title !== selectedMovie.title) {
  //           return movie;
  //         }
  //         // return movie.director.name === selectedMovie.director.name
  //       });
  //       let similarMoviesActor = movies.filter((movie) => {
  //         for (let j = 0; j < movie.actors.length; j++) {
  //           let actor = movie.actors[j];
  //           for (let i = 0; i < selectedMovie.actors.length; i++) {
  //             if (actor === selectedMovie.actors[i] && movie.title !== selectedMovie.title) {
  //               return movie;
  //             }
  //           }
  //         }
  //       });
  //       return (
  //         <div className="movieViewContainer">
  //           <header>
  //             <div className="logo">
  //               <h1>BookFlix</h1>
  //               <p class="subtitle">Written worlds brought to life! 🍿</p>
  //             </div>
  //             <button
  //               className="logoutButton"
  //               onClick={() => {
  //                 setUser(null);
  //                 setToken(null);
  //                 localStorage.clear();
  //               }}>
  //               Logout
  //             </button>
  //           </header>
  //           <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
  //           <div className="similarMoviesContainer">
  //             <h2>Other Movies of {selectedMovie.genre.name} Genre:</h2>
  //             <div className="similarMovies">
  //               {similarMoviesGenre.map((movie) => (
  //                 <MovieCard
  //                   key={movie.id}
  //                   movie={movie}
  //                   onMovieClick={(newSelectedMovie) => {
  //                     setSelectedMovie(newSelectedMovie);
  //                   }}
  //                 />
  //               ))}
  //             </div>
  //             <h2>Other Movies by Director, {selectedMovie.director.name}:</h2>
  //             <div className="similarMovies">
  //               {similarMoviesDirector.map((movie) => (
  //                 <MovieCard
  //                   key={movie.id}
  //                   movie={movie}
  //                   onMovieClick={(newSelectedMovie) => {
  //                     setSelectedMovie(newSelectedMovie);
  //                   }}
  //                 />
  //               ))}
  //             </div>
  //             <h2>Other Movies by the Actor(s):</h2>
  //             <div className="similarMovies">
  //               {similarMoviesActor.map((movie) => (
  //                 <MovieCard
  //                   key={movie.id}
  //                   movie={movie}
  //                   onMovieClick={(newSelectedMovie) => {
  //                     setSelectedMovie(newSelectedMovie);
  //                   }}
  //                 />
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     ) : movies.length === 0 ? (
  //       <div>The movie list is empty, dumdum!</div>;
  //     ) : (
  //       <header>
  //         <div className="logo">
  //           <h1>BookFlix</h1>
  //           <p class="subtitle">Written worlds brought to life! 🍿</p>
  //         </div>
  //         <button
  //           className="logoutButton"
  //           onClick={() => {
  //             setUser(null);
  //             setToken(null);
  //             localStorage.clear();
  //           }}>
  //           Logout
  //         </button>
  //       </header>
  //       <div className="cardContainer">
  //         {movies.map((movie) => (
  //           <MovieCard
  //             key={movie.id}
  //             movie={movie}
  //             onMovieClick={(newSelectedMovie) => {
  //               setSelectedMovie(newSelectedMovie);
  //             }}
  //           />
  //         ))}
  //       </div>
  //     )}
  //   </Row>
  // )

  //when no user is logged in redirect to LoginView
  if (!user) {
    return (
      <Row className="justify-content-md-center">
        <Col md={5}>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          or, Signup for an account to get started!
          <SignupView />
        </Col>
      </Row>
    );
  }

  //when a movie is selected, this opens MovieView
  if (selectedMovie) {
    let similarMoviesGenre = movies.filter((movie) => {
      if (movie.genre.name === selectedMovie.genre.name && movie.title !== selectedMovie.title) {
        return movie;
      }
    });
    let similarMoviesDirector = movies.filter((movie) => {
      if (movie.director.name === selectedMovie.director.name && movie.title !== selectedMovie.title) {
        return movie;
      }
    });
    let similarMoviesActor = movies.filter((movie) => {
      for (let j = 0; j < movie.actors.length; j++) {
        let actor = movie.actors[j];
        for (let i = 0; i < selectedMovie.actors.length; i++) {
          if (actor === selectedMovie.actors[i] && movie.title !== selectedMovie.title) {
            return movie, actor;
          }
        }
      }
    });
    let similarMoviesAuthor = movies.filter((movie) => {
      if (movie.book.author === selectedMovie.book.author && movie.title !== selectedMovie.title) {
        return movie;
      }
    });
    return (
      <Row className="movieviewRow">
        {/* <div className="movieViewContainer"> */}
        {/* <header> */}
        <NavBar
          user={user}
          onLogout={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        />
        <Col md={10} className="movieViewContent w-100">
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        </Col>
        {/* <div className="similarMoviesContainer"> */}
        {/* <div className="similarMovies"> */}
        {/* <Row> */}
        <h2>Other {selectedMovie.genre.name} Movies:</h2>
        {similarMoviesGenre.map((movie) => (
          <Col lg={2} md={3} sm={4} xs={6} key={movie.id} className="mb-3 similarMovies col-xxs-12">
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ))}
        {/* <Carousel className="similarMovies mb-3">
          {similarMoviesGenre.map((movie, index) => (
            <Carousel.Item key={movie.id} className="mb-3">
              <Stack direction="horizontal" gap={3}>
                <MovieCard
                  movie={movie}
                  onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);
                  }}
                />
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel> */}
        {/* </Row> */}
        {/* </div> */}
        <h2>
          {similarMoviesDirector.length > 0
            ? " Other Movies by Director (" + selectedMovie.director.name + "): "
            : ""}
        </h2>
        {/* {selectedMovie.director.name}:</h2> */}
        {similarMoviesDirector.map((movie) => (
          <Col lg={2} md={3} sm={4} key={movie.id} className="mb-3 similarMovies">
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ))}
        <h2>{similarMoviesActor.length > 0 ? "Other Movies with the Actor(s):" : ""}</h2>
        {similarMoviesActor.map((movie) => (
          <Col lg={2} md={3} sm={4} key={movie.id} className="mb-3 similarMovies">
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ))}
        <h2>
          {similarMoviesAuthor.length > 0
            ? "Other Movies based on " + selectedMovie.book.author + "'s books:"
            : ""}
        </h2>
        {similarMoviesAuthor.map((movie) => (
          <Col lg={2} md={3} sm={4} key={movie.id} className="mb-3 similarMovies">
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ))}
        {/* </div> */}
        {/* </div> */}
      </Row>
    );
  }

  //when no movies were found in the database or something went wrong
  if (movies.length === 0) {
    return <div>The movie list is empty, dumdum!</div>;
  }
  //Default MainView UI
  return (
    <Row>
      <NavBar
        user={user}
        onLogout={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
      />
      {/* <header>
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
      </header> */}
      <>
        {movies.map((movie) => (
          <Col key={movie.id} sm={6} md={4} lg={3} xxl={2} className="mb-3 cardContainer">
            <MovieCard
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ))}
      </>
    </Row>
  );
};
