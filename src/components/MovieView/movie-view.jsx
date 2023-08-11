export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div className="movieviewContent">
      <div>
        <img src={movie.image} alt="Movie Poster" className="movieviewImg"/>
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Year released: </span>
        <span>{movie.releaseYear}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre.name}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director.name}</span>
      </div>
      <div>
        <span>Actors: </span>
        <span>{movie.actors}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
