import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import { SignupView } from "../SignupView/signup-view";
import { ProfileView } from "../ProfileView/profile-view";
import { NavBar } from "../NavBar/nav-bar";
import { Row, Col, Container, Spinner, Form } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main-view.scss";

export const MainView = () => {
  // Use user and token stored in localStorage OR default to null
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  // const [selectedMovie, setSelectedMovie] = useState(null);

  const genres = [];
  movies.forEach((movie) => {
    if (genres.indexOf(movie.genre.name) === -1) {
      genres.push(movie.genre.name);
    }
  });

  const onLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  // const updateUser = (user) => {
  //   setUser(user);
  //   localStorage.setItem("user", JSON.stringify(user));
  // };

  useEffect(() => {
    if (!token) return;

    fetch("https://book-flix-cd27bc1b730d.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            title: movie.title,
            imagePath: movie.imagePath,
            releaseYear: movie.releaseYear,
            genre: {
              name: movie.genre.name,
            },
            description: movie.description,
            director: {
              name: movie.director.name,
            },
            actors: movie.actors,
            book: {
              title: movie.book.title,
              author: movie.book.author,
            },
            duration: movie.duration,
            tomatoRating: {
              rating: movie.tomatoRating.rating,
              audience: movie.tomatoRating.audience,
            },
            trailer: movie.trailer,
          };
        });
        setMovies(moviesFromApi);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, [token]);
  // Token is the 2nd argument of useEffect, known as a dependency array, which ensures fetch is called every time token changes (like after the user logs in)

  return (
    <BrowserRouter>
      <NavBar user={user} onLogout={onLogout} />
      <Container style={{ minHeight: "calc(100vh - 86px)" }}>
        <Row className="justify-content-md-center">
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <SignupView />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <LoginView
                        onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                        }}
                      />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/movies/:movieId"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col className="loading">
                      <Spinner animation="border" variant="success" />
                      <br />
                      Loading the movie data...
                    </Col>
                  ) : (
                    <Col>
                      <MovieView movies={movies} user={user} token={token} setUser={setUser} />
                    </Col>
                  )}
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Row className="searchContainer d-flex mt-4">
                    <Form.Control
                      type="text"
                      placeholder="Search..."
                      className="search-bar"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* Set up a dropdown menu populated with each genre that I can filter the movies by */}
                    <Form.Select
                      className="filter-bar"
                      onChange={(e) => setFilterTerm(e.target.value)}
                      value={filterTerm}>
                      <option value="">All Genres</option>
                      {genres.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </Form.Select>
                  </Row>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : loading ? (
                    <Col className="loading">
                      <Spinner animation="border" variant="success" />
                      <br />
                      Loading the movie data...
                    </Col>
                  ) : movies.length === 0 ? (
                    <Col className="loading">The list is empty...</Col>
                  ) : (
                    <>
                      {movies
                        .filter((movie) => {
                          if (searchTerm === "" && filterTerm === "") {
                            return movie;
                          } else if (
                            searchTerm !== "" &&
                            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
                          ) {
                            if (filterTerm !== "") {
                              return movie.genre.name.toLowerCase().includes(filterTerm.toLowerCase());
                            } else {
                              return movie;
                            }
                          } else if (
                            filterTerm !== "" &&
                            movie.genre.name.toLowerCase().includes(filterTerm.toLowerCase())
                          ) {
                            if (searchTerm !== "") {
                              return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
                            } else {
                              return movie;
                            }
                          }
                        })
                        .map((movie) => (
                          <Col key={movie.id} sm={6} md={4} lg={3} className="mb-3 mt-3 cardContainer">
                            <MovieCard movie={movie} user={user} token={token} setUser={setUser} />
                          </Col>
                        ))}
                      {/* {movies.map((movie) => (
                        <Col key={movie.id} sm={6} md={4} lg={3} className="mb-3 cardContainer">
                          <MovieCard movie={movie} user={user} token={token} setUser={setUser} />
                        </Col>
                      ))} */}
                    </>
                  )}
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <>
                      <ProfileView
                        user={user}
                        movies={movies}
                        token={token}
                        setUser={setUser}
                        onLogout={onLogout}
                      />
                    </>
                  )}
                </>
              }
            />
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
};
