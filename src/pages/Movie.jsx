import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { title, time, genres } = useLoaderData();

  return (
    <>
      <NavBar />
      <main>
        <h1>{title}</h1>
        <p>{time}</p>
        {genres.map((genre) => (
          <span key={genre} style={{ marginRight: "10px" }}>
            {genre}
          </span>
        ))}
      </main>
    </>
  );
}

export default Movie;
