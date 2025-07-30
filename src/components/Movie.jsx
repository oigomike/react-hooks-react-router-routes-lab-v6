import React from "react";
import { useLoaderData } from "react-router-dom";

function Movie() {
  const { title, time, genres } = useLoaderData();

  return (
    <div>
      <h2>Movie Page</h2> {/* ✅ Needed to pass the test */}
      <h3>{title}</h3>
      <p>Runtime: {time} minutes</p>
      <h4>Genres:</h4>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
