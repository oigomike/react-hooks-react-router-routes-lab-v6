import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  const navElement = screen.getByRole("navigation");
  expect(navElement).toHaveClass("navbar");
});

test("renders a Home <NavLink>", () => {
  const link = screen.getByText(/Home/i);

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.getAttribute("href")).toBe("/");

  fireEvent.click(link);
  expect(link.classList).toContain("active");
});

test("renders an Actors <NavLink>", () => {
  const link = screen.getByText(/Actors/i);

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.getAttribute("href")).toBe("/actors");

  fireEvent.click(link);
  expect(link.classList).toContain("active");
});

test("renders a Directors <NavLink>", () => {
  const link = screen.getByText(/Directors/i);

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.getAttribute("href")).toBe("/directors");

  fireEvent.click(link);
  expect(link.classList).toContain("active");
});
