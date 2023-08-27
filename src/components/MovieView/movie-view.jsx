import PropTypes from "prop-types";

export const MovieView = ({ movie, onBackClick }) => {
  actorString = "";
  if (movie.actors.length > 1){
    for (let i =0; i < movie.actors.length; i++) {
      if (i === movie.actors.length - 1) {
        actorString += movie.actors[i] + ".";
      } else {
        actorString += movie.actors[i] + ", ";
      }
    }
  }
  return (
    <div className="movieviewContent">
      {/* <button onClick={onBackClick}>Back</button> */}
      <div className="movieviewImgContainer">
        <img src={movie.imagePath} alt="Movie Poster" className="movieviewImg"/>
      </div>
      <div className="movieviewInfo">
        <div>
          <span>Title: </span>
          <div>{movie.title}</div>
        </div>
        <div>
          <span>Year released: </span>
          <div>{movie.releaseYear}</div>
        </div>
        <div>
          <span>Genre: </span>
          <div>{movie.genre.name}</div>
        </div>
        <div>
          <span>Description: </span>
          <div>{movie.description}</div>
        </div>
        <div>
          <span>Director: </span>
          <div>{movie.director.name}</div>
        </div>
        <div>
          <span>Actors: </span>
          <div>{actorString}</div>
        </div>
        <div>
          <span>Based on: </span>
          <span>{movie.book.title}</span>
          <div><strong> By:</strong> {movie.book.author}</div>
        </div>
      <button onClick={onBackClick}>Back</button>
      </div>
    </div>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    description: PropTypes.string.isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    actors: PropTypes.array,
    book: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
}