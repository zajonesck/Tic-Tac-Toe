import React from "react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import foundWin from "./App";

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

test(" win", async () => {
  const app = render(<App />);
  const square0 = screen.getByTestId("square0");
  const square1 = screen.getByTestId("square1");
  const square3 = screen.getByTestId("square3");
  const square2 = screen.getByTestId("square2");
  const square6 = screen.getByTestId("square6");

  expect(square0.textContent).toEqual("");
  expect(square1.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square2.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square0);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square2.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square1);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square3.textContent).toEqual("");
  expect(square2.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square3);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square3.textContent).toEqual("X");
  expect(square2.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square2);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square3.textContent).toEqual("X");
  expect(square2.textContent).toEqual("O");
  expect(square6.textContent).toEqual("");
  act(() => {
    fireEvent.click(square6);
  });
  expect(foundWin === true);
});

test("tie", async () => {
  const app = render(<App />);
  const square0 = screen.getByTestId("square0");
  const square1 = screen.getByTestId("square1");
  const square3 = screen.getByTestId("square3");
  const square2 = screen.getByTestId("square2");
  const square6 = screen.getByTestId("square6");
  const square4 = screen.getByTestId("square4");
  const square5 = screen.getByTestId("square5");
  const square7 = screen.getByTestId("square7");
  const square8 = screen.getByTestId("square8");

  expect(square0.textContent).toEqual("");
  expect(square1.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square2.textContent).toEqual("");
  expect(square6.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square5.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square0);
  });
  expect(square0.textContent).toEqual("X");
  expect(square2.textContent).toEqual("");
  expect(square1.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square5.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square6.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square2);
  });
  expect(square0.textContent).toEqual("X");
  expect(square2.textContent).toEqual("O");
  expect(square1.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square5.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square6.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square1);
  });
  expect(square0.textContent).toEqual("X");
  expect(square2.textContent).toEqual("O");
  expect(square1.textContent).toEqual("X");
  expect(square3.textContent).toEqual("");
  expect(square5.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square6.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square3);
  });
  expect(square0.textContent).toEqual("X");
  expect(square2.textContent).toEqual("O");
  expect(square1.textContent).toEqual("X");
  expect(square3.textContent).toEqual("O");
  expect(square5.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square6.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square5);
  });

  expect(square0.textContent).toEqual("X");
  expect(square2.textContent).toEqual("O");
  expect(square1.textContent).toEqual("X");
  expect(square3.textContent).toEqual("O");
  expect(square5.textContent).toEqual("X");
  expect(square4.textContent).toEqual("");
  expect(square6.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square4);
  });
  expect(square0.textContent).toEqual("X");
  expect(square2.textContent).toEqual("O");
  expect(square1.textContent).toEqual("X");
  expect(square3.textContent).toEqual("O");
  expect(square5.textContent).toEqual("X");
  expect(square4.textContent).toEqual("O");
  expect(square6.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square6);
  });
  expect(square0.textContent).toEqual("X");
  expect(square2.textContent).toEqual("O");
  expect(square1.textContent).toEqual("X");
  expect(square3.textContent).toEqual("O");
  expect(square5.textContent).toEqual("X");
  expect(square4.textContent).toEqual("O");
  expect(square6.textContent).toEqual("X");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square7);
  });
  expect(square0.textContent).toEqual("X");
  expect(square2.textContent).toEqual("O");
  expect(square1.textContent).toEqual("X");
  expect(square3.textContent).toEqual("O");
  expect(square5.textContent).toEqual("X");
  expect(square4.textContent).toEqual("O");
  expect(square6.textContent).toEqual("X");
  expect(square7.textContent).toEqual("O");
  expect(square8.textContent).toEqual("");

  act(() => {
    fireEvent.click(square8);
  });
  expect(foundWin === false);
});

test("full board win", async () => {
  const app = render(<App />);
  const square0 = screen.getByTestId("square0");
  const square1 = screen.getByTestId("square1");
  const square3 = screen.getByTestId("square3");
  const square2 = screen.getByTestId("square2");
  const square6 = screen.getByTestId("square6");
  const square4 = screen.getByTestId("square4");
  const square5 = screen.getByTestId("square5");
  const square7 = screen.getByTestId("square7");
  const square8 = screen.getByTestId("square8");

  expect(square0.textContent).toEqual("");
  expect(square1.textContent).toEqual("");
  expect(square2.textContent).toEqual("");
  expect(square5.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square0);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("");
  expect(square2.textContent).toEqual("");
  expect(square5.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square1);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square2.textContent).toEqual("");
  expect(square5.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square2);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square2.textContent).toEqual("X");
  expect(square5.textContent).toEqual("");
  expect(square3.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square5);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square2.textContent).toEqual("X");
  expect(square5.textContent).toEqual("O");
  expect(square3.textContent).toEqual("");
  expect(square4.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square3);
  });

  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square2.textContent).toEqual("X");
  expect(square5.textContent).toEqual("O");
  expect(square3.textContent).toEqual("X");
  expect(square4.textContent).toEqual("");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square4);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square2.textContent).toEqual("X");
  expect(square5.textContent).toEqual("O");
  expect(square3.textContent).toEqual("X");
  expect(square4.textContent).toEqual("O");
  expect(square7.textContent).toEqual("");
  expect(square8.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square7);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square2.textContent).toEqual("X");
  expect(square5.textContent).toEqual("O");
  expect(square3.textContent).toEqual("X");
  expect(square4.textContent).toEqual("O");
  expect(square7.textContent).toEqual("X");
  expect(square8.textContent).toEqual("");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square8);
  });
  expect(square0.textContent).toEqual("X");
  expect(square1.textContent).toEqual("O");
  expect(square2.textContent).toEqual("X");
  expect(square5.textContent).toEqual("O");
  expect(square3.textContent).toEqual("X");
  expect(square4.textContent).toEqual("O");
  expect(square7.textContent).toEqual("X");
  expect(square8.textContent).toEqual("O");
  expect(square6.textContent).toEqual("");

  act(() => {
    fireEvent.click(square6);
  });
  expect(foundWin === true);
});
