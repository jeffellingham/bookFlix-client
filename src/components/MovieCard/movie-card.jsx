// Exporting moviecards with their title and image and an onClick function
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
      className="movieCard">
        <img src={movie.image} />
        {movie.title}
    </div>
  );
};
