import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import { SignupView } from "../SignupView/signup-view";
import { NavBar } from "../NavBar/nav-bar";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  //when no user is logged in, redirect to LoginView
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
  // first we set up the silimar movies sections for genre, director, actors, and author
  if (selectedMovie) {
    let similarMoviesGenre = movies.filter((movie) => {
      if (movie.genre.name === selectedMovie.genre.name && movie.title !== selectedMovie.title) {
        return movie;
      }
    });
    //How to break up array to use react-bootstrap's carousel component, non-responsive though
    // function chunkArray(array, size) {
    //   let chunked_array = [];
    //   for (let i = 0; i < array.length; i += size) {
    //     chunked_array.push(array.splice(i, size));
    //   }
    //   return chunked_array;
    // }
    // const chunkedGenreMovies = chunkArray(similarMoviesGenre, 3);

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
    // function slickNextArrow(props) {
    //   const { style, onClick } = props;
    //   return (
    //     <img
    //       src={require(src / img / right_arrow_icon.png)}
    //       onClick={onClick}
    //     />
    //   );
    // }
    // function slickPrevArrow(props) {
    //   const { style, onClick } = props;
    //   return <div style={{ ...style, display: "block", backgroundColor: "green" }} onClick={onClick} />;
    // }
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      // swipeToSlide: true,
      nextArrow: <slickNextArrow />,
      prevArrow: <slickPrevArrow />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <Row className="movieviewRow">
        {/* <header> */}
        <NavBar
          user={user}
          onLogout={() => {
            setUser(null);
            setToken(null);
            localStorage.clear();
          }}
        />
        {/* MovieView content */}
        <Col md={10} className="movieViewContent w-100">
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        </Col>

        {/* similarMovies sections */}
        <h2>Other {selectedMovie.genre.name} Movies:</h2>
        <Slider {...settings}>
          {similarMoviesGenre.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          ))}
        </Slider>
        <h2>
          {similarMoviesDirector.length > 0
            ? " Other Movies by Director (" + selectedMovie.director.name + "): "
            : ""}
        </h2>
        <Slider {...settings}>
          {similarMoviesDirector.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          ))}
        </Slider>

        <h2>{similarMoviesActor.length > 0 ? "Other Movies with the Actor(s):" : ""}</h2>
        <Slider {...settings}>
          {similarMoviesActor.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          ))}
        </Slider>
        <h2>
          {similarMoviesAuthor.length > 0
            ? "Other Movies based on " + selectedMovie.book.author + "'s books:"
            : ""}
        </h2>
        <Slider {...settings}>
          {similarMoviesAuthor.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          ))}
        </Slider>
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
      <>
        {/* Put Search bar at the top to filter movies */}
        {/* <input type="search" placeholder="Search..." className="searchBar" /> */}
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
