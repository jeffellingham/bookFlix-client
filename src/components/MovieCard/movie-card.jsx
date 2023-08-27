import PropTypes from "prop-types";

// Exporting moviecard function component
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
      className="movieCard">
        <img src={movie.imagePath} />
        <span className="movieCard__year">({movie.releaseYear})</span>
        {movie.title}
    </div>
  );
};


// Where we define the props constraints for the MovieCard component
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
}