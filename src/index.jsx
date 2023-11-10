import { createRoot } from "react-dom/client";
import { MainView } from "./components/MainView/main-view";
import { Container } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";
// Indicates I need to bundle './index.scss'
import "./index.scss";

// Main component (will eventually use all the others)
const BookFlixApplication = () => {
  return (
    <Container style={{ backgroundColor: "honeydew" }}>
      <MainView />
    </Container>
  );
};

// Finds the root of my app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render my app in the root DOM element
root.render(<BookFlixApplication />);
