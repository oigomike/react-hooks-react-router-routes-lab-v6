import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h2>Actors Page</h2> {/* ✅ Matches the test exactly */}
      {actors.map((actor, index) => (
        <div key={index}>
          <h3>{actor.name}</h3>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
