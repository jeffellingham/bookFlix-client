import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

// Exporting moviecard function component
export const MovieCard = ({ movie }) => {
  return (
    <Card className="movieCard h-100">
      <Link className="text-decoration-none text-dark" to={`/movies/${encodeURIComponent(movie.id)}`}>
        <Card.Img variant="top" src={movie.imagePath} />
        <Card.Body>
          <Card.Title className="d-inline-block text-truncate">{movie.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {movie.releaseYear} • {movie.genre.name}
          </Card.Subtitle>
          {/* <Card.Text className="movieCard__description d-inline-block text-truncate">
          {movie.description}
        </Card.Text> */}
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
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
};
