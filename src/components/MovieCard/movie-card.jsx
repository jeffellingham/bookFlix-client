import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart, AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SiRottentomatoes } from "react-icons/si";
import "./movie-card.scss";

// Exporting moviecard function component
export const MovieCard = ({ movie, user, token, setUser }) => {
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

  const handleAddFavorite = (e) => {
    e.preventDefault();
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
            // console.log(response);
            return response.json();
          }
        })
        .then((data) => {
          // console.log(data);
          setUser(data);
        })
        .catch((error) => {
          console.error("Error adding your movie to favorites:", error);
        });
    }
  };

  const handleRemoveFavorite = (e) => {
    e.preventDefault();
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

  return (
    <Card className="movieCard h-100">
      <Link className="text-decoration-none text-dark" to={`/movies/${encodeURIComponent(movie.id)}`}>
        <Card.ImgOverlay>
          {isFavorited ? (
            <AiFillHeart
              style={{ color: "seagreen", width: "30px", height: "30px", fontWeight: "bold" }}
              onClick={handleRemoveFavorite}
            />
          ) : (
            <AiOutlineHeart
              style={{ color: "seagreen", width: "30px", height: "30px", fontWeight: "bold" }}
              onClick={handleAddFavorite}
            />
          )}
          {onWatchlist ? (
            <AiFillEye
              style={{ color: "seagreen", width: "30px", height: "30px", fontWeight: "bold" }}
              onClick={handleRemoveFromWatchlist}
            />
          ) : (
            <AiOutlineEyeInvisible
              style={{ color: "seagreen", width: "30px", height: "30px", fontWeight: "bold" }}
              onClick={handleAddToWatchlist}
            />
          )}
        </Card.ImgOverlay>
        <Card.Img alt={movie.title + " poster"} variant="top" src={movie.imagePath} />
        <Card.Body id={movie.title}>
          <Card.Title className="d-inline-block text-truncate">
            {movie.title}
            <small> ({movie.releaseYear})</small>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <SiRottentomatoes size="17px" className="tomato" />
            {movie.tomatoRating.rating}% • {movie.genre.name} • {movie.duration}
          </Card.Subtitle>
        </Card.Body>
      </Link>
    </Card>
  );
};

// Where we define the props constraints for the MovieCard component
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};
