import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./login-view.scss";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior (reloading page)
    event.preventDefault();

    // Get the username and password from the form
    const data = {
      username: username,
      password: password,
    };

    fetch("https://book-flix-cd27bc1b730d.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json()) //transforms the response into json object to extract JWT
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          // Stores the user object and token in local storage to persist login session between site refreshes
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          // passes the user and token back to MainView to be used in future API requests
          onLoggedIn(data.user, data.token);
        } else {
          alert("Invalid username or password");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="mt-5 text-center">Welcome back!</h1>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          minLength={3}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </Form.Group>
      <Button variant="success" type="submit" className="mt-3">
        Submit
      </Button>
    </Form>
  );
};
