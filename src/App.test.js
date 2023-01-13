import React from "react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders my github link", () => {
  render(<App />);
  const linkElement = screen.getByText(/My GitHub/i);
  expect(linkElement).toBeInTheDocument();
});
describe("results of game", () => {
  //test is rendered access player and see what it equals
  //refactor square component so i can have a unique date-testid for each square
  test("Player X goes first", () => {
    const app = render(<App />);
    const square0 = screen.getByTestId("square0");

    expect(square0.textContent).toEqual("");

    act(() => {
      fireEvent.click(square0);
    });
    expect(square0.textContent).toEqual("X");
  });

  test("player O is second", async () => {
    const app = render(<App />);
    const square0 = screen.getByTestId("square0");
    const square1 = screen.getByTestId("square1");

    expect(square0.textContent).toEqual("");

    act(() => {
      fireEvent.click(square0);
    });
    expect(square0.textContent).toEqual("X");
    expect(square1.textContent).toEqual("");

    act(() => {
      fireEvent.click(square1);
    });

    expect(square1.textContent).toEqual("O");
  });
});

test("you can only choose a square once", async () => {
  const app = render(<App />);
  const square0 = screen.getByTestId("square0");

  expect(square0.textContent).toEqual("");

  act(() => {
    fireEvent.click(square0);
  });
  expect(square0.textContent).toEqual("X");

  act(() => {
    fireEvent.click(square0);
  });
  expect(square0.textContent).toEqual("X");
});

test("horizontal win", () => {
  const input = [[0, 1, 2] || [3, 4, 5] || [6, 7, 8]];
  expect();
});

test("vertical win", () => {});

test("diagonal win", () => {});

test("tie", () => {});
