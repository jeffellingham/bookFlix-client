import React from "react";
import PropTypes from "prop-types";
import { MovieCard } from "../MovieCard/movie-card";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m.id === movieId);

  actorString = "";
  if (movie.actors.length > 1) {
    for (let i = 0; i < movie.actors.length; i++) {
      if (i === movie.actors.length - 1) {
        actorString += movie.actors[i] + ".";
      } else {
        actorString += movie.actors[i] + ", ";
      }
    }
  }

  //Setting up the arrays for similar movie sections (genre, director, actor, author)
  let similarMoviesGenre = movies.filter((m) => {
    if (m.genre.name === movie.genre.name && m.title !== movie.title) {
      return m;
    }
  });
  let similarMoviesDirector = movies.filter((m) => {
    if (m.director.name === movie.director.name && m.title !== movie.title) {
      return m;
    }
  });
  let similarMoviesActor = movies.filter((m) => {
    for (let j = 0; j < m.actors.length; j++) {
      let actor = m.actors[j];
      for (let i = 0; i < movie.actors.length; i++) {
        if (actor === movie.actors[i] && m.title !== movie.title) {
          return m, actor;
        }
      }
    }
  });
  let similarMoviesAuthor = movies.filter((m) => {
    if (m.book.author === movie.book.author && m.title !== movie.title) {
      return m;
    }
  });

  //Setting up the slick carousel's settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <slickNextArrow />,
    prevArrow: <slickPrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  // return (
  // <Row className="movieviewRow">
  //   {/* NavBar */}
  //   <NavBar
  //     user={user}
  //     onLogout={() => {
  //       setUser(null);
  //       setToken(null);
  //       localStorage.clear();
  //     }}
  //   />

  // </Row>
  // );
  // }

  return (
    <Container className="movieViewContainer">
      <Row className="movieviewDetails">
        <Col className="movieviewImgContainer md={6}">
          <img src={movie.imagePath} alt="Movie Poster" className="movieviewImg" />
        </Col>
        <Col className="movieviewInfo md={6}">
          <Col className="movieviewHeader">
            <h1>{movie.title}</h1>
            <p>
              <span>{movie.releaseYear}</span>
              <span> • {movie.genre.name}</span>
            </p>
          </Col>
          <div className="movieviewInfo-containers">
            <span>Description: </span>
            <div className="movieviewDeets">{movie.description}</div>
          </div>
          <div className="movieviewInfo-containers">
            <span>Director: </span>
            <div className="movieviewDeets">{movie.director.name}</div>
          </div>
          <div className="movieviewInfo-containers">
            <span>Actors: </span>
            <div className="movieviewDeets">{actorString}</div>
          </div>
          <div className="movieviewInfo-containers">
            <span>Based on: </span>
            <div>
              <span>Title: </span>
              <span className="movieviewDeets"> {movie.book.title}</span>
              <span className="movieviewDeets">
                <strong> By:</strong> {movie.book.author}
              </span>
            </div>
          </div>
          <Link to={`/`}>
            <button className="back-button">Back</button>
          </Link>
        </Col>
      </Row>
      <Row className="movieviewSimilar">
        {/* similarMovies sections */}
        <Col className="movieviewSimilar">
          <h2>Other {movie.genre.name} Movies:</h2>
          <Slider {...settings}>
            {similarMoviesGenre.map((movie) => (
              <MovieCard key={movie.id} movie={movie} className="similarCard" />
            ))}
          </Slider>
          <h2>
            {similarMoviesDirector.length > 0
              ? " Other Movies by Director (" + movie.director.name + "): "
              : ""}
          </h2>
          <Slider {...settings}>
            {similarMoviesDirector.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                className="similarCard"
                // onMovieClick={(newSelectedMovie) => {
                //   setSelectedMovie(newSelectedMovie);
                // }}
              />
            ))}
          </Slider>

          <h2>{similarMoviesActor.length > 0 ? "Other Movies with the Actor(s):" : ""}</h2>
          <Slider {...settings}>
            {similarMoviesActor.map((movie) => (
              <MovieCard key={movie.id} movie={movie} className="similarCard" />
            ))}
          </Slider>
          <h2>
            {similarMoviesAuthor.length > 0 ? "Other Movies based on " + movie.book.author + "'s books:" : ""}
          </h2>
          <Slider {...settings}>
            {similarMoviesAuthor.map((movie) => (
              <MovieCard key={movie.id} movie={movie} className="similarCard" />
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    actors: PropTypes.array,
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
