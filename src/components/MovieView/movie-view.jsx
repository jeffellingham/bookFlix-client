import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { MovieCard } from "../MovieCard/movie-card";
import { SimilarCard } from "../MovieCard/similar-card";
import { Col, Row, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  AiFillYoutube,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineArrowLeft,
  AiOutlineEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import { SiRottentomatoes } from "react-icons/si";
import { LuPopcorn } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./movie-view.scss";

export const MovieView = ({ movies, user, token, setUser }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { movieId } = useParams();
  //Pull the movie ID from the URL and use it to find movie in movies array

  const movie = movies.find((m) => m.id === movieId);

  const isFavorited = user && user.favoriteMovies.includes(movie.id);
  const onWatchlist = user && user.watchList.includes(movie.id);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    if (user && !user.watchList.includes(movie.id)) {
      fetch(`https://book-flix-cd27bc1b730d.herokuapp.com/users/${user.username}/watchlist/${movie.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          }
        })
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error adding your movie to watchlist:", error);
        });
    }
  };

  const handleRemoveFromWatchlist = (e) => {
    e.preventDefault();
    fetch(`https://book-flix-cd27bc1b730d.herokuapp.com/users/${user.username}/watchlist/${movie.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error removing your movie from watchlist:", error);
      });
  };

  const handleAddFavorite = () => {
    if (user && !user.favoriteMovies.includes(movie.id)) {
      fetch(`https://book-flix-cd27bc1b730d.herokuapp.com/users/${user.username}/${movie.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          }
        })
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error adding your movie to favorites:", error);
        });
    }
  };

  const handleRemoveFavorite = () => {
    fetch(`https://book-flix-cd27bc1b730d.herokuapp.com/users/${user.username}/${movie.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error removing your movie from favorites:", error);
      });
  };

  //Setting up the arrays for similar movie sections (genre, director, actor, author)
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
    swipeToSlide: true,
    // nextArrow: <slickNextArrow />,
    // prevArrow: <slickPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
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

  return (
    <Container className="movieViewContainer">
      <Row className="movieviewDetails">
        <Col className="movieviewImgContainer md={6}">
          <img src={movie.imagePath} alt="Movie Poster" className="movieviewImg" />
        </Col>
        <Col className="movieviewInfo md={6}">
          <Col className="movieviewHeader">
            <Col className="movieviewIcons d-flex">
              {isFavorited ? (
                <AiFillHeart
                  style={{ color: "seagreen", width: "30px", height: "30px", fontWeight: "bold" }}
                  onClick={handleRemoveFavorite}
                />
              ) : (
                <AiOutlineHeart
                  style={{ color: "seagreen", width: "30px", height: "30px" }}
                  onClick={handleAddFavorite}
                />
              )}
              {onWatchlist ? (
                <AiFillEye
                  style={{ color: "seagreen", width: "30px", height: "30px" }}
                  onClick={handleRemoveFromWatchlist}
                />
              ) : (
                <AiOutlineEyeInvisible
                  style={{ color: "seagreen", width: "30px", height: "30px" }}
                  onClick={handleAddToWatchlist}
                />
              )}
            </Col>
            <h1>{movie.title}</h1>
            <p>
              <span>{movie.releaseYear}</span>
              <span> • {movie.genre.name}</span>
              <span> • {movie.duration}</span>
            </p>
            <p className="movieviewRating">
              <span>
                <SiRottentomatoes color="tomato" />
                {movie.tomatoRating.rating}%
              </span>
              <span>
                {" "}
                • <LuPopcorn color="red" />
                {movie.tomatoRating.audience}%
              </span>
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
            <span>Based on the book: </span>
            <div className="movieviewDeets">{movie.book.title}</div>
          </div>
          <div className="movieviewInfo-containers">
            <span>Written by: </span>
            <div className="movieviewDeets">{movie.book.author}</div>
          </div>
          <div className="btnContainer">
            <a href={movie.trailer} target="_blank" rel="noreferrer">
              <button className="trailer-button">
                Watch <AiFillYoutube className="youtube-logo" size="25px" />
                YouTube Trailer
              </button>
            </a>
            <Link to={`/`} className="d-flex justify-content-center text-decoration-none">
              <button className="back-button">
                <AiOutlineArrowLeft />
                Back
              </button>
            </Link>
          </div>
        </Col>
      </Row>
      {/* similarMovies sections */}
      <Row className="movieviewSimilar">
        <Col className="movieviewSimilar">
          <h2>Other {movie.genre.name} Movies:</h2>
          <Slider {...settings}>
            {similarMoviesGenre.map((movie) => (
              <SimilarCard key={movie.id} movie={movie} />
            ))}
          </Slider>
          <h2>
            {similarMoviesDirector.length > 0
              ? " Other Movies Directed By " + movie.director.name + ": "
              : ""}
          </h2>
          <Slider {...settings}>
            {similarMoviesDirector.map((movie) => (
              <SimilarCard
                key={movie.id}
                movie={movie}
                // onMovieClick={(newSelectedMovie) => {
                //   setSelectedMovie(newSelectedMovie);
                // }}
              />
            ))}
          </Slider>

          <h2>{similarMoviesActor.length > 0 ? "Other Movies with the Actor(s):" : ""}</h2>
          <Slider {...settings}>
            {similarMoviesActor.map((movie) => (
              <SimilarCard key={movie.id} movie={movie} />
            ))}
          </Slider>
          <h2>
            {similarMoviesAuthor.length > 0 ? "Other Movies based on " + movie.book.author + "'s books:" : ""}
          </h2>
          <Slider {...settings}>
            {similarMoviesAuthor.map((movie) => (
              <SimilarCard key={movie.id} movie={movie} />
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
  }),
};
