import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./app.css";

const App = () => (
  <BrowserRouter>
    <header>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/react-single">
              Single
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/react-lazy">
              Lazy
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/react-multiples">
              Multiples
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/react-route">
              Route
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  </BrowserRouter>
);

export default App;
