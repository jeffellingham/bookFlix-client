import PropTypes from "prop-types";
import "./movie-view.scss";
import { Col, Row } from "react-bootstrap";

export const MovieView = ({ movie, onBackClick }) => {
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
  return (
    <div className="movieViewContainer">
      {/* <button onClick={onBackClick}>Back</button> */}
      <Col className="movieviewImgContainer md={6}">
        <img src={movie.imagePath} alt="Movie Poster" className="movieviewImg" />
      </Col>
      <Col className="movieviewInfo md={6}">
        <div className="movieviewInfo-containers">
          <span>Title: </span>
          <div className="movieviewDeets">{movie.title}</div>
        </div>
        <div className="movieviewInfo-containers">
          <span>Year released: </span>
          <div className="movieviewDeets">{movie.releaseYear}</div>
        </div>
        <div className="movieviewInfo-containers">
          <span>Genre: </span>
          <div className="movieviewDeets">{movie.genre.name}</div>
        </div>
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
        <button onClick={onBackClick} className="back-button">
          Back
        </button>
      </Col>
    </div>
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
  onBackClick: PropTypes.func.isRequired,
};
