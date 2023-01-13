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
    const square = screen.getByTestId("square0");

    expect(square.textContent).toEqual("");

    act(() => {
      fireEvent.click(square);
    });
    expect(square.textContent).toEqual("X");
  });

  test("player O is second", () => {});
});

test("you can only coose a square once", () => {});

test("horizontal win", () => {
  const input = [[0, 1, 2] || [3, 4, 5] || [6, 7, 8]];
  expect();
});

test("vertical win", () => {});

test("diagonal win", () => {});

test("tie", () => {});
