import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SiRottentomatoes } from "react-icons/si";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./movie-card.scss";

// Exporting moviecard function component
export const SimilarCard = ({ movie }) => {
  return (
    <Card
      className="similarCard h-100"
      onMouseOver={() => document.getElementById(movie.title).classList.remove("hidden")}
      onMouseLeave={() => document.getElementById(movie.title).classList.add("hidden")}>
      <Link className="text-decoration-none" to={`/movies/${encodeURIComponent(movie.id)}`}>
        <Card.Img alt={movie.title + " poster"} variant="top" src={movie.imagePath} />
        <Card.ImgOverlay id={movie.title} className="hidden overlayDeets">
          <Card.Title className="d-inline-block text-truncate">{movie.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-white">
            {movie.releaseYear} • {movie.genre.name} • <SiRottentomatoes className="tomato" />
            {movie.tomatoRating.rating}%
          </Card.Subtitle>
        </Card.ImgOverlay>
      </Link>
    </Card>
  );
};

// Where we define the props constraints for the MovieCard component
SimilarCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
};
