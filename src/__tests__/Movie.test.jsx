import { render, screen } from "@testing-library/react";
import Movie from "../components/Movie";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLoaderData: () => ({
      title: "Doctor Strange",
      time: 115,
      genres: ["Action", "Fantasy"],
    }),
  };
});

describe("Movie component", () => {
  it("displays movie title, time, and genres from loader data", () => {
    render(
      <MemoryRouter>
        <Movie />
      </MemoryRouter>
    );

    expect(screen.getByText("Doctor Strange")).toBeInTheDocument();
    expect(screen.getByText(/Runtime:\s*115\s*minutes/)).toBeInTheDocument(); // ← fixed
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Fantasy")).toBeInTheDocument();
  });
});
