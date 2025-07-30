// src/__tests__/actor.test.jsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Actors from "../components/Actors";

describe("Actors component", () => {
  it("renders the 'Actors' heading", () => {
    render(
      <MemoryRouter>
        <Actors />
      </MemoryRouter>
    );
    expect(screen.getByText(/actors/i)).toBeInTheDocument();
  });

  it("renders known actor names", () => {
    render(
      <MemoryRouter>
        <Actors />
      </MemoryRouter>
    );
    expect(screen.getByText(/Robert Downey Jr./i)).toBeInTheDocument();
    expect(screen.getByText(/Scarlett Johansson/i)).toBeInTheDocument();
  });

  it("renders at least one movie for each actor", () => {
    render(
      <MemoryRouter>
        <Actors />
      </MemoryRouter>
    );
    expect(screen.getByText(/Iron Man/i)).toBeInTheDocument();
    expect(screen.getByText(/Lucy/i)).toBeInTheDocument();
  });
});
