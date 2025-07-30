import { render, screen } from "@testing-library/react";
import Directors from "../components/Directors"; // ✅ update path as needed
import { MemoryRouter } from "react-router-dom";

describe("Directors component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Directors />
      </MemoryRouter>
    );
  });

  it("renders the header", () => {
    expect(screen.getByText("Directors Page")).toBeInTheDocument();
  });

  it("renders all director names", () => {
    expect(screen.getByText("Scott Derrickson")).toBeInTheDocument();
    expect(screen.getByText("Mike Mitchell")).toBeInTheDocument();
    expect(screen.getByText("Edward Zwick")).toBeInTheDocument();
  });

  it("renders at least one movie for each director", () => {
    expect(screen.getByText("Doctor Strange")).toBeInTheDocument();
    expect(screen.getByText("Trolls")).toBeInTheDocument();
    expect(screen.getByText("Jack Reacher: Never Go Back")).toBeInTheDocument();
  });
});
