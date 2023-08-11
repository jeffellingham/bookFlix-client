import { createRoot } from "react-dom/client";
import { MainView } from "./components/MainView/main-view";

// Indicates I need to bundle './index.scss'
import "./index.scss";

// Main component (will eventually use all the others)
const BookFlixApplication = () => {
  return <MainView />; 
  //(
  //   <div className="book-flix">
  //     <div>Good morning, movie and book lovers!</div>
  //   </div>
  // );
};

// Finds the root of my app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render my app in the root DOM element
root.render(<BookFlixApplication />);
