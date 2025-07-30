function Actors() {
  const actors = [
    {
      name: "Benedict Cumberbatch",
      movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
    },
    {
      name: "Justin Timberlake",
      movies: ["Trolls", "Friends with Benefits", "The Social Network"],
    },
    {
      name: "Anna Kendrick",
      movies: ["Pitch Perfect", "Into The Woods"],
    },
    {
      name: "Tom Cruise",
      movies: [
        "Jack Reacher: Never Go Back",
        "Mission Impossible 4",
        "War of the Worlds",
      ],
    },
  ];

  return (
    <main>
      <h1>Actors Page</h1>
      {actors.map((actor) => (
        <section key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

export default Actors;
