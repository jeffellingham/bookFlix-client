import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { AiOutlineHeart, AiOutlineEyeInvisible } from "react-icons/ai";
import "./profile-view.scss";
import { MovieCard } from "../MovieCard/movie-card";
import { SimilarCard } from "../MovieCard/similar-card";

// TODO: 3 sections that I can make components for are user information, a form for editing user information, and a list of user's favorite movies.
// TODO: I definitely think I should make a component for at least the favorite movies section, because I'd still like to try to add it as a sidebar to MainView and MovieView (tablet and desktop sizes at least).----Using it for the sidebar wouldn't likely work.
// TODO: I'd also like to make the favorite's list customizable by the user so they can order it and rank them according to their personal preferences.
// TODO: The idea of allowing users to rank each movie is also still something I'd like to try, and that would factor into the ranking system as well. It'd be the default sorting/ranking criteria, then the user could order the movies that have the same ranking otherwise throw an error and be prompted to rank the movie higher if they want to order it that way?
// TODO!: Another cool thing I could do is to add the ability on the main page for users to filter out movies that they've favorited and/or ranked and only see unwatched movies. Obviously to also have an option to see only the movies on their watchlist (which a full list of will be located on their profile page).---There should be two checkbox options for each group: only favorites/only non-favorited and only watchlist/only non-watchlist. Does that make sense..?
// TODO: Maybe create another separate Card component for the favorite movie's list cards and experiment with different styles, such as having the posters smaller and to the left with all the information, including the description, to the right. That would make it far more like a list and help if I do set up the ranking/rating system.

export const ProfileView = ({ user, movies, token, setUser, onLogout }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const favoriteMoviesList = movies.filter((m) => {
    return user.favoriteMovies.includes(m.id);
  });
  const watchlistList = movies.filter((m) => {
    return user.watchList.includes(m.id);
  });

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
      setPassword(user.password);
      setBirthday(user.birthday);
    }
  }, [user]);

  const handleUserUpdate = (event) => {
    event.preventDefault();

    const updatedUser = {
      username,
      email,
      password,
      birthday,
    };

    fetch(`https://book-flix-cd27bc1b730d.herokuapp.com/users/${user.username}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
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
        console.log(data);
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        alert("Successfully updated user info!");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error updating your info:", error);
      });
  };

  //Function to delete the user's account
  const handleUserDelete = (event) => {
    event.preventDefault();

    fetch(`https://book-flix-cd27bc1b730d.herokuapp.com/users/${user.username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          onLogout();
        } else {
          alert("Error deleting your account!");
        }
      })
      .catch((error) => {
        console.error("Error deleting your account:", error);
      });
  };

  return (
    <Container>
      <Row className="account-info mt-5 mb-5">
        <Col md={6}>
          <div className="profile-info">
            <h3>{user.username}'s current info</h3>
            <p>
              <strong>Name: </strong>
              {user.username}
            </p>
            <p>
              <strong>Email: </strong> {user.email}
            </p>
            {user.birthday ? (
              <p>
                <strong>Birthday: </strong> {user.birthday.slice(0, 10)}
              </p>
            ) : null}
          </div>
          <br />
          <div className="delete-account d-flex">
            <h4 className="mt-3">Want to delete your account? </h4>
            <p>Careful! There's no confirmation or turning back.</p>
            <Button variant="danger" onClick={handleUserDelete}>
              Delete Account
            </Button>
          </div>
        </Col>
        <Col md={6}>
          <h3>Update your info</h3>
          <Form onSubmit={handleUserUpdate}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter new username..."
                onChange={(e) => setUsername({ ...user, username: e.target.value })}
                minLength={3}
                // required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter new password..."
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter new email address..."
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                // required
              />
            </Form.Group>
            <Form.Group controlId="formBirthday" className="mb-3">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control type="date" name="birthday" onChange={(e) => setBirthday(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <hr />
      <Row className="mt-3">
        <h2>{user.username}'s Favorite Movies:</h2>
        {user.favoriteMovies.length > 0 ? (
          favoriteMoviesList.map((movie) => {
            return (
              <Col sm={6} md={4} lg={3} key={movie.id} className="profileCard-container">
                <MovieCard movie={movie} user={user} token={token} setUser={setUser} />
              </Col>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>
            If any movies are among your favorites, click their{" "}
            <AiOutlineHeart
              style={{ color: "seagreen", width: "30px", height: "30px", fontWeight: "bold" }}
            />{" "}
            icon and they'll appear here!
          </p>
        )}
      </Row>
      <hr />
      <Row className="mt-5">
        <h2>{user.username}'s Watchlist:</h2>
        {user.watchList.length > 0 ? (
          watchlistList.map((movie) => {
            return (
              <Col sm={6} md={4} lg={3} key={movie.id} className="profileCard-container">
                <MovieCard movie={movie} user={user} token={token} setUser={setUser} />
              </Col>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>
            If there's any movies you want to watch, click their{" "}
            <AiOutlineEyeInvisible
              style={{ color: "seagreen", width: "30px", height: "30px", fontWeight: "bold" }}
            />{" "}
            icon and they'll appear here!
          </p>
        )}
      </Row>
    </Container>
  );

  // return (
  //   <>
  //     <UserInfo />
  //     <UpdateInfo />
  //     <FavoriteMovies />
  //   </>
  // );
};
