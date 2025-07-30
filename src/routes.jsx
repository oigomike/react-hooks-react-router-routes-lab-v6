// src/routes.jsx
import App from "./App";
import Home from "./components/Home";
import Actors from "./components/Actors";
import Directors from "./components/Directors";
import Movie from "./components/Movie";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // matches "/"
        element: <Home />,
      },
      {
        path: "actors", // matches "/actors"
        element: <Actors />,
      },
      {
        path: "directors", // matches "/directors"
        element: <Directors />,
      },
      {
        path: "movie/:id", // matches "/movie/123"
        element: <Movie />,
      },
    ],
  },
];

export default routes;
