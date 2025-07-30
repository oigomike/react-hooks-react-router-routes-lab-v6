import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

describe("Home component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  test("renders welcome message", () => {
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });
});

describe("Home NavLink in NavBar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  });

  test("renders a Home <NavLink>", () => {
    const homeLink = screen.getByText("Home");

    expect(homeLink).toBeInTheDocument();               // It renders
    expect(homeLink.tagName).toBe("A");                 // It’s a link
    expect(homeLink.getAttribute("href")).toBe("/");    // Link points to "/"
  });
});
